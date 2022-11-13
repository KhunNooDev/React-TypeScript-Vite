import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomeOutlined, HandymanOutlined } from '@mui/icons-material'

import { HomePage, SignUp, SignIn } from 'pages'

import { customTranslation } from './i18n'

export default function App() {
  return (
    <>
      <Routes>
        {navigation().map((item) => (
          <Route key={item.title} path={item.path} element={item.element} />
        ))}
      </Routes>
    </>
  )
}

export function navigation() {
  const { t } = customTranslation()
  return [
    {
      title: t('navigation.SignUp'),
      icon: <HandymanOutlined />,
      element: <SignUp />,
      path: '/signup',
    },
    {
      title: t('navigation.SignIn'),
      icon: <HandymanOutlined />,
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
