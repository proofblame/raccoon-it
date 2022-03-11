import styles from './header.module.scss'
import Container from '../../shared/UI/container/container'
import logo from '../../shared/images/logo.svg'
import { useLocation } from "react-router-dom";
import MenuButton from '../../features/menu-button/menu-button';
import LangSwitcher from '../../features/lang-switcher/lang-switcher';
import { CSSTransition } from "react-transition-group";
import { useRef } from 'react';
import { useSelector } from 'react-redux';


const Header = () => {

  const { navbar } = useSelector(store => store.nav)
  const nodeRef = useRef(null)
  const { pathname } = useLocation()
  const menuButtons = pathname === '/' ?
    <div className={styles.buttons}>
      <CSSTransition
        in={navbar}
        timeout={200}
        classNames={{
          enter: styles.switcherEnter,
          enterActive: styles.switcherEnterActive,
          enterDone: styles.switcherEnterDone,
          exit: styles.switcherExit,
          exitActive: styles.switcherExit,
          exitDone: styles.switcherExitDone,
        }}
        nodeRef={nodeRef}
      >
        <LangSwitcher forRef={nodeRef} />
      </CSSTransition>
      <MenuButton />
    </div>
    : ('')

  return (
    <header className={styles.header} id='header'>
      <Container>
        <section className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="RaccoonIT IT Development" className={styles.logoImg} />
            <span className={styles.logoTitle}>RaccoonIT <br /> IT&nbsp;Development</span>
          </div>
          {menuButtons}
        </section>
      </Container>
    </header>
  );

};

export default Header;
