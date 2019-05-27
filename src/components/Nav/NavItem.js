import classNames from "classnames"
import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

function NavItem(props) {

  const {
    active,
    children,
    to
  } = props

  const navItemClass = classNames(
    'nav_item',
    {'nav_item-active': active}
  )

  return (
    <Link
      to={to}
      className={navItemClass}
    >
      {children}
    </Link>
  )
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}

export default NavItem
