import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import Nav from "../Nav"

import Logo from '../../images/fcp-logo.svg'

const Header = ({ siteTitle }) => (
  <header className="header">

    <a className="header_logo"
       href="/">
        <Logo />
    </a>
    
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <Nav></Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
