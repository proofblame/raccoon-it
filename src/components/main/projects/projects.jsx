import { Link } from 'react-scroll';

import styles from './projects.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Button from '../../../shared/UI/button/button'
import { langLib } from '../../../utils/langLib';
import { useSelector } from 'react-redux';

const Projects = () => {
  const { lang } = useSelector(store => store.lang)
  const { advances } = langLib[lang]

  return (
    <section className={styles.projects} id='projects'>
      <H2 className={styles.title}>{advances.title}</H2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.sdn}`}>{advances.listItem1}</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.docker}`}>{advances.listItem4}</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.laptop}`}>{advances.listItem2}</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.garant}`}>{advances.listItem5}</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.erp}`}>{advances.listItem3}</p>
        </li>
        <li className={styles.item}>
          <div className={styles.footer}>
            <Link to='form' smooth={true} duration={1000}>
              <Button>{advances.button}</Button>
            </Link>
            <span className={styles.comment}>{advances.comment}</span>
          </div>
        </li>
      </ul>
    </section>
  )
};

export default Projects;
