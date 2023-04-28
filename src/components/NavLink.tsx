import React, { CSSProperties, forwardRef } from 'react'
import { NavLink as NavLinkBase, NavLinkProps as BaseNavLinkProps } from 'react-router-dom'

interface NavLinkProps extends BaseNavLinkProps {
  activeClassName?: string
  activeStyle?: CSSProperties
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => (
  <NavLinkBase
    ref={ref}
    {...props}
    className={({ isActive }) => [props.className, isActive ? props.activeClassName : null].filter(Boolean).join(' ')}
    style={({ isActive }) => ({
      ...props.style,
      ...(isActive ? props.activeStyle : null),
    })}
  />
))
