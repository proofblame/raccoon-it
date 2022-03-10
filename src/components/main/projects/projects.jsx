import { Link } from 'react-scroll';

import styles from './projects.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Button from '../../../shared/UI/button/button'

const Projects = () => {
  return (
    <section className={styles.projects} id='projects'>
      <H2 className={styles.title}>Преимущества наших проектов</H2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.sdn}`}>По требованию клиента мы разворачиваем сеть CDN для оптимизации и дистрибуции содержимого контента всем клиентам  по всему миру</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.docker}`}>Наши приложения контейнеризуются с помощью Docker и Kubernetes для автоматизации развёртывания и балансироки нагрузки</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.laptop}`}>Наша команда способна создать кроссбраузерный web-клиент или кроссплатформенный нативный клиент (MacOS, Windows, Linux, Android, IOS)</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.garant}`}>RaccoonIt Development даёт бесплатную гарантию и круглосуточную поддержку на свои продукты</p>
        </li>
        <li className={styles.item}>
          <p className={`${styles.itemSubtitle} ${styles.erp}`}>Мы создаём под ключ инструменты для работы с клиентами и настройки системы (ERP)</p>
        </li>
        <li className={styles.item}>
          <div className={styles.footer}>
            <Link to='form' smooth={true} duration={1000}>
              <Button>Оставить заявку</Button>
            </Link>
            <span className={styles.comment}>Стань следующим!</span>
          </div>
        </li>
      </ul>
    </section>
  )
};

export default Projects;
