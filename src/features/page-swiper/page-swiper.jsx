import styles from './page-swiper.module.scss'

const PageSwiper = ({ children, style, handleWheel }) => {
  return (
    <section className={styles.pageSwiper} id='pageSwiper' style={style} onWheel={handleWheel}>
      {children}
    </section>
  )
};

export default PageSwiper;
