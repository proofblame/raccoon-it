import { Link } from 'react-scroll';

import about from './About.module.scss';

import Container from '../../../shared/UI/Container/Container';
import Button from '../../../shared/UI/Button/Button';
import H2 from '../../../shared/UI/H2/H2';

const About = () => {
  return (
    <section className={about.section} id='about'>
      <Container>
        <div className={about.wrapper}>
          <div className={about.leftColumn}>
            <div className={about.headerWrapper}>
              <H2 className={about.header}>О нас</H2>
            </div>
            <p className={about.subheader}>
              Наша команда занимается разработкой сайтов и мобильных приложений
              для решения сложных бизнес-задач. Мы используем современные
              IT-решения, продуманный дизайн и грамотную маркетинговую
              стратегию. Мы поможем вам привлечь новых клиентов.
            </p>
            <Link to='discuss' smooth={true} duration={1000}>
              <Button>Оставить заявку</Button>
            </Link>
          </div>
          <div className={about.rightColumn}>
            <ul className={about.list}>
              <li className={about.listItem}>
                Сайты, веб-приложения и прогрессивные веб-приложения
              </li>
              <li className={about.listItem}>
                Нативные и гибридные <br /> мобильные приложения
              </li>
              <li className={about.listItem}>
                Разработка дизайна для <br /> вашего бизнеса под ключ
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
