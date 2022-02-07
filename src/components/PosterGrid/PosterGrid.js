import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

function PosterGrid(props) {
  const { children } = props

  return <div className="grid">{children}</div>
}

PosterGrid.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PosterGrid
