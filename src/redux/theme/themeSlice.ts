import { AnyAction, createSlice } from '@reduxjs/toolkit'

const isDarkTheme = !!JSON.parse(localStorage.getItem('darkTheme') || 'false')

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: isDarkTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
  },
})

export function asyncToggleTheme(): AnyAction {
  localStorage.setItem('darkTheme', String(!isDarkTheme))
  return toggleTheme()
}

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
