import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  language: 'ru',
}

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    // Смена языка
    setLanguage(state, action) {
      state.language = action.payload
    }
  }
})

const { actions, reducer } = languagesSlice

export const { setLanguage } = actions

export default reducer