import dayjs from "dayjs"
import React, { Component } from "react"

import {
  Layout,
  SEO
} from "../components"

import eventsData from "../data/events"

class TicketsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featuredEvent: null
    }
  }

  componentDidMount() {
    const featuredEvent = eventsData.find(x => {
      return x.featured && dayjs().isAfter(x.launchDate) && dayjs().isBefore(x.eventDate)
    })
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
          <>
            <p>
              Redirecting to Eventbrite...
            </p>
            <p>
              If the page does not reload, click this link:<br/>
              <a href={this.state.featuredEvent.ticketsUrl}>
                {this.state.featuredEvent.ticketsUrl}
              </a>
            </p>
          </>
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

export default TicketsPage
