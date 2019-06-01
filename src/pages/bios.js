import React from "react"

import {
  Feature,
  Layout,
  Section,
  SEO
} from "../components"

import biosData from "../data/bios"

function BiosPage() {

  const allBios = biosData
    .map((value, index) => {
      return (
        <Section key={index}>
          <Feature
            description={value.description}
            img={value.img}
            title={value.name}
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

export default BiosPage
