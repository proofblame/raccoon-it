import styles from './page-swiper.module.scss'

const PageSwiper = ({ children }) => {
  return (
    <section className={styles.pageSwiper}>
      {children}
    </section>
  )
};

export default PageSwiper;
