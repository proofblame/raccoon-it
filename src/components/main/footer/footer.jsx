import styles from './footer.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Form from '../../../features/form/form';
import { langLib } from '../../../utils/langLib';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { lang } = useSelector(store => store.lang)
  const { footer } = langLib[lang]
  return (
    <section className={styles.footer} id='form'>
      <H2 className={styles.title}>{footer.title}</H2>
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
