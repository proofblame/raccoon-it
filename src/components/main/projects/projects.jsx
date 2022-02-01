import styles from './projects.module.scss'
import H2 from '../../../shared/UI/H2/H2'
import Button from '../../../shared/UI/Button/Button'

import lawyers from '../../../shared/images/lawyers.webp'
import psy from '../../../shared/images/psy.webp'
import moder from '../../../shared/images/moder.webp'

const Projects = () => {
  return (
    <section className={styles.projects}>
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
        <Button>Оставить заявку</Button>
        <span className={styles.comment}>Стань следующим!</span>
      </div>

    </section>
  )
};

export default Projects;
