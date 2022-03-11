import { Link } from 'react-scroll';
import { useEffect } from 'react';
import styles from './navbar.module.scss'
import Button from '../../shared/UI/button/button';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../../services/actions/languages';
import { langLib } from '../../utils/langLib';
import { closeMenu } from '../../services/actions/navbar';

const Navbar = () => {
  const { lang } = useSelector(store => store.lang)
  const nav = useSelector(store => store.nav.navbar)
  const dispatch = useDispatch()

  const { navbar } = langLib[lang]

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }


  const onChangeLanguage = (lang) => {
    dispatch(changeLanguage(lang))
  }


  useEffect(() => {
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    }

  }, [])

  const handleEscapePress = (e) => {
    if (e.key === 'Escape') {

      handleCloseMenu()
    }
  };

  return (
    <section className={nav ? `${styles.overlay} ${styles.active}` : `${styles.overlay}`} onClick={handleCloseMenu}>
      <nav className={`${styles.nav} ${nav ? `${styles.active}` : ''}`} onClick={e => e.stopPropagation()}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link
              to='banner'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={handleCloseMenu}
            >
              {navbar.main}
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='about'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={handleCloseMenu}
            >
              {navbar.about}
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='principles'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={handleCloseMenu}
            >
              {navbar.principles}
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='projects'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={handleCloseMenu}
            >
              {navbar.projects}
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='workflow'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={handleCloseMenu}
            >
              {navbar.workScheme}
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='techs'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={handleCloseMenu}
            >
              {navbar.techs}
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='form'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={handleCloseMenu}
            >
              {navbar.footer}
            </Link>
          </li>
          <li className={styles.item}>
            <div className={styles.buttons}>
              <Button size={'small'} type={lang === 'en' && 'inactive'} onClick={() => onChangeLanguage('ru')}>RU</Button>
              <Button size={'small'} type={lang === 'ru' && 'inactive'} onClick={() => onChangeLanguage('en')}>EN</Button>
            </div>
          </li>
        </ul>
        <ul className={styles.contacts}>
          <li className={styles.phone}>+7 (916) (552) 05 51</li>
          <li className={styles.email}>info@raccoon-it.dev</li>
        </ul>
      </nav>
    </section>

  );
};

export default Navbar;