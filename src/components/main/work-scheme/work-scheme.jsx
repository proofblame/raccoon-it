import { Link } from 'react-scroll';

import styles from './work-scheme.module.scss'
import H2 from '../../../shared/UI/H2/H2'
import Button from '../../../shared/UI/Button/Button'

import schemeDesktop from '../../../shared/images/scheme-desktop.svg'
import schemeMobile from '../../../shared/images/scheme-mobile.svg'
import psy from '../../../shared/images/psy.webp'
import moder from '../../../shared/images/moder.webp'

const WorkScheme = () => {
  return (
    <section className={styles.workScheme} id='workflow'>
      <H2 className={styles.title}>Как мы работаем?</H2>
      <p className={styles.subtitle}>Мы изучаем особенности ваших клиентов и подбираем лучшее решение для вашего бизнеса. Работаем по гибкой методологии Agile, что позволяет быстро менять продукт под требования рынка.</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.itemNumber}>01</p>
          <p className={styles.itemSubtitle}>Определяем цели</p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemNumber}>02</p>
          <p className={styles.itemSubtitle}>Создаём прототип</p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemNumber}>03</p>
          <p className={styles.itemSubtitle}>Верстаем и программируем</p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemNumber}>04</p>
          <p className={styles.itemSubtitle}>Тестируем и оптимизируем</p>
        </li>
      </ul>
      <div className={styles.scheme}>
        <img className={styles.schemeDesktop} src={schemeDesktop} alt="Как мы работаем" />
        <img className={styles.schemeMobile} src={schemeMobile} alt="Как мы работаем" />
      </div>

      <div className={styles.footer}>
        <Link to='form' smooth={true} duration={1000}>
          <Button>Оставить заявку</Button>
        </Link>
      </div>

    </section>
  )
};

export default WorkScheme;
