import styles from './main.module.scss'
import Container from '../../shared/UI/container/container';
import Banner from './banner/banner';
import About from './about/about';
import Principles from './principles/principles';
import Projects from './projects/projects';
import WorkScheme from './work-scheme/work-scheme';
import Tech from './tech/tech';
import Footer from './footer/footer';

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
        <Footer />
      </Container>
    </section>
  );
};

export default Main;
