import React from "react"
import "./styles.css"

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          © {new Date().getFullYear()} Fog City Pack, LLC
        </li>
        <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/fogcitypack/">
                Facebook
            </a>
        </li>
        <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/fogcitypack/">
                Instagram
            </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
