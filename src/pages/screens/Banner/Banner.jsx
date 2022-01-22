import styles from './Banner.module.scss';
import H1 from '../../../shared/UI/H1/H1';
import Button from '../../../shared/UI/Button/Button';
import logo from './images/logo.svg';
import imgBlock from './images/img-block.svg';
import Container from '../../../shared/UI/Container/Container';
import Navbar from './Navbar/Navbar';

const Banner = ({ isOpened, handleOpened, handleCloseByClickOnOverlay }) => {
  return (
    <section className={styles.banner}>
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
              <Button>Оставить заявку</Button>
            </div>
            <div className={styles.imgWrapper}>
              <img src={imgBlock} alt='imgBlock' className={styles.imgBlock} />
            </div>
            <div className={styles.pages}></div>
          </div>
        </div>
        <Navbar
          isOpened={isOpened}
          handleOpened={handleOpened}
          handleCloseByClickOnOverlay={handleCloseByClickOnOverlay}
        />
      </Container>
    </section>
  );
};

export default Banner;
