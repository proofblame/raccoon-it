
import { useEffect } from 'react'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import Main from '../main/main'
import { Switch, Route } from "react-router-dom";
import NotFound from '../not-found/not-found';
import { useDispatch } from 'react-redux';
import { getLanguage } from '../../services/actions/languages';
import { useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const { navbar } = useSelector(store => store.nav)


  useEffect(() => {
    const body = document.querySelector('body');
    const header = document.querySelector('#header')

    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    body.style.overflow = navbar ? 'hidden' : 'auto'
    body.style.paddingRight = navbar ? `${scrollbarWidth}px` : '';
    header.style.paddingRight = navbar ? `${scrollbarWidth}px` : '';

    dispatch(getLanguage())
  }, [navbar, dispatch])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Main />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App
