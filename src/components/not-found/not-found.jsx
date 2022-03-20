import { Link } from "react-router-dom";
import styles from './not-found.module.scss'
import H2 from '../../shared/UI/h2/h2'
import Button from '../../shared/UI/button/button'
import Container from '../../shared/UI/container/container';
import { useSelector } from 'react-redux';
import { langLib } from '../../utils/langLib';

const NotFound = () => {
  const { lang } = useSelector(store => store.lang)
  const { notFound } = langLib[lang]
  return (
    <section className={styles.notFound}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <H2>{notFound.title}</H2>
            <p className={styles.subtitle}>{notFound.subtitle}</p>
            <Link to='/'>
              <Button>{notFound.button}</Button>
            </Link>
          </div>
        </div>
      </ Container>
    </section>
  )
}

export default NotFound