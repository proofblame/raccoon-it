import styles from './principles.module.scss'
import H2 from '../../../shared/UI/H2/H2'

const Principles = () => {
  return (
    <section className={styles.principles} id='principles'>
      <H2 className={styles.title}>Наши принципы</H2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={`${styles.itemTitle} ${styles.mobile}`}>mobile first</p>
          <p className={styles.itemSubtitle}>Наши сайты безупречно работают на мобильных устройствах и планшетах</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemTitle} ${styles.top}`}>top secure</p>
          <p className={styles.itemSubtitle}>Данные ваших пользователей будут надёжно защищены</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemTitle} ${styles.user}`}>user friendly</p>
          <p className={styles.itemSubtitle}>Мы уделяем особое внимание разработке удобных интерфейсов</p>
        </li>
      </ul>

    </section>
  )
};

export default Principles;
