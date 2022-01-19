import dayjs from 'dayjs'
import groupBy from 'lodash-es/groupBy'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  Feature,
  Heading,
  Layout,
  Poster,
  PosterGrid,
  Section,
  SEO,
} from '../components'

import { getImageFromResults } from '../utilities'

import data from '../data/events'

function EventsPage(props) {
  const featuredEvent = data.find(
    x => x.featured && dayjs().isAfter(x.launchDate)
  )
  const featuredEventImage =
    featuredEvent &&
    getImageFromResults(props.data.eventImages, featuredEvent.posterImage)

  const filteredPastEvents = data.filter(x => !x.featured)

  const groupedPastEvents = groupBy(filteredPastEvents, x =>
    dayjs(x.eventDate).year()
  )

  const allPastEvents = Object.keys(groupedPastEvents)
    .sort((a, b) => {
      return a.eventDate > b.eventDate ? 1 : a.eventDate < b.eventDate ? -1 : 0
    })
    .reverse()
    .map((groupYear, i) => {
      const group = groupedPastEvents[groupYear]

      const events = group.map((event, j) => {
        const fluidImage = getImageFromResults(
          props.data.eventImages,
          event.posterImage
        )

        const Image = fluidImage && (
          <Img fluid={fluidImage.node.childImageSharp.fluid} />
        )

        return (
          <Poster
            image={Image}
            name={event.name}
            url={event.photosUrl}
            key={j}
          ></Poster>
        )
      })

      return (
        <React.Fragment key={i}>
          <Heading level={4} display={4}>
            {groupYear}
          </Heading>

          <PosterGrid>{events}</PosterGrid>
        </React.Fragment>
      )
    })

  return (
    <Layout>
      <SEO title="Events" />

      {featuredEvent && (
        <Section>
          <Feature
            action="Get Tickets"
            description={featuredEvent.description}
            image={
              featuredEventImage && (
                <Img fluid={featuredEventImage.node.childImageSharp.fluid} />
              )
            }
            subtitle={dayjs(featuredEvent.eventDate).format('MMMM DD, YYYY')}
            title={featuredEvent.name}
            url={featuredEvent.ticketsUrl}
          />
        </Section>
      )}

      <Section>
        <Heading level={3} display={3}>
          Past Events
        </Heading>

        {allPastEvents}
      </Section>
    </Layout>
  )
}

export default EventsPage

export const pageQuery = graphql`
  query {
    eventImages: allFile(filter: { absolutePath: { regex: "/events/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
