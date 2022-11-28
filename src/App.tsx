import React from 'react'
import { HomeOutlined, PersonAddAltOutlined, LoginOutlined } from '@mui/icons-material'

import ThemeComponent from 'theme/ThemeComponent'
import { customTranslation } from 'i18n'
import { HomePage, SignUp, SignIn } from 'pages'
import Layout from 'layouts/Layout'

export default function App() {
  return (
    <ThemeComponent>
      <Layout navigation={navigation} />
    </ThemeComponent>
  )
}

function navigation() {
  const { t } = customTranslation()
  return [
    {
      title: t('navigation.SignUp'),
      icon: <PersonAddAltOutlined />,
      element: <SignUp />,
      path: '/signup',
    },
    {
      title: t('navigation.SignIn'),
      icon: <LoginOutlined />,
      element: <SignIn />,
      path: '/signin',
    },
    {
      title: t('navigation.Dashboard'),
      icon: <HomeOutlined />,
      element: <HomePage />,
      path: '/',
    },
  ]
}
