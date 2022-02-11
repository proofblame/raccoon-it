import React from 'react';
import ReactLoading from 'react-loading';
import styles from './spinner.module.scss';


const Spinner = () => {
  return (
    <div className={styles.spinner}>

      <ReactLoading type='spinningBubbles' color='#0250C5' />

    </div>
  )


};

export default Spinner;

