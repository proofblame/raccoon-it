
import { useState, useEffect } from 'react'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import Main from '../main/main'


const App = () => {

  const [isActive, setIsActive] = useState(false);




  useEffect(() => {
    let scrollWidth = scrollbarWidth();
    document.body.style.paddingRight = isActive ? `${scrollWidth}px` : '';
  }, [isActive])

  function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  }

  const handleOpenMenu = () => {
    setIsActive(true)
    document.body.style.overflow = 'hidden'
  }
  const handleCloseMenu = (e) => {
    setIsActive(false)
    document.body.style.overflow = 'auto'
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
      <Navbar active={isActive} onClose={handleCloseMenu} />
      <Main />
    </>
  )
}

export default App
