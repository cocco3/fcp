import dayjs from "dayjs"
import React from "react"

import {
  Feature,
  Layout,
  Section,
  SEO
} from "../components"

import eventsData from "./events/data"

function IndexPage() {
  const featuredEvent = eventsData.find(x => x.featured && dayjs().isAfter(x.launchDate))

  const recentEvent = eventsData.find(x => x.recent)

  const recentEventDescription = `<p>ARRROOOU!!! THANK YOU to everyone who made it out for ${recentEvent.name}! What an EPIC evening! Special WOOFS to the DJs, staff and crew, and our photographer. Check out the photos at the link below, and keep the party vibes going by checking out our <a href="http://soundcloud.com/fogcitypack" target="_blank" rel="noopener noreferrer">SoundCloud page</a>.</p>`

  const aboutThePack = `<p>
  Fog City Pack emerged out of a network of several family-like relationships in San Francisco, California. Beginning in 2014, Alphas Turbo and Midnight first recognized each other as cousin pups, due to the close relationship between Midnight and Turbo’s original Handler. After collaring their own pups, given the degree of interconnectedness among the group and the simultaneous growth of the pup subculture in San Francisco, Turbo and Midnight formed a tightly bonded family unit.
</p>
<p>
  What originally united, and continues to unite, Fog City Pack is a commitment to a highly visible “chosen family” with a hierarchical structure intended to provide support and mentorship, akin to that of the “house” concept in drag culture. Through loyalty, playfulness, and service as pups, Fog City Pack seeks to foster a sense of community and sex positivity by hosting social and educational events that bring together diverse members of the kink scene and San Francisco’s larger queer community.
</p>`

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

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

      {recentEvent &&
        <Section>
          <Feature
            action="View Photos"
            description={recentEventDescription}
            img={recentEvent.groupImage}
            title="Thanks for coming out!"
            url={recentEvent.url}
          />
        </Section>
      }

      <Section>
        <Feature
          description={aboutThePack}
          img="images/group-about.jpg"
          title="About the Pack"
        />
      </Section>

    </Layout>
  )
}

export default IndexPage
