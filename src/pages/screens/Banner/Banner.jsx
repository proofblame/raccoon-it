import styles from './Banner.module.scss'
import H1 from '../../../shared/UI/H1/H1'
import Button from '../../../shared/UI/Button/Button'
import logo from './images/logo.svg'
import imgBlock from './images/img-block.svg'
import Container from '../../../shared/UI/Container/Container'


const Banner = ({ isOpened, handleOpen }) => {
  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.bannerWrapper}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <img src={logo} alt="RaccoonIT IT Development" className={styles.imgLogo} />
              <p className={styles.titleLogo}>RaccoonIT <br /> IT&nbsp;Development</p>
            </div>

            <div
              className={`${styles.burger} ${styles.burger_animate_1} ${isOpened ? `` : `${styles.burger_animate_2}`
                }`}
            >
              <span></span> <span></span> <span></span>
            </div>
          </header>

          <div className={styles.body}>
            <div className={styles.bodyWrapper}>
              <H1>WEB <br /> Development</H1>
              <p className={styles.subtitle}>
                Автоматизируем бизнес
                и создим
                digital-решение
              </p>
              <Button>Оставить заявку</Button>
            </div>
            <div className={styles.imgWrapper}>
              <img src={imgBlock} alt="imgBlock" className={styles.imgBlock} />
            </div>
            <div className={styles.pages}>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Banner
