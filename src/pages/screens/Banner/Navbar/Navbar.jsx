import { Link } from 'react-scroll';

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
              <Link
                to='banner'
                smooth={true}
                duration={1000}
                onClick={handleOpened}
                className={navbar.listItemLink}
              >
                Главная
              </Link>
            </li>
            <li className={navbar.listItem}>
              <Link
                to='about'
                smooth={true}
                duration={1000}
                onClick={handleOpened}
                className={navbar.listItemLink}
              >
                О нас
              </Link>
            </li>
            <li className={navbar.listItem}>
              <Link
                to='tenets'
                smooth={true}
                duration={1000}
                onClick={handleOpened}
                className={navbar.listItemLink}
              >
                Наши принципы
              </Link>
            </li>
            <li className={navbar.listItem}>
              <Link
                to='projects'
                smooth={true}
                duration={1000}
                onClick={handleOpened}
                className={navbar.listItemLink}
              >
                Проекты
              </Link>
            </li>
            <li className={navbar.listItem}>
              <Link
                to='workflow'
                smooth={true}
                duration={1000}
                onClick={handleOpened}
                className={navbar.listItemLink}
              >
                Как мы работаем
              </Link>
            </li>
            <li className={navbar.listItem}>
              <Link
                to='techs'
                smooth={true}
                duration={1000}
                onClick={handleOpened}
                className={navbar.listItemLink}
              >
                Наши технологии
              </Link>
            </li>
            <li className={navbar.listItem}>
              <Link
                to='discuss'
                smooth={true}
                duration={1000}
                onClick={handleOpened}
                className={navbar.listItemLink}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={navbar.addressListWrapper}>
          <ul className={navbar.addressList}>
            <li className={navbar.phone}>+7 (916) (552) 05 51</li>
            <li className={navbar.email}>info@raccoon-it.dev</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
