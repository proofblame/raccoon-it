import discuss from './Discuss.module.scss';
import { useEffect, useState } from 'react';

import Container from '../../../shared/UI/Container/Container';
import H2 from '../../../shared/UI/H2/H2';
import Button from '../../../shared/UI/Button/Button';
import Snackbar from '../Snackbar/Snackbar';
import api from '../../../features/utils/api';

const Discuss = () => {
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
    <section className={discuss.section} id='discuss'>
      <Container>
        <div className={discuss.wrapper}>
          <div className={discuss.headerWrapper}>
            <H2>Обсудим проект?</H2>
          </div>
          <div className={discuss.formWrapper}>
            <form className={discuss.form}>
              <input
                type='text'
                name='name'
                className={discuss.formName}
                placeholder='Ваше Имя'
                value={data.name}
                onChange={onChange}
                minLength='1'
                required
              />
              <input
                type='email'
                name='email'
                className={discuss.formEmail}
                placeholder='Ваша Почта'
                value={data.email}
                onChange={onChange}
                minLength='1'
                required
              />
              <textarea
                className={discuss.comments}
                placeholder='Комментарий'
                name='desc'
                value={data.desc}
                onChange={onChange}
                minLength='1'
                required
              />
              <label htmlFor='agreement' className={discuss.agreement}>
                <input
                  type='checkbox'
                  name='checkbox'
                  id='agreement'
                  className={discuss.checkbox}
                  checked={data.checkbox}
                  onChange={onChange}
                />
                <span className={discuss.pseudoItem}></span>
                <p className={discuss.checkboxText}>
                  Даю согласие на обработку данных <br />
                  <a href='#' className={discuss.link}>
                    Политика конфиденциальности
                  </a>
                </p>
              </label>
              <Button
                type='submit'
                className={discuss.formSubmit}
                disabled={!formValid}
                onClick={onSubmit}
              >
                Отправить&nbsp;заявку
              </Button>
            </form>
            <Snackbar isShown={isShown} message={message} />
            <footer className={discuss.addressListWrapper}>
              <ul className={discuss.addressList}>
                {/* <li className={discuss.address}>Москва, ул. Какая-то 25</li> */}
                <li className={discuss.email}>info@raccoon-it.dev</li>
                <li className={discuss.phone}>+7 (999) (999) 99 99</li>
              </ul>
            </footer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Discuss;
