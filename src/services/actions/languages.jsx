import { setLanguage } from '../reducers/languages';

export const getLanguage = () => {
  const lang = localStorage.getItem('lang')
  if (lang) {
    return (dispatch) => {
      dispatch(setLanguage(lang))
    }
  } else {
    const lang = document.documentElement.lang
    return (dispatch) => {
      dispatch(setLanguage(lang))
    }
  }
}

export const changeLanguage = (lang) => {
  return (dispatch) => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    dispatch(setLanguage(lang))
  }
}