import React from 'react'
import { useDispatch } from 'react-redux'
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Link,
  Button,
  Box,
  Container,
  Grid,
} from '@mui/material'

import { useTranslation, Trans } from 'react-i18next'
import { Namespace } from 'i18next'
import { customTranslation, namespaces } from 'i18n'

// get theme from store
import { getDarkThemeState } from 'redux/selector'
import { asyncToggleTheme } from 'redux/theme/themeSlice'
import RecipeReviewCard from 'components/MaterialUI/RecipeReviewCard'

export const HomePage = () => {
  // initialize dispatch variable
  const dispatch = useDispatch()

  const { t, changeLanguage } = customTranslation(namespaces.pages.hello)

  // ToggleSwitch component
  const ToggleSwitch = () => {
    return (
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={getDarkThemeState()} onChange={() => dispatch(asyncToggleTheme())} />}
          label='Toggle Theme'
        />
      </FormGroup>
    )
  }

  return (
    <Container component='main' /*maxWidth='xs'*/>
      <Box
        sx={{
          // marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Paper className='HomePaper'> */}
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
        {/* </Paper> */}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={4}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={4}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={8}>
          <RecipeReviewCard />
        </Grid>
      </Grid>
    </Container>
  )
}
