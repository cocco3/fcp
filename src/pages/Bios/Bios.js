import React from "react"

import {
  Feature,
  Layout,
  Section
} from "../../components"

import SEO from "../../components/seo"

import data from "./data"

function Bios() {

  const allBios = data
    .map((value, index) => {
      return (
        <Section>
          <Feature
            description={value.description}
            img={value.img}
            title={value.name}
            key={index}
          />
        </Section>
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
