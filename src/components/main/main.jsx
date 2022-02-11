import { useEffect, useState } from 'react'
import styles from './main.module.scss'
import Container from '../../shared/UI/container/container';
import Banner from './banner/banner';
import About from './about/about';
import Principles from './principles/principles';
import Projects from './projects/projects';
import WorkScheme from './work-scheme/work-scheme';
import Tech from './tech/tech';
import Footer from './footer/footer';
import PageSwiper from '../../features/page-swiper/page-swiper';

const Main = () => {
  const [innerHeight, setInnerHeight] = useState(0)
  const [swiperHeight, setSwiperHeight] = useState()

  const handleResize = () => {
    let windowsHeight = window.innerHeight;
    setInnerHeight(windowsHeight)
    console.log(windowsHeight)
  }


  // const handleSwiperHeight = () => {
  //   const pageSwiper = document.querySelector('#pageSwiper')
  //   const height = pageSwiper.offsetHeight;
  //   setSwiperHeight(-height);
  // }

  const handleWheel = (event) => {
    const { deltaY } = event
    const scrollHeight = document.body.scrollHeight
    const pageSwiper = document.querySelector('#pageSwiper')
    const heightSwiper = pageSwiper.offsetHeight;

    if (deltaY < 0 && innerHeight < 0) {
      setInnerHeight(innerHeight + scrollHeight)
    } else if (deltaY > 0 && innerHeight > -heightSwiper + scrollHeight) {
      setInnerHeight(innerHeight - scrollHeight)
    } else {
      return
    }
    console.log(deltaY)
    console.log(innerHeight)
    console.log(-heightSwiper)
  }





  useEffect(() => {

    // handleSwiperHeight()
    // window.addEventListener('resize', handleResize)

    return (() => {
      // window.removeEventListener('resize', handleResize)
    })
  }, [innerHeight])


  const style = {
    // height: `${window.innerHeight}px`,
    transform: `translateY(${innerHeight}px)`,
    transitionProperty: 'transform',
    transitionDuration: '1000ms',
    transitionTimingFunction: 'ease-in-out',
  }
  const styleHeight = {
    height: `${window.innerHeight}px`,
  }

  return (
    <section className={styles.main}>
      <Container>
        <PageSwiper style={style} handleWheel={handleWheel}>
          <Banner style={styleHeight} />
          <About style={styleHeight} />
          <Principles style={styleHeight} />
          <Projects style={styleHeight} />
          <WorkScheme style={styleHeight} />
          <Tech style={styleHeight} />
          <Footer style={styleHeight} />
        </PageSwiper>
      </Container>
    </section>
  );
};

export default Main;
