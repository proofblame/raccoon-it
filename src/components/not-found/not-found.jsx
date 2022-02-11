import { Link } from "react-router-dom";
import styles from './not-found.module.scss'
import H2 from '../../shared/UI/h2/h2'
import Button from '../../shared/UI/button/button'
import Container from '../../shared/UI/container/container';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <H2>Страница не найдена</H2>
            <p className={styles.subtitle}>Ошибка 404</p>
            <Link to='/'>
              <Button>Вернуться на главную</Button>
            </Link>
          </div>
        </div>
      </ Container>
    </section>
  )
}

export default NotFound