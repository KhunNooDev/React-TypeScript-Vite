import React, { useState } from 'react'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { NavigationTypeArr } from 'App'

interface ListItemButtonLinkProps {
  icon?: React.ReactElement
  primary: string
  to?: string
  expand?: boolean
  subMenu?: NavigationTypeArr
  depth?: number
}

export default function ListItemButtonLink(props: ListItemButtonLinkProps) {
  const { icon, primary, to } = props
  const [open, setOpen] = useState(props.expand || false)

  const depth = props.depth || 0

  return (
    <List component='div' disablePadding>
      {!props.subMenu ? (
        // no subMenu
        <>
          <ListItemButton component={RouterLink} to={to ? to : '*'} sx={{ pl: 4 * depth }}>
            {icon ? <ListItemIcon sx={{ minWidth: 35 }}>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
          </ListItemButton>
        </>
      ) : (
        // have subMenu
        <>
          <ListItemButton onClick={() => setOpen(!open)} sx={{ pl: 4 * depth }}>
            {icon ? <ListItemIcon sx={{ minWidth: 35 }}>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {props.subMenu.map((item, idx) => (
                <ListItemButtonLink
                  key={idx}
                  to={item.path}
                  primary={item.title}
                  icon={item.icon}
                  subMenu={item.subMenu}
                  depth={item.depth}
                />
              ))}
            </List>
          </Collapse>
        </>
      )}
    </List>
  )
}
