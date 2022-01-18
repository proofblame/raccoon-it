import React from 'react';
import About from './screens/About/About';
import Tenets from './screens/Tenets/Tenets';
import main from './Main.module.scss';

const Main = () => {
  return (
    <div className={main.wrapper}>
      <About />
      <Tenets />
    </div>
  );
};

export default Main;
