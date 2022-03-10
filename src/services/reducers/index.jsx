import { combineReducers } from 'redux'
import languagesReducer from './languages'



export const rootReducer = combineReducers({
  lang: languagesReducer,

})