import { Link } from 'react-scroll';

import styles from './banner.module.scss'
import Button from '../../../shared/UI/button/button'

import hand from '../../../shared/images/hand.png'
import mobile from '../../../shared/images/mobile.svg'
import mobilePart1 from '../../../shared/images/mobile-part-1.png'
import mobilePart2 from '../../../shared/images/mobile-part-2.svg'
import mobilePart3 from '../../../shared/images/mobile-part-3.svg'
import mobilePart4 from '../../../shared/images/mobile-part-4.svg'
import { useSelector } from 'react-redux';
import { langLib } from '../../../utils/langLib';


const Banner = ({ style }) => {
  const { lang } = useSelector(store => store.lang)
  const { banner } = langLib[lang]
  return (
    <section className={styles.banner} id='banner' style={style}>
      <div className={styles.content}>
        <h1 className={styles.title}>{banner.title}</h1>
        <p className={styles.subtitle}>{banner.subtitle}</p>
        <Link to='form' smooth={true} duration={1000}>
          <Button>{banner.button}</Button>
        </Link>
      </div>

      <div className={styles.images}>
        <div className={styles.phone}>
          <img src={mobile} className={styles.mobile} alt="Phone-detail" />
          <img src={mobilePart1} className={styles.mobilePart1} alt="Phone-detail" />
          <img src={mobilePart2} className={styles.mobilePart2} alt="Phone-detail" />
          <img src={mobilePart3} className={styles.mobilePart3} alt="Phone-detail" />
          <img src={mobilePart4} className={styles.mobilePart4} alt="Phone-detail" />
        </div>
        <img src={hand} className={styles.hand} alt="WEB Development" />
      </div>
    </section>
  );
};

export default Banner;
