import React from "react"

import Feature from "../../components/Feature"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import data from "./data"

function Bios() {

  const allBios = data
    .map((value, index) => {
      return (
        <Feature
          description={value.description}
          img={value.img}
          title={value.name}
          key={index}
        />
      )
    })

  return (
    <Layout>
      <SEO title="Bios" />
      {allBios}
    </Layout>
  )
}

export default Bios
