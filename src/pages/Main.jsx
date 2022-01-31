import React, { useEffect, useState, Suspense } from 'react';
import Spinner from '../features/spinner/spinner';

import main from './Main.module.scss';

// import Banner from './screens/Banner/Banner';
// import About from './screens/About/About';
// import Tenets from './screens/Tenets/Tenets';
// import Projects from './screens/Projects/Projects';
// import Workflow from './screens/Workflow/Workflow';
// import Techs from './screens/Techs/Techs';
// import Discuss from './screens/Discuss/Discuss';

const Banner = React.lazy(() => import('./screens/Banner/Banner'))
const About = React.lazy(() => import('./screens/About/About'))
const Tenets = React.lazy(() => import('./screens/Tenets/Tenets'))
const Projects = React.lazy(() => import('./screens/Projects/Projects'))
const Workflow = React.lazy(() => import('./screens/Workflow/Workflow'))
const Techs = React.lazy(() => import('./screens/Techs/Techs'))
const Discuss = React.lazy(() => import('./screens/Discuss/Discuss'))

const Main = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    let scrollWidth = scrollbarWidth();

    body.style.overflow = isOpened ? 'hidden' : 'auto';
    body.style.paddingRight = isOpened ? `${scrollWidth}px` : '';
  }, [isOpened]);

  function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  }

  const handleOpened = () => {
    setIsOpened(!isOpened);
  };

  const handleCloseByClickOnOverlay = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    setIsOpened(false);
  };


  return (
    <div className={main.wrapper}>
      <Suspense fallback={<Spinner />}>
        <Banner
          isOpened={isOpened}
          handleOpened={handleOpened}
          handleCloseByClickOnOverlay={handleCloseByClickOnOverlay}
        />
        <About />
        <Tenets />
        <Projects />
        <Workflow />
        <Techs />
        <Discuss />
      </Suspense>
    </div>
  );
};

export default Main;
