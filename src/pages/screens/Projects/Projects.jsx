import { Link } from 'react-scroll';

import projects from './Projects.module.scss';

import H2 from '../../../shared/UI/H2/H2';
import Container from '../../../shared/UI/Container/Container';
import IMG from '../../../shared/UI/IMG/IMG';
import H3 from '../../../shared/UI/H3/H3';
import Button from '../../../shared/UI/Button/Button';

import Lawyers from './images/Lawyers.svg';
import Psy from './images/Psy.svg';
import CRMCMS from './images/CRMCMS.svg';

const Projects = () => {
  return (
    <section className={projects.section} id='projects'>
      <Container>
        <div className={projects.wrapper}>
          <H2 className={projects.header}>Наши проекты</H2>
          <div className={projects.listWrapper}>
            <ul className={projects.list}>
              <li className={projects.listItem}>
                <IMG
                  src={Lawyers}
                  alt='Юристы в Омске'
                  className={projects.listItemImage}
                />
                <H3 className={projects.listHeader}>Юристы в Омске</H3>
              </li>
              <li className={`${projects.listItem} ${projects.backdropBlur}`}>
                <IMG
                  src={Psy}
                  alt='Онлайн консультации'
                  className={projects.listItemImage}
                />
                <H3 className={projects.listHeader}>Онлайн консультации</H3>
              </li>
              <li className={projects.listItem}>
                <IMG
                  src={CRMCMS}
                  alt='СRM + CMS'
                  className={projects.listItemImage}
                />
                <H3 className={projects.listHeader}>СRM + CMS</H3>
              </li>
            </ul>
          </div>
          <div className={projects.container}>
            <Link to='discuss' smooth={true} duration={1000}>
              <Button>Оставить заявку</Button>
            </Link>
            <p className={projects.subscription}>Стань следующим!</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
