import discuss from './Discuss.module.scss';
import { useState } from 'react';

import Container from '../../../shared/UI/Container/Container';
import H2 from '../../../shared/UI/H2/H2';
import Button from '../../../shared/UI/Button/Button';

const Discuss = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <section className={discuss.section}>
      <Container>
        <div className={discuss.wrapper}>
          <div className={discuss.headerWrapper}>
            <H2>Обсудим проект?</H2>
          </div>
          <div className={discuss.formWrapper}>
            <form className={discuss.form}>
              <input
                type='text'
                name=''
                id=''
                className={discuss.formName}
                placeholder='Ваше Имя'
              />
              <input
                type='email'
                name=''
                id=''
                className={discuss.formEmail}
                placeholder='Ваша Почта'
              />
              <textarea
                className={discuss.comments}
                placeholder='Комментарий'
              />
              <label htmlFor='agreement' className={discuss.agreement}>
                <input
                  type='checkbox'
                  name=''
                  id='agreement'
                  className={discuss.checkbox}
                  checked={checked}
                  onChange={toggleCheck}
                />
                <span className={discuss.pseudoItem}></span>
                <p className={discuss.checkboxText}>
                  Даю согласие на обработку данных <br />
                  <a href='#' className={discuss.link}>
                    Политика конфиденциальности
                  </a>
                </p>
              </label>
              <Button type='submit' className={discuss.formSubmit}>
                Отправить заявку
              </Button>
            </form>

            <footer className={discuss.addressListWrapper}>
              <ul className={discuss.addressList}>
                <li className={discuss.address}>Москва, ул. Какая-то 25</li>
                <li className={discuss.email}>raccoon@gmail.com</li>
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
