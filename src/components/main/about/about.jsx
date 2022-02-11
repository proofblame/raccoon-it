import { Link } from 'react-scroll';

import styles from './about.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Button from '../../../shared/UI/button/button'

const About = ({ style }) => {
  return (
    <section className={styles.about} id='about' style={style}>
      <div className={styles.leftColumn}>
        <H2 className={styles.title}>О нас</H2>
        <p className={styles.subtitle}>Наша команда занимается разработкой сайтов
          и мобильных приложений для решения сложных бизнес-задач. Мы используем современные
          IT-решения, продуманный дизайн и грамотную маркетинговую стратегию. Мы поможем
          вам привлечь новых клиентов.</p>
        <Link to='form' smooth={true} duration={1000}>
          <Button>Оставить заявку</Button>
        </Link>
      </div>
      <div className={styles.rightColumn}>
        <ul className={styles.list}>
          <li className={styles.item}>Сайты, веб-приложения и прогрессивные веб-приложения</li>
          <li className={styles.item}>Нативные и гибридные мобильные приложения</li>
          <li className={styles.item}>Разработка дизайна для вашего бизнеса под ключ</li>
        </ul>


      </div>

    </section>
  )
};

export default About;
