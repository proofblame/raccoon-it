import React, { useState } from 'react'
import styles from './lang-switcher.module.scss'

const LangSwitcher = () => {
  const [titleState, setTitleState] = useState(false)
  const toggleTitleState = () => {
    setTitleState(!titleState)
  }

  return (
    <form className={styles.form} onClick={toggleTitleState}>
      <div className={`${styles.selectTitle} ${titleState && styles.active}`}>RU</div>
      <fieldset className={`${styles.selectContent} ${titleState && styles.activeContent}`}>
        <input id='select-0' type="radio" className={styles.selectInput} checked />
        <label htmlFor="select-0" className={styles.selectLabel}>RU</label>

        <input id='select-1' type="radio" className={styles.selectInput} />
        <label htmlFor="select-1" className={`${styles.selectLabel} ${titleState && styles.activeSelect}`}>EN</label>
      </fieldset>
    </form>
  )
}

export default LangSwitcher