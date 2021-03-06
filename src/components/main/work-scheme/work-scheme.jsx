import { Link } from 'react-scroll';

import styles from './work-scheme.module.scss';
import H2 from '../../../shared/UI/h2/h2';
import Button from '../../../shared/UI/button/button';

import schemeDesktopRu from '../../../shared/images/scheme-desktop-ru.svg';
import schemeDesktopEn from '../../../shared/images/scheme-desktop-en.svg';
import backlogProject from '../../../shared/images/mobile-scheme/backlog-project.svg';
import backlogSprint from '../../../shared/images/mobile-scheme/backlog-sprint.svg';
import arrow from '../../../shared/images/mobile-scheme/arrow.svg';
import dailyRu from '../../../shared/images/mobile-scheme/daily-ru.svg';
import dailyEn from '../../../shared/images/mobile-scheme/daily-en.svg';
import rectangle from '../../../shared/images/mobile-scheme/rectangle.svg';
import { useSelector } from 'react-redux';
import { langLib } from '../../../utils/langLib';

const WorkScheme = ({ style }) => {
  const { lang } = useSelector(store => store.lang)
  const { workScheme } = langLib[lang]
  const desktopImg = lang === 'ru' ? schemeDesktopRu : schemeDesktopEn
  const mobileImg = lang === 'ru' ? dailyRu : dailyEn
  return (
    <section className={styles.workScheme} id='workflow' style={style}>
      <H2 className={styles.title}>{workScheme.title}</H2>
      <p className={styles.subtitle}>{workScheme.subtitle}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.itemNumber}>01</p>
          <p className={styles.itemSubtitle}>{workScheme.itemSubtitle1}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemNumber}>02</p>
          <p className={styles.itemSubtitle}>{workScheme.itemSubtitle2}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemNumber}>03</p>
          <p className={styles.itemSubtitle}>{workScheme.itemSubtitle3}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemNumber}>04</p>
          <p className={styles.itemSubtitle}>{workScheme.itemSubtitle4}</p>
        </li>
      </ul>
      <div className={styles.scheme}>
        <img
          className={styles.schemeDesktop}
          src={desktopImg}
          alt={workScheme.title}
        />
        <div className={styles.schemeMobile}>
          <div className={styles.schemeBlock}>
            <img
              className={styles.schemeRectangle}
              src={backlogProject}
              alt={workScheme.schemeTitle1}
            />
            <p className={styles.schemeTitle}>{workScheme.schemeTitle1}</p>
          </div>
          <img className={styles.schemeArrow} src={arrow} alt='arrow' />
          <div className={styles.schemeBlock}>
            <img className={styles.schemeRectangle} src={backlogSprint} alt={workScheme.schemeTitle2} />
            <p className={styles.schemeTitle}>{workScheme.schemeTitle2}</p>
          </div>
          <img className={styles.schemeArrow} src={arrow} alt='arrow' />
          <div className={styles.schemeBlock}>
            <img className={styles.schemeIMG} src={mobileImg} alt='daily' />
            <p className={styles.schemeTitle}>{workScheme.schemeTitle3}</p>
            <ul className={styles.schemeList}>
              <li className={styles.schemeItem}>{workScheme.schemeItem1}</li>
              <li className={styles.schemeItem}>{workScheme.schemeItem2}</li>
              <li className={styles.schemeItem}>{workScheme.schemeItem3}</li>
              <li className={styles.schemeItem}>{workScheme.schemeItem4}</li>
              <li className={styles.schemeItem}>{workScheme.schemeItem5}</li>
            </ul>
          </div>
          <img className={styles.schemeArrow} src={arrow} alt='arrow' />
          <div className={styles.schemeBlock}>
            <img
              className={styles.schemeRectangle}
              src={rectangle}
              alt={workScheme.schemeTitle4}
            />
            <p className={styles.schemeTitle}>
              {workScheme.schemeTitle4}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Link to='form' smooth={true} duration={1000}>
          <Button>{workScheme.button}</Button>
        </Link>
      </div>
    </section>
  );
};

export default WorkScheme;
