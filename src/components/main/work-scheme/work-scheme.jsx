import { Link } from 'react-scroll';

import styles from './work-scheme.module.scss';
import H2 from '../../../shared/UI/h2/h2';
import Button from '../../../shared/UI/button/button';

import schemeDesktop from '../../../shared/images/scheme-desktop.svg';
import backlogProject from '../../../shared/images/mobile-scheme/backlog-project.svg';
import backlogSprint from '../../../shared/images/mobile-scheme/backlog-sprint.svg';
import arrow from '../../../shared/images/mobile-scheme/arrow.svg';
import daily from '../../../shared/images/mobile-scheme/daily.svg';
import rectangle from '../../../shared/images/mobile-scheme/rectangle.svg';

const WorkScheme = () => {
  return (
    <section className={styles.workScheme} id='workflow'>
      <H2 className={styles.title}>Как мы работаем?</H2>
      <p className={styles.subtitle}>
        Мы изучаем особенности ваших клиентов и подбираем лучшее решение для
        вашего бизнеса. Работаем по гибкой методологии Agile, что позволяет
        быстро менять продукт под требования рынка.
      </p>
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
        <img
          className={styles.schemeDesktop}
          src={schemeDesktop}
          alt='Как мы работаем'
        />
        <div className={styles.schemeMobile}>
          <div className={styles.schemeBlock}>
            <img
              className={styles.schemeRectangle}
              src={backlogProject}
              alt='бэклог проекта'
            />
            <p className={styles.schemeTitle}>бэклог проекта</p>
          </div>
          <img className={styles.schemeArrow} src={arrow} alt='arrow' />
          <div className={styles.schemeBlock}>
            <img className={styles.schemeRectangle} src={backlogSprint} alt='Бэклог спринта' />
            <p className={styles.schemeTitle}>Бэклог спринта</p>
          </div>
          <img className={styles.schemeArrow} src={arrow} alt='arrow' />
          <div className={styles.schemeBlock}>
            <img className={styles.schemeIMG} src={daily} alt='daily' />
            <p className={styles.schemeTitle}>Спринт</p>
            <ul className={styles.schemeList}>
              <li className={styles.schemeItem}>дизайн</li>
              <li className={styles.schemeItem}>Разработка</li>
              <li className={styles.schemeItem}>Тестирование</li>
              <li className={styles.schemeItem}>Наладка</li>
              <li className={styles.schemeItem}>поддержка</li>
            </ul>
          </div>
          <img className={styles.schemeArrow} src={arrow} alt='arrow' />
          <div className={styles.schemeBlock}>
            <img
              className={styles.schemeRectangle}
              src={rectangle}
              alt='Работающее ПО с новыми возможностями'
            />
            <p className={styles.schemeTitle}>
              Работающее По с новыми возможностями
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Link to='form' smooth={true} duration={1000}>
          <Button>Оставить заявку</Button>
        </Link>
      </div>
    </section>
  );
};

export default WorkScheme;
