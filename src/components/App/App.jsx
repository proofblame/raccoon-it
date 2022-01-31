
import { useState } from 'react'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import Main from '../main/main'


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

  return (
    <>
      <Header active={isActive} onToggle={handleToggleMenu} />
      <Navbar active={isActive} onClose={handleCloseMenu} />
      <Main />
    </>
  )
}

export default App
