import React from "react"

import Feature from "../../components/Feature"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import data from "./data"

function Events() {
  return (
    <Layout>
      <SEO title="Events" />
      <h1>Events!</h1>
      <Feature
        description={data.description}
        title={data.name}
      />
    </Layout>
  )
}

export default Events
