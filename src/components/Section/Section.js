import PropTypes from "prop-types"
import React from "react"

import "./styles.css"

function Section(props) {

  const {
    children,
    ...restProps
  } = props

  return (
    <div className="section" {...restProps}>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default Section
