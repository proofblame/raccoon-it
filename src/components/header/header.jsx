import styles from './header.module.scss'
import Container from '../../shared/UI/container/container'
import logo from '../../shared/images/logo.svg'

const Header = ({ active, onToggle }) => {

  return (
    <header className={styles.header} id='header'>
      <Container>
        <section className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="RaccoonIT IT Development" className={styles.logoImg} />
            <span className={styles.logoTitle}>RaccoonIT <br /> IT&nbsp;Development</span>
          </div>
          <button className={active ? `${styles.burger} ${styles.active}` : `${styles.burger}`} onClick={onToggle} id='burger' aria-label="Open menu">
            <span></span>
          </button>
        </section>
      </Container>
    </header>
  );

};

export default Header;
