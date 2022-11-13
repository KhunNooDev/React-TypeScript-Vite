import { useDispatch } from 'react-redux'
import { Paper, FormGroup, FormControlLabel, Switch, Typography, Link, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

import { customTranslation, namespaces } from 'i18n'

// get theme from store
import { getDarkThemeState } from 'redux/selector'
import { asyncToggleTheme } from 'redux/theme/themeSlice'
import { useEffect } from 'react'
import { Namespace } from 'i18next'

export const HomePage = () => {
  // initialize dispatch variable
  const dispatch = useDispatch()

  const { t, changeLanguage } = customTranslation(namespaces.pages.hello)

  // ToggleSwitch component
  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={getDarkThemeState()} onChange={() => dispatch(asyncToggleTheme())} />}
            label='Toggle Theme'
          />
        </FormGroup>
      </div>
    )
  }

  return (
    <Paper className='HomePaper'>
      <ToggleSwitch />
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1' className='testcss'>
        It's Blue
      </Typography>
      <h1>1{t('welcome')}</h1> {/*namespaces.pages.hello */}
      <h2>2{t('buttons.ok')}</h2> {/*namespaces.pages.hello */}
      <h2>3{t('buttons.ok', true)}</h2> {/*namespaces.common */}
      <h2>{t('buttons.ok', false)}</h2> {/*namespaces.common */}
      <h2>{t('title', false, namespaces.pages.signin)}</h2> {/*namespaces.pages.signin */}
      <h2>{t('title', false, namespaces.pages.signup)}</h2> {/*namespaces.pages.signup */}
      {/* <h2>{t('buttons.ok', namespaces.pages.signin)}</h2> namespaces.signin */}
      <Button onClick={changeLanguage('en')}>en</Button>
      <Button onClick={changeLanguage('th')}>th</Button>
      <Link component={RouterLink} to='/signin' variant='body2'>
        SignIn
      </Link>
      <Link component={RouterLink} to='/signup' variant='body2'>
        SignUp
      </Link>
    </Paper>
  )
}
