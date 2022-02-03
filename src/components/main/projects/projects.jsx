import { Link } from 'react-scroll';

import styles from './projects.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Button from '../../../shared/UI/button/button'

import lawyers from '../../../shared/images/lawyers.png'
import psy from '../../../shared/images/psy.png'
import moder from '../../../shared/images/moder.webp'

const Projects = ({ style }) => {
  return (
    <section className={styles.projects} id='projects' style={style}>
      <H2 className={styles.title}>Наши проекты</H2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.itemImage} src={lawyers} alt="Юристы в Омске" />
          <p className={styles.itemSubtitle}>Юристы в Омске</p>
        </li>
        <li className={styles.item}>
          <img className={styles.itemImage} src={psy} alt="Онлайн консультации" />
          <p className={styles.itemSubtitle}>Онлайн консультации</p>
        </li>
        <li className={styles.item}>
          <img className={styles.itemImage} src={moder} alt="СRM + CMS" />
          <p className={styles.itemSubtitle}>СRM + CMS</p>
        </li>
      </ul>
      <div className={styles.footer}>
        <Link to='form' smooth={true} duration={1000}>
          <Button>Оставить заявку</Button>
        </Link>
        <span className={styles.comment}>Стань следующим!</span>
      </div>

    </section>
  )
};

export default Projects;
