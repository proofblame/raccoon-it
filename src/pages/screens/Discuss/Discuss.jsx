import discuss from './Discuss.module.scss';
import { useEffect, useState } from 'react';

import Container from '../../../shared/UI/Container/Container';
import H2 from '../../../shared/UI/H2/H2';
import Button from '../../../shared/UI/Button/Button';
import Snackbar from '../Snackbar/Snackbar';

const Discuss = ({ sendRequest }) => {
  const [isShown, setIsShown] = useState(false);
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    desc: '',
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    isFormValid();
  }, [data]);

  function onChange(e) {
    const { name, value, validity } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    if (!validity.valid) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }
  const isFormValid = () => {
    const { name, email, desc } = data;
    setFormValid(name && email && desc);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const checkValidity = () => {
    // if (data.name.length > 0) {
    //   setValid({ ...valid, nameValid: true });
    // } else {
    //   setValid({ ...valid, nameValid: false });
    // }
    // if (data.email.length > 0) {
    //   setValid({ ...valid, emailValid: true });
    // } else {
    //   setValid({ ...valid, emailValid: false });
    // }
    // if (data.desc.length > 0) {
    //   setValid({ ...valid, descValid: true });
    // } else {
    //   setValid({ ...valid, descValid: false });
    // }
  };

  // console.log(valid);
  console.log(formValid);
  // console.log(valid);
  function onChangeForm(e) {
    e.preventDefault();
  }
  return (
    <section className={discuss.section} id='discuss'>
      <Container>
        <div className={discuss.wrapper}>
          <div className={discuss.headerWrapper}>
            <H2>Обсудим проект?</H2>
          </div>
          <div className={discuss.formWrapper}>
            <form className={discuss.form} onSubmit={onSubmit}>
              <input
                type='text'
                name='name'
                id=''
                className={discuss.formName}
                placeholder='Ваше Имя'
                defaultValue={data.name}
                onChange={onChange}
              />
              <input
                type='email'
                name='email'
                id=''
                className={discuss.formEmail}
                placeholder='Ваша Почта'
                defaultValue={data.email}
                onChange={onChange}
              />
              <textarea
                className={discuss.comments}
                placeholder='Комментарий'
                name='desc'
                defaultValue={data.desc}
                onChange={onChange}
              />
              <label htmlFor='agreement' className={discuss.agreement}>
                <input
                  type='checkbox'
                  name=''
                  id='agreement'
                  className={discuss.checkbox}
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
