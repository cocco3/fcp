import dayjs from "dayjs"
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Feature,
  Heading,
  Layout,
  Poster,
  PosterGrid,
  Section,
  SEO
} from "../components"

import data from "../data/events"

function EventsPage(props) {

  const featuredEvent = data.find(x => x.featured && dayjs().isAfter(x.launchDate))

  const allPastEvents = data
    .filter(x => !x.featured)
    .sort((a, b) => {
      return a.eventDate > b.eventDate ? 1 : a.eventDate < b.eventDate ? -1 : 0
    })
    .reverse()
    .map((value, index) => {

      const currentImageName = value.posterImage

      const fluidImage = props.data.eventImages.edges.find(x => {
        return x.node.childImageSharp
          && x.node.childImageSharp.fluid.originalName === currentImageName
      })

      const Image = (fluidImage &&
        <Img fluid={fluidImage.node.childImageSharp.fluid} />
      )

      return (
        <Poster
          image={Image}
          name={value.name}
          url={value.photosUrl}
          key={index}
        >
        </Poster>
      )
    })

  return (
    <Layout>
      <SEO title="Events" />

      {featuredEvent &&
        <Section>
          <Feature
            action="Get Tickets"
            description={featuredEvent.description}
            img={featuredEvent.posterImage}
            subtitle={dayjs(featuredEvent.eventDate).format("MMMM DD, YYYY")}
            title={featuredEvent.name}
            url={featuredEvent.ticketsUrl}
          />
        </Section>
      }

      <Section>

        <Heading level={3} display={3}>
          Past Events
        </Heading>

        <PosterGrid>
          {allPastEvents}
        </PosterGrid>

      </Section>
    </Layout>
  )
}

export default EventsPage

export const pageQuery = graphql`
  query {
    eventImages: allFile(filter: {absolutePath: {regex: "/events/"}}) {
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
