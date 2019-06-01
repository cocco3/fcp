import dayjs from "dayjs"
import React from "react"

import {
  Feature,
  Layout,
  Section,
  SEO
} from "../../components"

import data from "./data"

function NewsPage() {

  const newsItems = data
    .sort((a, b) => {
      return a.date > b.date ? 1 : a.date < b.date ? -1 : 0
    })
    .reverse()
    .map((value, index) => {

      return (
        <Section key={index}>
          <Feature
            action="Read More"
            description={value.description}
            img={value.img}
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
