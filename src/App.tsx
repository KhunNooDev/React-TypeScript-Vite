import React from 'react'
import { HomeOutlined, PersonAddAltOutlined, LoginOutlined, DriveFileRenameOutline } from '@mui/icons-material'

import ThemeComponent from 'theme/ThemeComponent'
import { customTranslation } from 'i18n'
import { HomePage, SignUp, SignIn, ExInputCheckbox, ExInputText } from 'pages'
import Layout from 'layouts/Layout'
import { addDepthNavigationType } from 'utils/UtilsData'

export default function App() {
  const _navigation = addDepthNavigationType(navigation())

  return (
    <ThemeComponent>
      <Layout navigation={_navigation} />
    </ThemeComponent>
  )
}

export type NavigationTypeArr = NavigationType[]
export type NavigationType = {
  //! {element, path} or {expand, subMenu} !//
  title: string
  icon?: JSX.Element
  element?: JSX.Element
  path?: string
  expand?: boolean
  subMenu?: NavigationTypeArr
  depth?: number
}

function navigation(): NavigationTypeArr {
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
    {
      title: t('navigation.AllInput'),
      icon: <DriveFileRenameOutline />,
      expand: true,
      subMenu: [
        {
          title: t('navigation.AllInput'),
          icon: <DriveFileRenameOutline />,
          subMenu: [
            {
              title: 'Ex Checkbox',
              icon: <DriveFileRenameOutline />,
              element: <ExInputCheckbox />,
              path: '/ex_input_checkbox',
            },
          ],
        },
        {
          title: 'Ex Text',
          icon: <DriveFileRenameOutline />,
          element: <ExInputText />,
          path: '/ex_input_text',
        },
      ],
    },
  ]
}
