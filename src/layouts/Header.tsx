import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Box, Button, IconButton, MenuItem, Popover, Stack, Toolbar, Typography } from '@mui/material'
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon, Menu as MenuIcon } from '@mui/icons-material'

import { customTranslation } from 'i18n'
import { getDarkThemeState } from 'redux/selector'
import { asyncToggleTheme } from 'redux/theme/themeSlice'
import flag_en from 'assets/icons/ic_flag_en.svg'
import flag_th from 'assets/icons/ic_flag_th.svg'
import flag_de from 'assets/icons/ic_flag_de.svg'
import flag_fr from 'assets/icons/ic_flag_fr.svg'
const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: flag_en,
  },
  {
    value: 'th',
    label: 'Thailand',
    icon: flag_th,
  },
  // {
  //   value: 'de',
  //   label: 'German',
  //   icon: flag_de,
  // },
  // {
  //   value: 'fr',
  //   label: 'French',
  //   icon: flag_fr,
  // },
]

interface Props {
  drawerWidth: number
  handleDrawerToggle: () => void
}

export default function Header(props: Props) {
  const { drawerWidth, handleDrawerToggle } = props
  const dispatch = useDispatch()
  const { changeLanguage, getLanguage } = customTranslation()

  const [open, setOpen] = useState<Element | null>(null)
  const [flag, setFlag] = useState<{
    value: string
    label: string
    icon: string
  }>(LANGS[0])

  useEffect(() => {
    const _flag = LANGS.find((element) => element.value == getLanguage())
    if (_flag) setFlag(_flag)
  }, [getLanguage()])

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen(event.currentTarget)
  }

  const handleClose = (language?: string) => {
    if (language) changeLanguage(language)
    setOpen(null)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: 'block' }}>
          Responsive drawer
        </Typography>
        {
          //#region flag
        }
        <IconButton
          onClick={handleOpen}
          sx={{
            padding: 0,
            width: 44,
            height: 44,
          }}
        >
          <img src={flag.icon} alt={flag.label} />
        </IconButton>
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={() => handleClose()}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 1,
              mt: 1.5,
              ml: 0.75,
              width: 180,
              '& .MuiMenuItem-root': {
                px: 1,
                typography: 'body2',
                borderRadius: 0.75,
              },
            },
          }}
        >
          <Stack spacing={0.75}>
            {LANGS.map((option) => (
              <MenuItem
                key={option.value}
                selected={option.value === flag.value}
                onClick={() => handleClose(option.value)}
              >
                <Box component='img' alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
                {option.label}
              </MenuItem>
            ))}
          </Stack>
        </Popover>
        {
          // #endregion
        }
        <IconButton sx={{ ml: 1 }} onClick={() => dispatch(asyncToggleTheme())} color='inherit'>
          {getDarkThemeState() ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
