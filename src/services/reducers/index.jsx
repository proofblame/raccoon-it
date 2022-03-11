import { combineReducers } from 'redux'
import languagesReducer from './languages'
import navbarReducer from './navbar'



export const rootReducer = combineReducers({
  lang: languagesReducer,
  nav: navbarReducer,

})