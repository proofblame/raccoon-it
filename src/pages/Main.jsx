import React from 'react';
import About from './screens/About/About';
import Tenets from './screens/Tenets/Tenets';
import main from './Main.module.scss';
import Projects from './screens/Projects/Projects';
import Workflow from './screens/Workflow/Workflow';
import Techs from './screens/Techs/Techs';
import Discuss from './screens/Discuss/Discuss';

const Main = () => {
  return (
    <div className={main.wrapper}>
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
