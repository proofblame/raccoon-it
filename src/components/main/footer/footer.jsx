import styles from './footer.module.scss'
import H2 from '../../../shared/UI/H2/H2'
import Button from '../../../shared/UI/Button/Button'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <H2 className={styles.title}>Обсудим проект?</H2>
      <div className={styles.content}>
        <form className={styles.form}>
          <fieldset className={styles.inputs}>
            <input className={styles.input} type="text" placeholder='ваше имя' name="username" required minLength="1" />
            <input className={styles.input} type="email" placeholder='ваша почта' name="email" required minLength="1" />
            <textarea className={styles.input} type="text" placeholder='Комментарий' name="comment" required minLength="1"></textarea>
          </fieldset>
          <fieldset className={styles.checkbox}>
            <label className={styles.label} htmlFor="checkbox">
              <input className={styles.check} type="checkbox" id="checkbox" />
              <span className={styles.pseudoItem}></span>
              <p className={styles.caption}>Даю согласие на обработку данных <br />
                <a className={styles.link} target='_blank' href='./policy.pdf'>Политика конфиденциальности</a>
              </p>
            </label>
            <Button>Отправить заявку</Button>
          </fieldset>
        </form>

        <ul className={styles.contacts}>
          <li className={styles.phone}>+7 (916) (552) 05 51</li>
          <li className={styles.email}>info@raccoon-it.dev</li>
        </ul>


      </div>


    </section>
  )
};

export default Footer;
