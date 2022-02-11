import styles from './snackbar.module.scss';

const Snackbar = ({ isShown, message }) => {
  return (
    <div className={`${styles.snackbar} ${isShown ? `${styles.show}` : ''}`}>
      {message}
    </div>
  );
};

export default Snackbar;
