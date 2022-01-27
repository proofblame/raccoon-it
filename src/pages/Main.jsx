import React, { useEffect, useState } from 'react';
import About from './screens/About/About';
import Tenets from './screens/Tenets/Tenets';
import main from './Main.module.scss';
import Projects from './screens/Projects/Projects';
import Workflow from './screens/Workflow/Workflow';
import Techs from './screens/Techs/Techs';
import Discuss from './screens/Discuss/Discuss';
import Banner from './screens/Banner/Banner';



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
    </div>
  );
};

export default Main;
