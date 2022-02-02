import { Link } from 'react-scroll';

import styles from './banner.module.scss'
import Button from '../../../shared/UI/button/button'

import hand from '../../../shared/images/hand.webp'
import mobile from '../../../shared/images/mobile.svg'
import mobilePart1 from '../../../shared/images/mobile-part-1.svg'
import mobilePart2 from '../../../shared/images/mobile-part-2.svg'
import mobilePart3 from '../../../shared/images/mobile-part-3.svg'
import mobilePart4 from '../../../shared/images/mobile-part-4.svg'


const Banner = () => {
  return (
    <section className={styles.banner} id='banner'>
      <div className={styles.content}>
        <h1 className={styles.title}>WEB <br /> Development</h1>
        <p className={styles.subtitle}>Автоматизируем бизнес и создадим digital-решение</p>
        <Link to='form' smooth={true} duration={1000}>
          <Button>Оставить заявку</Button>
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
