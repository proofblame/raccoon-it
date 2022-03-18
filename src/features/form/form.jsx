import { useEffect, useState } from 'react';

import styles from './form.module.scss';
import Button from '../../shared/UI/button/button';
import api from '../../features/utils/api';
import Snackbar from '../../features/snackbar/snackbar';
import InputError from '../../features/input-error/input-error';
import { langLib } from '../../utils/langLib';
import { useSelector } from 'react-redux';

const Form = () => {
  const { lang } = useSelector(store => store.lang)
  const { form } = langLib[lang]
  const [isShown, setIsShown] = useState(false);
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    desc: '',
    checkbox: false,
  });
  const [formValid, setFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    desc: '',
    checkbox: '',
  });
  const [validState, setValidState] = useState({
    name: false,
    email: false,
    desc: false,
    checkbox: false,
  });

  useEffect(() => {
    isFormValid();

  }, [data, validState]);

  function onChange(e) {
    const { name, validity, validationMessage } = e.target;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setData({
      ...data,
      [name]: value,
    });

    if (name === 'email') {
      const mailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
        value
      );
      setValidState({ ...validState, email: mailReg });
    } else if (name === 'checkbox') {
      setValidState({ ...validState, checkbox: value });
    } else {
      setValidState({ ...validState, [name]: validity.valid });
    }
    setFormValid(validity.valid);

    if (!validity.valid) {
      setErrorMessage({
        ...errorMessage,
        [name]: validationMessage,
      });
    } else {
      setErrorMessage(
        {
          ...errorMessage,
          [name]: validationMessage,
        }
      );
    }
  }

  const isFormValid = () => {
    const { name, email, desc, checkbox } = validState;
    setFormValid(name && email && desc && checkbox);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formValid) {
      setLoading(true)
      await api.sendRequest(data);
      setMessage(form.setMessage);
      setIsShown(true);
      setData({
        name: '',
        email: '',
        desc: '',
        checkbox: false,
      });
      setValidState({
        name: false,
        email: false,
        desc: false,
        checkbox: false,
      });
      setTimeout(() => {
        setIsShown(false);
        setLoading(false);
      }, 3000);
    } else {
      onChange()
    }

  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <fieldset className={styles.inputs}>
          <input
            className={`${styles.input} ${errorMessage.name || errorMessage.name ? `${styles.error}` : ''}`}
            type='text'
            placeholder={form.placeholder1}
            name='name'
            autoFocus={true}
            required
            minLength='1'
            value={data.name}
            onChange={onChange}
          />
          <InputError id='name-error' text={errorMessage.name} />
          <input
            className={`${styles.input} ${errorMessage.email ? `${styles.error}` : ''}`}
            type='email'
            placeholder={form.placeholder2}
            name='email'
            required
            minLength='1'
            value={data.email}
            onChange={onChange}
          />
          <InputError id='name-error' text={errorMessage.email} />
          <textarea
            className={`${styles.input} ${errorMessage.desc ? `${styles.error}` : ''}`}
            type='text'
            placeholder={form.placeholder3}
            name='desc'
            required
            minLength='1'
            value={data.desc}
            onChange={onChange}
          />
          <InputError id='name-error' text={errorMessage.desc} />
        </fieldset>
        <fieldset className={styles.checkbox}>
          <InputError id='name-checkbox' text={errorMessage.checkbox} />
          <label className={styles.label} htmlFor='agreement'>
            <input className={styles.check} type='checkbox'
              name='checkbox'
              id='agreement'
              required
              checked={data.checkbox}
              onChange={onChange}
            />
            <span className={styles.pseudoItem}></span>
            <p className={styles.caption}>
              {form.caption} <br />
              <a className={styles.link} target='_blank' href='./policy.pdf'>
                {form.link}
              </a>
            </p>
          </label>
        </fieldset>
        <Button type='submit' >
          {!loading ? form.setLoadingDefault : form.setLoading}
        </Button>
      </form>
      <Snackbar isShown={isShown} message={message} />
    </>
  );
};

export default Form;
