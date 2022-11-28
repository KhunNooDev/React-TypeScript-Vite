import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'

interface IconButtonLinkProps {
  icon?: React.ReactElement
  to: string
}

export default function IconButtonLink(props: IconButtonLinkProps) {
  const { icon, to } = props
  return (
    <IconButton
      component={Link}
      to={to}
    >
      {icon}
    </IconButton>
  )
}
