import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  Feature,
  Layout,
  Section,
  SEO
} from "../components"

import biosData from "../data/bios"

function BiosPage(props) {

  const allBios = biosData
    .map((value, index) => {

      const currentImageName = value.img

      const fluidImage = props.data.bioImages.edges.find(x => {
        return x.node.childImageSharp
          && x.node.childImageSharp.fluid.originalName === currentImageName
      })

      const Image = (fluidImage &&
        <Img fluid={fluidImage.node.childImageSharp.fluid} />
      )

      return (
        <Section key={index}>
          <Feature
            description={value.description}
            image={Image}
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

export const pageQuery = graphql`
  query {
    bioImages: allFile(filter: {absolutePath: {regex: "/bios/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid,
              originalName
            }
          }
        }
      }
    }
  }
`
