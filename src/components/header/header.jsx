import styles from './header.module.scss'
import Container from '../../shared/UI/Container/Container'
import logo from '../../shared/images/logo.svg'

const Header = ({ active, onToggle }) => {

  return (
    <header className={styles.header}>
      <Container>
        <section className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="RaccoonIT IT Development" className={styles.logoImg} />
            <span className={styles.logoTitle}>RaccoonIT <br /> IT&nbsp;Development</span>
          </div>
          <button className={active ? `${styles.burger} ${styles.active}` : `${styles.burger}`} onClick={onToggle}>
            <span></span>
          </button>
        </section>
      </Container>
    </header>
  );

};

export default Header;
