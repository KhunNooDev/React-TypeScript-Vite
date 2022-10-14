import { Theme } from '@mui/material/styles'

export default function GlobalStyles(theme: Theme) {
  return {
    '.testcss': {
      color: 'blue',
    },
    '.HomePaper': {
      minHeight: '100vh',
      borderRadius: '0',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
    },
    '::-webkit-scrollbar': {
      width: '12px' /* width of the entire scrollbar */,
    },
    '::-webkit-scrollbar-track': {
      background: theme.palette.background.paper /* color of the tracking area */,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.divider /* color of the scroll thumb */,
      borderRadius: '20px' /* roundness of the scroll thumb */,
      // border: '3px solid theme.palette.primary.main' /* creates padding around scroll thumb */,
    },
  }
}
