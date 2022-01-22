import navbar from './Navbar.module.scss';

import logo from '../images/logo.svg';

function Navbar({ isOpened, handleOpened, handleCloseByClickOnOverlay }) {
  return (
    <section
      className={`${navbar.navbarBackground} ${
        isOpened
          ? `${navbar.navbarBackgroundIsOpened}`
          : `${navbar.navbarBackgroundIsClosed}`
      }`}
      onClick={handleCloseByClickOnOverlay}
    >
      <div
        className={`${navbar.navbar} ${
          isOpened ? `${navbar.navbarIsOpened}` : `${navbar.navbarIsClosed}`
        }`}
      >
        <div className={navbar.header}>
          <div className={navbar.logo}>
            <img
              src={logo}
              alt='RaccoonIT IT Development'
              className={navbar.imgLogo}
            />
            <p className={navbar.titleLogo}>
              RaccoonIT <br /> IT&nbsp;Development
            </p>
          </div>
          <button
            type='button'
            className={navbar.navbarClose}
            onClick={handleOpened}
          ></button>
        </div>
        <nav className={navbar.navbarList}>
          <ul className={navbar.list}>
            <li className={navbar.listItem}>
              <a href='#' to='/plan' className={navbar.listItemLink}>
                Главная
              </a>
            </li>
            <li className={navbar.listItem}>
              <a href='#' to='/plan' className={navbar.listItemLink}>
                О нас
              </a>
            </li>
            <li className={navbar.listItem}>
              <a href='#' to='/plan' className={navbar.listItemLink}>
                Наши принципы
              </a>
            </li>
            <li className={navbar.listItem}>
              <a href='#' to='/plan' className={navbar.listItemLink}>
                Проекты
              </a>
            </li>
            <li className={navbar.listItem}>
              <a href='#' to='/plan' className={navbar.listItemLink}>
                Как мы работаем
              </a>
            </li>
            <li className={navbar.listItem}>
              <a href='#' to='/plan' className={navbar.listItemLink}>
                Наши технологии
              </a>
            </li>
            <li className={navbar.listItem}>
              <a href='#' to='/plan' className={navbar.listItemLink}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div className={navbar.addressListWrapper}>
          <ul className={navbar.addressList}>
            <li className={navbar.phone}>+7 (999) (999) 99 99</li>
            <li className={navbar.email}>raccoon@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
