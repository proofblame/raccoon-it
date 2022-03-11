import { Link } from 'react-scroll';

import styles from './about.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Button from '../../../shared/UI/button/button'
import { langLib } from '../../../utils/langLib';
import { useSelector } from 'react-redux';

const About = () => {
  const { lang } = useSelector(store => store.lang)
  const { about } = langLib[lang]

  return (
    <section className={styles.about} id='about'>
      <div className={styles.leftColumn}>
        <H2 className={styles.title}>{about.title}</H2>
        <p className={styles.subtitle}>{about.subtitle}</p>
        <Link to='form' smooth={true} duration={1000}>
          <Button>{about.button}</Button>
        </Link>
      </div>
      <div className={styles.rightColumn}>
        <ul className={styles.list}>
          <li className={styles.item}>{about.listItem1}</li>
          <li className={styles.item}>{about.listItem2}</li>
          <li className={styles.item}>{about.listItem3}</li>
        </ul>


      </div>

    </section>
  )
};

export default About;
