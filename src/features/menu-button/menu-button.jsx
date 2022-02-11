import styles from './menu-button.module.scss'

const MenuButton = ({ active, onToggle }) => {
  return (
    <button
      className={active ? `${styles.burger} ${styles.active}` : `${styles.burger}`}
      onClick={onToggle}
      id='burger'
      aria-label="Open menu">
      <span></span>
    </button>
  )
}

export default MenuButton