import React from "react"

import Heading from "../Heading"

import "./styles.scss"
import "../Button/styles.css"

function Mailchimp() {

  return (
    <>
      <div id="mc_embed_signup">

        <form action="https://fogcitypack.us20.list-manage.com/subscribe/post?u=06171f6f72f2a30896831ca94&amp;id=43888fbe48" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>

          <div id="mc_embed_signup_scroll">
            <Heading level={2} display={3}>
              Join our mailing list for event details!
            </Heading>

            <div className="mc-field-group">

              <label htmlFor="mce-EMAIL">
                Email Address  <span className="asterisk" aria-hidden="true">*</span>
              </label>

              <div className="form-group">
                <input type="email" defaultValue="" name="EMAIL" className="input-text required email" id="mce-EMAIL" />

                <div className="vh" aria-hidden="true">
                  <input type="text" name="b_06171f6f72f2a30896831ca94_43888fbe48" tabIndex="-1" defaultValue="" />
                </div>

                <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary" />
              </div>

            </div>

            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>

export default Mailchimp
