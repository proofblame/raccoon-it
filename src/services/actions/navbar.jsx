import { toggleNavbar } from '../reducers/navbar';

export const openMenu = () => {
  return (dispatch) => {
    dispatch(toggleNavbar(true))
  }
}

export const closeMenu = () => {
  return (dispatch) => {
    dispatch(toggleNavbar(false))
  }
}