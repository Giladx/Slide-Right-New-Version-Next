import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero">
        <div className="hero-max-width">
          <h1 data-aos="fade-up" className="hero-text">
            <span>We are a full-service sliding glass</span>
            <br></br>
            <span> door repair company</span>
            <br></br>
          </h1>
          <span data-aos="fade-down" className="hero-text05">
            {props.text}
          </span>
          <h1 data-aos="fade-up" className="hero-text06">
            {props.heading}
          </h1>
          <Link href="/contact-form" data-aos="fade-down">
            <a className="hero-link button">
              <span>
                <span>Get Free Estimate</span>
                <br></br>
              </span>
            </a>
          </Link>
          <div className="hero-gallery">
            <div className="hero-container">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                data-aos="fade-left"
                className="hero-image"
              />
            </div>
            <div className="hero-container1">
              <div className="hero-container2">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  data-aos="fade-up"
                  className="hero-image1"
                />
              </div>
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                data-aos="fade-down"
                className="hero-image2"
              />
            </div>
            <div className="hero-container3">
              <div className="hero-container4">
                <img
                  alt={props.imageAlt3}
                  src={props.imageSrc3}
                  data-aos="fade-right"
                  className="hero-image3"
                />
              </div>
              <div className="hero-container5">
                <div className="hero-container6">
                  <img
                    alt={props.imageAlt4}
                    src={props.imageSrc4}
                    data-aos="fade-up"
                    className="hero-image4"
                  />
                </div>
                <div className="hero-container7">
                  <img
                    alt={props.imageAlt5}
                    src={props.imageSrc5}
                    data-aos="fade-right"
                    className="hero-image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            flex: -1;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .hero-max-width {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-text {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3.5em;
            font-style: normal;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .hero-text05 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 25px;
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .hero-text06 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3.5em;
            font-style: normal;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .hero-link {
            color: var(--dl-color-primary-darkblue);
            font-size: 35px;
            align-self: center;
            border-color: var(--dl-color-primary-darkblue);
            border-width: 2px;
            border-radius: 25px;
            text-decoration: none;
            background-color: var(--dl-color-primary-yellow);
          }
          .hero-gallery {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero-container {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-self: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding-top: 0px;
            border-radius: 10px;
            padding-bottom: 0px;
          }
          .hero-container1 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 0px;
          }
          .hero-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
          .hero-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-radius: 10px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-image3 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }
          .hero-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .hero-container6 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-image4 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }
          .hero-container7 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-image5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            padding-bottom: 0px;
          }
          @media (max-width: 1600px) {
            .hero-hero {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .hero-text {
              font-size: 4.5em;
            }
            .hero-image4 {
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 1200px) {
            .hero-hero {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .hero-max-width {
              max-width: auto;
            }
            .hero-text {
              font-size: 4.5em;
            }
            .hero-text06 {
              font-size: 4em;
            }
            .hero-link {
              width: auto;
              text-align: center;
            }
            .hero-image3 {
              height: auto;
            }
            .hero-image4 {
              width: 100%;
              margin-right: var(--dl-space-space-unit);
            }
            .hero-image5 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .hero-hero {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .hero-max-width {
              width: 100%;
              max-width: auto;
            }
            .hero-text {
              font-size: 4em;
            }
            .hero-text06 {
              font-size: 4em;
            }
            .hero-image {
              height: 100%;
            }
            .hero-image3 {
              height: auto;
            }
            .hero-image4 {
              width: 100%;
              margin-right: var(--dl-space-space-unit);
            }
            .hero-image5 {
              width: 100%;
              height: 100%;
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .hero-max-width {
              max-width: 100%;
            }
            .hero-text {
              font-size: 4em;
            }
            .hero-text06 {
              font-size: 4em;
            }
            .hero-gallery {
              width: 90%;
              align-self: center;
            }
            .hero-image3 {
              width: 100%;
              height: auto;
            }
            .hero-image4 {
              width: 100%;
              height: auto;
              margin-right: var(--dl-space-space-unit);
            }
            .hero-image5 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .hero-text {
              width: 100%;
              font-size: 4em;
            }
            .hero-text05 {
              font-size: 30px;
            }
            .hero-text06 {
              font-size: 4em;
            }
            .hero-gallery {
              display: flex;
            }
            .hero-container {
              margin: 0px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .hero-container1 {
              margin: 0px;
              padding: var(--dl-space-space-halfunit);
            }
            .hero-container2 {
              width: 100%;
              height: 50%;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .hero-image1 {
              width: 100%;
              height: 100%;
              margin-bottom: 0px;
            }
            .hero-image2 {
              width: 100%;
              height: 50%;
            }
            .hero-container4 {
              width: auto;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .hero-image3 {
              width: 100%;
              height: auto;
              margin-bottom: 0px;
            }
            .hero-container6 {
              width: 50%;
              height: auto;
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .hero-image4 {
              width: 100%;
              height: 100%;
              margin-right: 0px;
            }
            .hero-container7 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .hero-image5 {
              width: 100%;
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1616860744588-fcc95e7cc721?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3MzY1NTQ2Mw&ixlib=rb-4.0.3&w=400',
  imageAlt: 'image',
  imageSrc1:
    'https://images.unsplash.com/photo-1601084213767-04a4dba01dbb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM2NTU0NjM&ixlib=rb-4.0.3&w=400',
  imageSrc3:
    'https://images.unsplash.com/photo-1620641621506-5e8cc7cb5656?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3MzY1NTQ2Mw&ixlib=rb-4.0.3&w=700',
  imageAlt1: 'image',
  imageSrc5:
    'https://images.unsplash.com/photo-1525570665650-76bb26af503d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3MzY1NTQ2Mw&ixlib=rb-4.0.3&w=400',
  imageSrc2:
    'https://images.unsplash.com/photo-1623189615085-11a59bd4fbd2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM2NTU0NjM&ixlib=rb-4.0.3&w=400',
  imageSrc4:
    'https://images.unsplash.com/photo-1519999933293-fb5e79c3e9b3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM2NTU0NjM&ixlib=rb-4.0.3&w=400',
  imageAlt5: 'image',
  imageAlt3: 'image',
  heading: 'with years of experience',
  text: 'installing, replacing and repairing',
  imageAlt2: 'image',
  imageAlt4: 'image',
}

Hero.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt3: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt4: PropTypes.string,
}

export default Hero
