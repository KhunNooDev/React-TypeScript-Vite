import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, Toolbar, Typography } from '@mui/material'
import { NavigationType, NavigationTypeArr } from 'App'

interface Props {
  navigation: NavigationTypeArr
}

export default function Content(props: Props) {
  const { navigation } = props

  const makeRoute = (item: NavigationType) => {
    return (
      <Route key={item.title} path={item.path} element={item.element}>
        {item.subMenu && <>{item.subMenu.map((item) => makeRoute(item))}</>}
      </Route>
    )
  }
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        p: 3,
      }}
    >
      <Toolbar />
      <Routes>{navigation.map((item) => makeRoute(item))}</Routes>
    </Box>
  )
}
