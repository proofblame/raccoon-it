import { lazy, Suspense } from 'react';
import Spinner from '../features/spinner/spinner';
import styles from './main.module.scss';

const Banner = lazy(() => import('./screens/banner/banner'))
const About = lazy(() => import('./screens/About/About'))
const Tenets = lazy(() => import('./screens/Tenets/Tenets'))
const Projects = lazy(() => import('./screens/Projects/Projects'))
const Workflow = lazy(() => import('./screens/Workflow/Workflow'))
const Techs = lazy(() => import('./screens/Techs/Techs'))
const Discuss = lazy(() => import('./screens/Discuss/Discuss'))

const Main = () => {

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   let scrollWidth = scrollbarWidth();

  //   body.style.overflow = isOpened ? 'hidden' : 'auto';
  //   body.style.paddingRight = isOpened ? `${scrollWidth}px` : '';
  // }, [isOpened]);

  // function scrollbarWidth() {
  //   var documentWidth = parseInt(document.documentElement.clientWidth);
  //   var windowsWidth = parseInt(window.innerWidth);
  //   var scrollbarWidth = windowsWidth - documentWidth;
  //   return scrollbarWidth;
  // }

  return (
    <section className={styles.main}>
      <Suspense fallback={<Spinner />}>
        <Banner />
        {/* <About />
        <Tenets />
        <Projects />
        <Workflow />
        <Techs />
        <Discuss /> */}
      </Suspense>
    </section>
  );
};

export default Main;
