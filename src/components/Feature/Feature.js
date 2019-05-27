import PropTypes from "prop-types"
import React from "react"

function Feature(props) {

  const {
    action,
    description,
    img,
    subtitle,
    title,
    url
  } = props

  return (
    <div className="feature">
      <div className="feature_wrap">

        {img &&
          <div className="feature_img">
            <img src={img} alt={title} />
          </div>
        }

        <div className="feature_body">

          {subtitle && 
            <h4 className="feature_subtitle">
              {subtitle}
            </h4>
          }

          {title &&
            <h3 className="feature_title">
              {title}
            </h3>
          }

          {description &&
            <div>
              {description}
            </div>
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
  subtitle: '',
  title: '',
  url: ''
}

Feature.propTypes = {
  action: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Feature
