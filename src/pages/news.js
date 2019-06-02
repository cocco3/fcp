import dayjs from "dayjs"
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Feature,
  Layout,
  Section,
  SEO
} from "../components"

import newsData from "../data/news"

function NewsPage(props) {

  const newsItems = newsData
    .sort((a, b) => {
      return a.date > b.date ? 1 : a.date < b.date ? -1 : 0
    })
    .reverse()
    .map((value, index) => {

      const currentImageName = value.img

      const fluidImage = props.data.newsImages.edges.find(x => {
        return x.node.childImageSharp
          && x.node.childImageSharp.fluid.originalName === currentImageName
      })

      const Image = (fluidImage &&
        <Img fluid={fluidImage.node.childImageSharp.fluid} />
      )

      return (
        <Section key={index}>
          <Feature
            action="Read More"
            description={value.description}
            image={Image}
            subtitle={dayjs(value.date).format("MMMM DD, YYYY")}
            title={value.title}
            url={value.url}
          />
        </Section>
      )
    })

  return (
    <Layout>
      <SEO title="News" />
      {newsItems}
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query {
    newsImages: allFile(filter: {absolutePath: {regex: "/news/"}}) {
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
