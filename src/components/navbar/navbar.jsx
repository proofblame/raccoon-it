import { Link } from 'react-scroll';
import { useEffect } from 'react';
import styles from './navbar.module.scss'
import Button from '../../shared/UI/button/button';

const Navbar = ({ active, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    }

  }, [])

  const handleEscapePress = (e) => {
    if (e.key === 'Escape') {

      onClose()
    }
  };

  return (
    <section className={active ? `${styles.overlay} ${styles.active}` : `${styles.overlay}`} onClick={onClose}>
      <nav className={`${styles.nav} ${active ? `${styles.active}` : ''}`} onClick={e => e.stopPropagation()}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link
              to='banner'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={onClose}
            >
              Главная
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='about'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={onClose}
            >
              О нас
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='principles'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={onClose}
            >
              Наши принципы
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='projects'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={onClose}
            >
              Проекты
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='workflow'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={onClose}
            >
              Как мы работаем
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='techs'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={onClose}
            >
              Наши технологии
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='form'
              smooth={true}
              duration={1000}
              className={styles.link}
              onClick={onClose}
            >
              Контакты
            </Link>
          </li>
          <li className={styles.item}>
            <form className={styles.form}>
              <Button size={'small'}>RU</Button>
              <Button size={'small'} type={'inactive'}>EN</Button>
            </form>
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