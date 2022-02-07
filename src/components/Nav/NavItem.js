import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

function NavItem(props) {
  const { children, to } = props

  return (
    <Link to={to} className="nav_item" activeClassName="nav_item-active">
      {children}
    </Link>
  )
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavItem
