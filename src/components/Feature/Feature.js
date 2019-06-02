import PropTypes from "prop-types"
import React from "react"

import Heading from "../../components/Heading"
import "./styles.css"

function Feature(props) {

  const {
    action,
    description,
    img,
    image,
    subtitle,
    title,
    url
  } = props

  const Image = image || (img &&
    <img src={img} alt={title} />
  )

  return (
    <div className="feature">
      <div className="feature_wrap">

        {Image &&
          <div className="feature_img">
            {Image}
          </div>
        }

        <div className="feature_body">

          {title &&
            <Heading level={3} display={3} className="feature_title">
              {title}
            </Heading>
          }

          {subtitle &&
            <Heading level={4} className="feature_subtitle">
              {subtitle}
            </Heading>
          }

          {description &&
            <div dangerouslySetInnerHTML={{__html: description}}></div>
          }

          {action && url &&
            <p>
              <a href={url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                  {action}
              </a>
            </p>
          }

        </div>

      </div>
    </div>
  )

}

Feature.defaultProps = {
  action: '',
  description: '',
  img: '',
  image: null,
  subtitle: '',
  title: '',
  url: ''
}

Feature.propTypes = {
  action: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  image: PropTypes.element,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Feature
