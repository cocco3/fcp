import dayjs from "dayjs"
import React from "react"

import {
  Feature,
  Heading,
  Layout,
  Section,
  SEO
} from "../../components"

import data from "./data"
import "./styles.css"

function Events() {

  const featuredEvent = data.find(x => x.featured && dayjs().isAfter(x.launchDate))

  const allPastEvents = data
    .filter(x => !x.featured)
    .sort((a, b) => {
      return a.eventDate > b.eventDate ? 1 : a.eventDate < b.eventDate ? -1 : 0
    })
    .reverse()
    .map((value, index) => {

      return (
        <a
          key={index}
          className="grid_item"
          href={value.url}
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={value.posterImage} alt="" />
        </a>
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

        <div className="grid">
          {allPastEvents}
        </div>
      </Section>
    </Layout>
  )
}

export default Events
