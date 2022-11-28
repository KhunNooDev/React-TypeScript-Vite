import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, Toolbar, Typography } from '@mui/material'

interface Props {
  navigation: () => { title: string; icon?: JSX.Element; element: JSX.Element; path: string }[]
}

export default function Content(props: Props) {
  const { navigation } = props

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        p: 3,
      }}
    >
      <Toolbar />
      <Routes>
        {navigation().map((item) => (
          <Route
            key={item.title}
            path={item.path}
            element={item.element}
          />
        ))}
      </Routes>
    </Box>
  )
}
