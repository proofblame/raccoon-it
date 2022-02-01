import styles from './main.module.scss'
import Container from '../../shared/UI/Container/Container';
import Banner from './banner/banner';
import About from './about/about';
import Principles from './principles/principles';
import Projects from './projects/projects';
import WorkScheme from './work-scheme/work-scheme';
import Tech from './tech/tech';

const Main = () => {
  return (
    <section className={styles.main}>
      <Container>
        <Banner />
        <About />
        <Principles />
        <Projects />
        <WorkScheme />
        <Tech />
      </Container>
    </section>
  );
};

export default Main;
