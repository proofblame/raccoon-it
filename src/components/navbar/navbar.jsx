import { Link } from 'react-scroll';
import { useEffect } from 'react';
import styles from './navbar.module.scss'

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
    <section className={styles.overlay} onClick={onClose}>
      <nav className={active ? `${styles.nav} ${styles.active}` : `${styles.nav}`} onClick={e => e.stopPropagation()}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link
              to='banner'
              smooth={true}
              duration={1000}
              className={styles.link}
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
            >
              О нас
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='tenets'
              smooth={true}
              duration={1000}
              className={styles.link}
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
            >
              Наши технологии
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to='discuss'
              smooth={true}
              duration={1000}
              className={styles.link}
            >
              Контакты
            </Link>
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