import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Info = (props) => {
  return (
    <>
      <nav className="info-info">
        <span className="info-text">
          <span>Info</span>
          <br></br>
        </span>
        <Link href="/about">
          <a className="info-link">{props.text}</a>
        </Link>
        <Link href="/contact-form">
          <a className="info-link1">{props.text1}</a>
        </Link>
        <Link href="/data-page">
          <a className="info-link2">
            <span>Read</span>
            <br></br>
          </a>
        </Link>
      </nav>
      <style jsx>
        {`
          .info-info {
            flex: 0 0 auto;
            width: 100px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .info-text {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .info-link {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .info-link1 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .info-link2 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Info.defaultProps = {
  text: 'About',
  text1: 'Contact',
}

Info.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Info
