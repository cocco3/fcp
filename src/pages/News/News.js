import dayjs from "dayjs"
import React from "react"

import {
  Feature,
  Layout
} from "../../components"

import SEO from "../../components/seo"

import data from "./data"

function News() {

  const newsItems = data
    .sort((a, b) => {
      return a > b ? 1 : a < b ? -1 : 0
    })
    .reverse()
    .map((value, index) => {

      return (
        <Feature
          action="Read More"
          description={value.description}
          img={value.img}
          subtitle={dayjs(value.date).format("MMMM DD, YYYY")}
          title={value.title}
          url={value.url}
          key={index}
        />
      )
    })

  return (
    <Layout>
      <SEO title="News" />
      {newsItems}
    </Layout>
  )
}

export default News
