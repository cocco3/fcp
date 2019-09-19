import React from "react"
import PropTypes from "prop-types"

import NavItem from './NavItem'

import "./styles.css"

function Nav(props) {

  // const {
  //   items
  // } = props

  // const listItems = items.map((value, index) => {
  //   return (
  //     <li  className="nav_listItem" key={index}>
  //       {value}
  //     </li>
  //   )
  // })

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_listItem">
          <NavItem to="/bios/">Bios</NavItem>
        </li>
        <li className="nav_listItem">
          <NavItem to="/events/">Events</NavItem>
        </li>
        <li className="nav_listItem">
          <NavItem to="/news/">News</NavItem>
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  items: PropTypes.array
}

Nav.defaultProps = {
  items: []
}

export default Nav
