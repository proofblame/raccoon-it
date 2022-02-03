import { useEffect } from 'react'
import styles from './main.module.scss'
import Container from '../../shared/UI/container/container';
import Banner from './banner/banner';
import About from './about/about';
import Principles from './principles/principles';
import Projects from './projects/projects';
import WorkScheme from './work-scheme/work-scheme';
import Tech from './tech/tech';
import Footer from './footer/footer';
import PageSwiper from '../../features/page-swiper/page-swiper';

const Main = () => {
  var documentHeight = parseInt(document.documentElement.clientHeight);
  var windowsHeight = parseInt(window.innerHeight);

  useEffect(() => {

    console.log(windowsHeight)

    document.addEventListener('resize', (() => {
      console.log(windowsHeight)
    }))
    return (() => {
      document.removeEventListener('resize', (() => { }))
    })

  }, [])
  return (
    <section className={styles.main}>
      <Container>
        <PageSwiper >
          <Banner height={`${windowsHeight}px`} />
          <About />
          <Principles />
          <Projects />
          <WorkScheme />
          <Tech />
          <Footer />
        </PageSwiper>
      </Container>
    </section>
  );
};

export default Main;
