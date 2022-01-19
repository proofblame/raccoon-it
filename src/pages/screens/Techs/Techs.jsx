import techs from './Techs.module.scss';

import Container from '../../../shared/UI/Container/Container';
import H2 from '../../../shared/UI/H2/H2';
import H3 from '../../../shared/UI/H3/H3';

const Techs = () => {
  return (
    <section className={techs.section}>
      <div className={techs.wrapper}>
        <Container>
          <H2 className={techs.header}>Наши технологии</H2>
          <div className={techs.listWrapper}>
            <ul className={techs.list}>
              <li className={techs.listItem}>
                <div className={techs.headerWrapper}>
                  <H3>Backend</H3>
                </div>
                <ul className={techs.backendList}>
                  <li className={techs.backendListItemSpring}>Spring</li>
                  <li className={techs.backendListItemNginx}>Nginx</li>
                  <li className={techs.backendListItemPostgresql}>
                    PostgreSQL
                  </li>
                  <li className={techs.backendListItemRedis}>Redis</li>
                  <li className={techs.backendListItemDocker}>Docker</li>
                  <li className={techs.backendListItemJava}>Java</li>
                </ul>
              </li>
              <li className={techs.listItem}>
                <div className={techs.headerWrapper}>
                  <H3>Frontend</H3>
                </div>
                <ul className={techs.frontendList}>
                  <li className={techs.frontendListItemReact}>React</li>
                  <li className={techs.frontendListItemJs}>JavaScript</li>
                  <li className={techs.frontendListItemTs}>TypeScript</li>
                  <li className={techs.frontendListItemRedux}>Redux</li>
                </ul>
              </li>
              <li className={techs.listItem}>
                <div className={techs.headerWrapper}>
                  <H3>design</H3>
                </div>
                <ul className={techs.designList}>
                  <li className={techs.designListItemFigma}>Figma</li>
                  <li className={techs.designListItemPs}>Photoshop</li>
                </ul>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Techs;
