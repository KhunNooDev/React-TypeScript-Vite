import { AnyAction, createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: !!JSON.parse(localStorage.getItem('darkTheme') || 'false'),
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
  },
})

export function asyncToggleTheme(): AnyAction {
  const isDarkTheme = !!JSON.parse(localStorage.getItem('darkTheme') || 'false')
  localStorage.setItem('darkTheme', String(!isDarkTheme))
  return toggleTheme()
}

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
