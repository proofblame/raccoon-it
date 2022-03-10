import { setLanguage } from '../reducers/languages';


export const getLanguage = () => {
  const lang = localStorage.getItem('lang')
  if (lang) {
    return (dispatch) => {
      dispatch(setLanguage())
    }
  }
}

export const changeLanguage = (lang) => {
  return (dispatch) => {
    localStorage.setItem('lang', lang)
    dispatch(setLanguage(lang))
  }
}