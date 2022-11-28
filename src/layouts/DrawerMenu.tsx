import React from 'react'
import { Box, Divider, Drawer, Toolbar } from '@mui/material'
import { Home as HomeIcon } from '@mui/icons-material'

import ListItemLink from 'components/MaterialUI/ListItemLink'
import IconButtonLink from 'components/MaterialUI/IconButtonLink'

interface Props {
  window?: () => Window
  navigation: () => { title: string; icon?: JSX.Element; element: JSX.Element; path: string }[]
  mobileOpen: boolean
  drawerWidth: number
  handleDrawerToggle: () => void
}

export default function DrawerMenu(props: Props) {
  const { window, navigation, mobileOpen, drawerWidth, handleDrawerToggle } = props

  const drawer = (
    <>
      <Toolbar sx={{ justifyContent: 'center' }}>
        {/* <IconButtonLink
          to='/'
          icon={<HomeIcon />}
        /> */}
        <ListItemLink
          to='/'
          primary='Home'
          icon={<HomeIcon />}
        />
      </Toolbar>
      {/* <Divider /> */}
      {navigation().map((item, idx) => (
        <ListItemLink
          key={idx}
          to={item.path}
          primary={item.title}
          icon={item.icon}
        />
      ))}
    </>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
