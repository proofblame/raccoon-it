import styles from './header.module.scss'
import Container from '../../shared/UI/container/container'
import logo from '../../shared/images/logo.svg'
import { useLocation } from "react-router-dom";
import MenuButton from '../../features/menu-button/menu-button';
import LangSwitcher from '../../features/lang-switcher/lang-switcher';

const Header = ({ active, onToggle }) => {

  const { pathname } = useLocation()
  const menuButton = pathname === '/' ? <MenuButton active={active} onToggle={onToggle} /> : ('')

  return (
    <header className={styles.header} id='header'>
      <Container>
        <section className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="RaccoonIT IT Development" className={styles.logoImg} />
            <span className={styles.logoTitle}>RaccoonIT <br /> IT&nbsp;Development</span>
          </div>
          <div className={styles.buttons}>
            {!active && <LangSwitcher />}
            {menuButton}
          </div>
        </section>
      </Container>
    </header>
  );

};

export default Header;
