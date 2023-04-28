import React, { useState } from 'react'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { NavLink } from 'components/NavLink'
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
          <ListItemButton
            component={NavLink}
            to={to ? to : '*'}
            end
            activeStyle={{
              // use theme
              boxShadow: '0px 4px 8px -4px rgb(58 53 65 / 42%)',
              backgroundColor: '#e7e3fc1a',
              borderRadius: '0 100px 100px 0', //same on hover
            }}
            sx={{ pl: 4 * depth }}
          >
            {icon ? <ListItemIcon sx={{ minWidth: 35, pl: 1.5, pr: 1.5 }}>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
          </ListItemButton>
        </>
      ) : (
        // have subMenu
        <>
          <ListItemButton onClick={() => setOpen(!open)} sx={{ pl: 4 * depth }}>
            {icon ? <ListItemIcon sx={{ minWidth: 35, pl: 1.5, pr: 1.5 }}>{icon}</ListItemIcon> : null}
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
