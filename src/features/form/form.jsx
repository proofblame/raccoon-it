import { useEffect, useState } from 'react';

import styles from './form.module.scss';
import Button from '../../shared/UI/button/button';
import api from '../../features/utils/api';
import Snackbar from '../../features/snackbar/snackbar';
import InputError from '../../features/input-error/input-error';

const Form = () => {
  const [isShown, setIsShown] = useState(false);
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
    checkbox: false,
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
      setErrorMessage('');
    }
  }

  const isFormValid = () => {
    const { name, email, desc, checkbox } = validState;
    setFormValid(name && email && desc && checkbox);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.sendRequest(data);
    setMessage('Данные отправлены, спасибо!');
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
    }, 3000);
  };

  return (
    <>
      <form className={styles.form}>
        <fieldset className={styles.inputs}>
          <input
            className={`${styles.input} ${errorMessage.name ? `${styles.error}` : ''}`}
            type='text'
            placeholder='ваше имя'
            name='name'
            required
            minLength='1'
            value={data.name}
            onChange={onChange}
          />
          <InputError id='name-error' text={errorMessage.name} />
          <input
            className={`${styles.input} ${errorMessage.email ? `${styles.error}` : ''}`}
            type='email'
            placeholder='ваша почта'
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
            placeholder='Комментарий'
            name='desc'
            required
            minLength='1'
            value={data.desc}
            onChange={onChange}
          />
          <InputError id='name-error' text={errorMessage.desc} />
        </fieldset>
        <fieldset className={styles.checkbox}>
          <label className={styles.label} htmlFor='agreement'>
            <input className={styles.check} type='checkbox'
              name='checkbox'
              id='agreement'
              checked={data.checkbox}
              onChange={onChange}
            />
            <span className={styles.pseudoItem}></span>
            <p className={styles.caption}>
              Даю согласие на обработку данных <br />
              <a className={styles.link} target='_blank' href='./policy.pdf'>
                Политика конфиденциальности
              </a>
            </p>
          </label>
          <Button type='submit' disabled={!formValid} onClick={onSubmit}>
            Отправить заявку
          </Button>
        </fieldset>
      </form>
      <Snackbar isShown={isShown} message={message} />
    </>
  );
};

export default Form;
