import { Link } from 'react-scroll';
import React, { Suspense } from 'react';

import styles from './Banner.module.scss';

import H1 from '../../../shared/UI/H1/H1';
import Button from '../../../shared/UI/Button/Button';
import logo from './images/logo.svg';
import Hand from './images/Hand.webp';
import Mobile from './images/Mobile.svg';
import Mobile1Part from './images/Mobile1part.svg';
import Mobile2Part from './images/Mobile2part.svg';
import Mobile3Part from './images/Mobile3part.svg';
import Mobile4Part from './images/Mobile4part.svg';
import Container from '../../../shared/UI/Container/Container';
// import Navbar from './Navbar/Navbar';
const Navbar = React.lazy(() => import('./Navbar/Navbar'))

const Banner = ({ isOpened, handleOpened, handleCloseByClickOnOverlay }) => {
  return (
    <section className={styles.banner} id='banner'>
      <Container>
        <div className={styles.bannerWrapper}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <img
                src={logo}
                alt='RaccoonIT IT Development'
                className={styles.imgLogo}
              />
              <p className={styles.titleLogo}>
                RaccoonIT <br /> IT&nbsp;Development
              </p>
            </div>

            <div className={styles.burger} onClick={handleOpened}>
              <div className={styles.burgerLine}></div>
            </div>
          </header>

          <div className={styles.body}>
            <div className={styles.bodyWrapper}>
              <H1 className={styles.title}>
                WEB <br /> Development
              </H1>
              <p className={styles.subtitle}>
                Автоматизируем бизнес и создаём digital-решение
              </p>
              <Link to='discuss' smooth={true} duration={1000}>
                <Button>Оставить заявку</Button>
              </Link>
            </div>

            <div className={styles.imgWrapper}>
              <img
                src={Hand}
                alt='synthetic hand'
                className={styles.imgBlock}
              />
              <div className={styles.mobileBlock}>
                <img src={Mobile} alt='mobile' className={styles.mobile} />
                <img
                  src={Mobile1Part}
                  alt='Mobile1Part'
                  className={styles.mobile1Part}
                />
                <img
                  src={Mobile2Part}
                  alt='Mobile2Part'
                  className={styles.mobile2Part}
                />
                <img
                  src={Mobile3Part}
                  alt='Mobile3Part'
                  className={styles.mobile3Part}
                />
                <img
                  src={Mobile4Part}
                  alt='Mobile4Part'
                  className={styles.mobile4Part}
                />
              </div>
            </div>
            <div className={styles.pages}></div>
          </div>
        </div>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Navbar
            isOpened={isOpened}
            handleOpened={handleOpened}
            handleCloseByClickOnOverlay={handleCloseByClickOnOverlay}
          />
        </Suspense>
      </Container>
    </section>
  );
};

export default Banner;
