import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import "./styles.css"

function Button(props) {

  const {
    children,
    to
  } = props

  return (
    <Link
      to={to}
      className="btn"
    >
      {children}
    </Link>
  )

}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}

export default Button
