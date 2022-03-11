import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  navbar: false,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    // Открытие/закрытие меню
    toggleNavbar(state, action) {
      state.navbar = action.payload
    }
  }
})

const { actions, reducer } = navbarSlice

export const { toggleNavbar } = actions

export default reducer