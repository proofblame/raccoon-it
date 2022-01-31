import styles from './main.module.scss'
import Container from '../../shared/UI/Container/Container';
import Banner from './banner/banner';

const Main = () => {
  return (
    <section className={styles.main}>
      <Container>
        <Banner />
      </Container>
    </section>
  );
};

export default Main;
