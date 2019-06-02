import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

function Poster(props) {

  const {
    image,
    name,
    url
  } = props

  return (
    <a
      className="grid_item"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {image}
      <span className="vh">{name}</span>
    </a>
  )
}

Poster.propTypes = {
  image: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Poster
