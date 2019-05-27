import React from "react"
import "./styles.css"

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} | Facebook | Instagram
    </footer>
  )
}

export default Footer
