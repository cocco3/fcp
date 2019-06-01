import React from "react"

import {
  Feature,
  Layout,
  Section,
  SEO
} from "../../components"

import data from "./data"

function Bios() {

  const allBios = data
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

export default Bios
