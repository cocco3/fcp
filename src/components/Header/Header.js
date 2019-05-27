import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import Nav from "../Nav"

import Logo from '../../images/fcp-logo.svg'
import "./styles.css"

function Header(props) {
  
  const {
    siteTitle
  } = props

  return (
    <header className="header">
  
      <Link
        className="header_logo"
        to="/"
      >
        <Logo />
        <span className="vh">
          {siteTitle}
        </span>
      </Link>
  
      <Nav></Nav>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
