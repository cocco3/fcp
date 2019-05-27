import PropTypes from "prop-types"
import React from "react"

import "./styles.css"

function Heading(props) {
  
  const {
    children,
    level,
    ...restProps
  } = props

  const Element = `H${level}`

  return (
    <Element {...restProps}>
      {children}
    </Element>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number.isRequired,
  as: PropTypes.number
}

export default Heading
