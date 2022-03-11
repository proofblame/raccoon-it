import styles from './menu-button.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../services/actions/navbar';

const MenuButton = () => {
  const { navbar } = useSelector(store => store.nav)
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    if (!navbar) {
      dispatch(openMenu())
    } else {
      dispatch(closeMenu())
    }
  }



  return (
    <button
      className={navbar ? `${styles.burger} ${styles.active}` : `${styles.burger}`}
      onClick={handleToggleMenu}
      id='burger'
      aria-label="Open menu">
      <span></span>
    </button>
  )
}

export default MenuButton