import React from 'react'

import PropTypes from 'prop-types'

const Newsletter = (props) => {
  return (
    <>
      <div className={`newsletter-newsletter ${props.rootClassName} `}>
        <div className="newsletter-subscribe-box">
          <span className="newsletter-text">{props.text}</span>
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="newsletter-textinput input"
          />
          <button name="join the club" className="newsletter-button button">
            {props.button}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .newsletter-newsletter {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .newsletter-subscribe-box {
            width: auto;
            height: 155px;
            display: flex;
            flex-direction: column;
          }
          .newsletter-text {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .newsletter-textinput {
            color: var(--dl-color-primary-darkblue);
            border-color: var(--dl-color-primary-darkblue);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .newsletter-button {
            color: var(--dl-color-primary-yellow);
            width: 110px;
            height: 51px;
            font-style: normal;
            font-weight: 700;
            background-color: var(--dl-color-primary-darkblue);
          }

          @media (max-width: 767px) {
            .newsletter-root-class-name {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Newsletter.defaultProps = {
  button: 'Subscribe',
  textinputPlaceholder: 'Enter Your Email',
  text: 'Subscribe to our newsletter',
  rootClassName: '',
}

Newsletter.propTypes = {
  button: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Newsletter
