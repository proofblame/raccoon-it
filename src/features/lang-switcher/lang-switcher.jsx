import React, { useState } from 'react'
import styles from './lang-switcher.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage } from '../../services/actions/languages'

const LangSwitcher = ({ forRef }) => {
  const [titleState, setTitleState] = useState(false)
  const { lang } = useSelector(store => store.lang)
  const dispatch = useDispatch()

  const toggleTitleState = (e) => {
    setTitleState(!titleState)
  }

  const onChangeLanguage = (lang) => {
    dispatch(changeLanguage(lang))
    toggleTitleState()
  }

  return (
    <section className={styles.section} onClick={toggleTitleState} ref={forRef}>
      <div className={`${styles.selectTitle} ${titleState && styles.active}`}>{lang}</div>
      <fieldset className={`${styles.selectContent} ${titleState && styles.activeContent}`}>

        <input id='select-1' type="checkbox" className={styles.selectInput} onChange={() => onChangeLanguage(lang === 'ru' ? 'en' : 'ru')} />
        <label htmlFor="select-1" className={`${styles.selectLabel} ${titleState && styles.activeSelect}`} onClick={e => e.stopPropagation()}>{lang === 'ru' ? 'en' : 'ru'}</label>
      </fieldset>
    </section>
  )
}

export default LangSwitcher