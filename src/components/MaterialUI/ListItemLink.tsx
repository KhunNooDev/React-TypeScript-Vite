import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

interface ListItemLinkProps {
  icon?: React.ReactElement
  primary: string
  to: string
}

export default function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props

  return (
    <List>
      <ListItem
        button
        component={RouterLink}
        to={to}
      >
        {icon ? <ListItemIcon sx={{ minWidth: 35 }}>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </List>
  )
}
