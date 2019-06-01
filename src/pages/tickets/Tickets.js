import dayjs from "dayjs"
import React, { Component } from "react"

import {
  Layout,
  SEO
} from "../../components"

import eventsData from "../Events/data"

class Tickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featuredEvent: null
    }
  }

  componentDidMount() {
    const featuredEvent = eventsData.find(x => x.featured && dayjs().isAfter(x.launchDate))
    this.setState({featuredEvent: featuredEvent})

    if (featuredEvent) {
      window.location = featuredEvent.ticketsUrl
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Tickets" />
        {this.state.featuredEvent &&
          <div>Redirecting to Eventbrite...</div>
        }

        {!this.state.featuredEvent &&
          <p>
            Check back soon for tickts to the next party!
          </p>
        }
      </Layout>
    )
  }
}

export default Tickets
