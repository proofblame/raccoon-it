
import { useState, useEffect } from 'react'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import Main from '../main/main'
import { Switch, Route } from "react-router-dom";
import NotFound from '../not-found/not-found';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../services/actions/languages';

const App = () => {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const body = document.querySelector('body');
    const header = document.querySelector('#header')

    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    body.style.overflow = isActive ? 'hidden' : 'auto'
    body.style.paddingRight = isActive ? `${scrollbarWidth}px` : '';
    header.style.paddingRight = isActive ? `${scrollbarWidth}px` : '';
    const lang = document.documentElement.lang
    dispatch(changeLanguage(lang))
  }, [isActive, dispatch])


  const handleOpenMenu = () => {
    setIsActive(true)
  }
  const handleCloseMenu = (e) => {
    setIsActive(false)
  }

  const handleToggleMenu = () => {
    if (!isActive) {
      handleOpenMenu()
    } else {
      handleCloseMenu()
    }
  }


  return (
    <>
      <Header active={isActive} onToggle={handleToggleMenu} />
      <Switch>
        <Route exact path='/'>
          <Navbar active={isActive} onClose={handleCloseMenu} />
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
