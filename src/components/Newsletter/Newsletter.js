import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import Heading from "../Heading"

import "./styles.scss"

class Newsletter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSuccess: false,
      showError: false,
      successMsg: "",
      errorMsg: "",
    }
  }
  sleep = delay => {
    var start = new Date().getTime()
    while (new Date().getTime() < start + delay);
  }
  onSubmit = async event => {
    event.preventDefault()
    const email = event.target.yourmail.value || null
    console.log(email)
    if (!email) {
      return
    }

    try {
      const result = await addToMailchimp(email, {})
      console.log(result.msg)
      this.setState({ showSuccess: true })
      this.setState({ successMsg: result.msg })
      this.setState({ showError: false })
      this.setState({ errorMsg: "" })
    } catch (err) {
      console.log(err)
      this.setState({ showSuccess: false })
      this.setState({ successMsg: "" })
      this.setState({ showError: true })
      this.setState({ errorMsg: err })
    }
  }
  render() {
    return (
      <>
        <Heading level={2} display={3}>
          Join our mailing list for event details!
        </Heading>

        <form onSubmit={this.onSubmit}>
          <label className="input-label" htmlFor="mc-email">
            Email Address <span className="input-label-required" aria-hidden="true">*</span>
          </label>
          <div className="input-group">
            <input
              name="yourmail"
              type="email"
              autoComplete="email"
              className="input-text"
              id="mc-email"
            />

            {/* helps prevent form bot signups */}
            <div className="vh" aria-hidden="true">
                <input type="text" name="b_06171f6f72f2a30896831ca94_43888fbe48" tabIndex="-1" defaultValue="" />
            </div>

            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </form>
        <br />
        <div
          className={
            this.state.showSuccess
              ? "alert alert-success"
              : "alert alert-success hideme"
          }
          dangerouslySetInnerHTML={{ __html: this.state.successMsg }}
        />
        <div
          className={
            this.state.showError
              ? "alert alert-danger"
              : "alert alert-danger hideme"
          }
          dangerouslySetInnerHTML={{ __html: this.state.errorMsg }}
        />
      </>
    )
  }
}

export default Newsletter
