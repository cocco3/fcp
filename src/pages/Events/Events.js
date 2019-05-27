import dayjs from "dayjs"
import React from "react"

import Feature from "../../components/Feature"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import data from "./data"
import "./styles.css"

function Events() {

  const featuredEvent = data.find(x => x.featured)

  const allPastEvents = data
    .filter(x => !x.featured)
    .sort((a, b) => {
      return a > b ? 1 : a < b ? -1 : 0
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
            <img src={value.img} alt="" />
        </a>
      )
    })

  return (
    <Layout>
      <SEO title="Events" />

      <Feature
        action="Get Tickets"
        description={featuredEvent.description}
        img={featuredEvent.img}
        subtitle={dayjs(featuredEvent.date).format("MMMM DD, YYYY")}
        title={featuredEvent.name}
        url={featuredEvent.url}
      />

      <div className="grid">
        {allPastEvents}
      </div>
    </Layout>
  )
}

export default Events
