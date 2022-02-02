import styles from './input-error.module.scss';

const InputError = ({ id, text }) => {
  return (
    <p className={styles.inputError} id={id}>
      {text}
    </p>
  );
};

export default InputError;
