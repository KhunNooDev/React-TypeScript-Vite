import React from 'react'
import { Box, Divider, Drawer, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { Home as HomeIcon } from '@mui/icons-material'

import { NavLink } from 'components/NavLink'
import ListItemButtonLink from 'components/MaterialUI/ListItemButtonLink'
import IconButtonLink from 'components/MaterialUI/IconButtonLink'
import { NavigationTypeArr } from 'App'

interface Props {
  window?: () => Window
  navigation: NavigationTypeArr
  mobileOpen: boolean
  drawerWidth: number
  handleDrawerToggle: () => void
}

export default function DrawerMenu(props: Props) {
  const { window, navigation, mobileOpen, drawerWidth, handleDrawerToggle } = props

  const drawer = (
    <>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <IconButtonLink to='/' icon={<HomeIcon />} />
        {/* <ListItemButtonLink to='/' primary='Home' icon={<HomeIcon />} /> */}
      </Toolbar>
      {/* <Divider /> */}
      {navigation.map((item, idx) => (
        <ListItemButtonLink
          key={idx}
          to={item.path}
          primary={item.title}
          icon={item.icon}
          expand={item.expand}
          subMenu={item.subMenu}
          depth={item.depth}
        />
      ))}
    </>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
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
