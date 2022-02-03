import styles from './footer.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Form from '../../../features/form/form';

const Footer = ({ style }) => {
  return (
    <section className={styles.footer} id='form' style={style}>
      <H2 className={styles.title}>Обсудим проект?</H2>
      <div className={styles.content}>
        <Form id='form' />
        <ul className={styles.contacts}>
          <li className={styles.phone}>+7 (916) (552) 05 51</li>
          <li className={styles.email}>info@raccoon-it.dev</li>
        </ul>
      </div>
    </section>
  )
};

export default Footer;
