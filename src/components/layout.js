/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

import "system-font-css"
import "normalize.css"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page">

        <div className="page_header">
          <div className="page_container">
            <Header siteTitle={data.site.siteMetadata.title} />
          </div>
        </div>
        
        <main className="page_body">
          <div className="page_container">
            {children}
          </div>
        </main>

        <div className="page_footer">
          <div className="page_container">
            <Footer />
          </div>
        </div>
        
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
