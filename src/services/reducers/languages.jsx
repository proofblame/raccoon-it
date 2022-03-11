import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  lang: 'ru',
}

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    // Смена языка
    setLanguage(state, action) {
      state.lang = action.payload
    }
  }
})

const { actions, reducer } = languagesSlice

export const { setLanguage } = actions

export default reducer