import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

function Poster(props) {

  const {
    img,
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
        <img src={img} alt="" />
        <span class="vh">{name}</span>
    </a>
  )
}

Poster.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Poster
