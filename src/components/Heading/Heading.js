import PropTypes from "prop-types"
import React from "react"

import "./styles.css"

function Heading(props) {

  const {
    children,
    display,
    level,
    ...restProps
  } = props

  const Element = `h${level}`

  const displayClass = `heading-${display || level}`

  return (
    <Element {...restProps} className={displayClass}>
      {children}
    </Element>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number.isRequired,
  display: PropTypes.number
}

export default Heading
