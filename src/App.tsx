import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomeOutlined, HandymanOutlined } from '@mui/icons-material'

import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

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
  return [
    {
      title: 'SignUp',
      icon: <HandymanOutlined />,
      element: <SignUp />,
      path: '/signup',
    },
    {
      title: 'SignIn',
      icon: <HandymanOutlined />,
      element: <SignIn />,
      path: '/signin',
    },
    {
      title: 'Dashboard',
      icon: <HomeOutlined />,
      element: <HomePage />,
      path: '/',
    },
  ]
}
