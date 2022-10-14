import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomeOutlined, HandymanOutlined } from '@mui/icons-material'

import HomePage from './pages/HomePage'
import Test from './pages/Test'

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
      title: 'Dashboard',
      icon: <HomeOutlined />,
      element: <HomePage />,
      path: '/',
    },
    {
      title: 'Account Settings',
      icon: <HandymanOutlined />,
      element: <Test />,
      path: '/test',
    },
  ]
}
