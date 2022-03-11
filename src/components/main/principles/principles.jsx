import styles from './principles.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import { langLib } from '../../../utils/langLib';
import { useSelector } from 'react-redux';

const Principles = () => {
  const { lang } = useSelector(store => store.lang)
  const { principles } = langLib[lang]
  return (
    <section className={styles.principles} id='principles'>
      <H2 className={styles.title}>{principles.title}</H2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={`${styles.itemTitle} ${styles.mobile}`}>{principles.itemTitle1}</p>
          <p className={styles.itemSubtitle}>{principles.itemSubtitle1}</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemTitle} ${styles.top}`}>{principles.itemTitle2}</p>
          <p className={styles.itemSubtitle}>{principles.itemSubtitle2}</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemTitle} ${styles.user}`}>{principles.itemTitle3}</p>
          <p className={styles.itemSubtitle}>{principles.itemSubtitle3}</p>
        </li>
      </ul>

    </section>
  )
};

export default Principles;
