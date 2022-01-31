import './App.module.scss'

import { useState } from 'react'
import Main from '../../pages/Main'
import Header from '../header/header'
import Navbar from '../navbar/navbar'




const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenMenu = () => {
    setIsActive(true)
  }
  const handleCloseMenu = () => {
    setIsActive(false)
  }

  const handleToggleMenu = () => {
    if (!isActive) {
      handleOpenMenu()
    } else {
      handleCloseMenu()
    }
  }
  const handleClickOnOverlay = () => {

  }

  return (
    <>
      <Header active={isActive} onToggle={handleToggleMenu} />
      <Navbar active={isActive} onClose={handleCloseMenu} />
    </>
  )
}

export default App
