import React from 'react'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import GlobalStyling from './globalStyles'
import { DefaultPalette } from './palette'

import { getDarkThemeState } from '../redux/selector'

type Props = {
  children: React.ReactNode
}

export default function ThemeComponent(props: Props) {
  const { children } = props

  const darkMode = getDarkThemeState()

  const theme = createTheme({ palette: DefaultPalette(darkMode) })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme)} />
      {children}
    </ThemeProvider>
  )
}
