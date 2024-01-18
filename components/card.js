import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <figure
        data-aos="fade"
        data-aos-duration="1000"
        className={`card-card item ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="lazy"
          className="card-image"
        />
        <button className="card-button button">{props.button}</button>
        <button className="card-button1 button">{props.button1}</button>
      </figure>
      <style jsx>
        {`
          .card-card {
            flex: 0 0 auto;
            width: 30vh;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            overflow: hidden;
            position: relative;
            max-width: 30vh;
            min-width: auto;
            margin-top: var(--dl-space-space-unit);
            max-height: 60vh;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .card-image {
            width: 100%;
            height: 15vh;
            max-width: auto;
            min-width: auto;
            align-self: center;
            max-height: auto;
            min-height: auto;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card-button {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            border-color: var(--dl-color-primary-darkblue);
            border-width: 1px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            background-color: var(--dl-color-primary-yellow);
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .card-button1 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            height: 150px;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            white-space: normal;
            border-color: var(--dl-color-primary-yellow);
            border-style: solid;
            border-radius: var(--dl-radius-radius-radius8);
            text-transform: uppercase;
            background-color: var(--dl-color-primary-yellow);
          }
          .card-root-class-name {
            right: -246px;
            width: 100%;
            bottom: -32px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name1 {
            top: 1px;
            left: 17px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: 100%;
          }
          .card-root-class-name2 {
            top: 1px;
            left: 721px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name3 {
            left: 1072px;
            width: 100%;
            bottom: -27px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name4 {
            top: -2px;
            right: 118px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name5 {
            top: -3px;
            right: -231px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name6 {
            top: 1px;
            left: 17px;
            position: static;
            max-width: auto;
          }
          .card-root-class-name7 {
            top: 1px;
            left: 395px;
            position: static;
          }
          .card-root-class-name8 {
            top: 1px;
            left: 773px;
            position: static;
          }
          .card-root-class-name9 {
            top: 1px;
            right: 462px;
            position: static;
          }
          .card-root-class-name10 {
            top: 1px;
            right: 84px;
            position: static;
          }
          .card-root-class-name11 {
            top: 1px;
            right: -294px;
            position: static;
          }

          .card-root-class-name13 {
            top: 1px;
            left: 17px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: 100%;
          }
          .card-root-class-name14 {
            right: -246px;
            width: 100%;
            bottom: -32px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name15 {
            top: 1px;
            left: 721px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name16 {
            left: 1072px;
            width: 100%;
            bottom: -27px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name17 {
            top: -2px;
            right: 118px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name18 {
            top: -3px;
            right: -231px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name19 {
            top: 1px;
            left: 17px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: 100%;
          }
          .card-root-class-name20 {
            right: -246px;
            width: 100%;
            bottom: -32px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name21 {
            top: 1px;
            left: 721px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name22 {
            left: 1072px;
            width: 100%;
            bottom: -27px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name23 {
            top: -2px;
            right: 118px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name24 {
            top: -3px;
            right: -231px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name25 {
            top: 1px;
            left: 17px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: 100%;
          }
          .card-root-class-name26 {
            right: -246px;
            width: 100%;
            bottom: -32px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name27 {
            top: 1px;
            left: 721px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name28 {
            left: 1072px;
            width: 100%;
            bottom: -27px;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name29 {
            top: -2px;
            right: 118px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          .card-root-class-name30 {
            top: -3px;
            right: -231px;
            width: 100%;
            position: static;
            max-width: auto;
            min-width: auto;
            max-height: auto;
          }
          @media (max-width: 1200px) {
            .card-card {
              width: 30vh;
              max-width: 30vh;
            }
          }
          @media (max-width: 991px) {
            .card-root-class-name {
              max-width: auto;
              min-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name1 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name2 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name3 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name4 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name5 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name6 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name7 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name8 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name9 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name10 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name11 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name13 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name14 {
              max-width: auto;
              min-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name15 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name16 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name17 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name18 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name19 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name20 {
              max-width: auto;
              min-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name21 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name22 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name23 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name24 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name25 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name26 {
              max-width: auto;
              min-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name27 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name28 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name29 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
            .card-root-class-name30 {
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
          }
          @media (max-width: 767px) {
            .card-card {
              max-width: auto;
            }
            .card-root-class-name1 {
              max-width: auto;
            }
            .card-root-class-name2 {
              max-width: auto;
            }
            .card-root-class-name3 {
              max-width: auto;
            }
            .card-root-class-name4 {
              max-width: auto;
            }
            .card-root-class-name5 {
              max-width: auto;
            }
            .card-root-class-name6 {
              max-width: auto;
            }
            .card-root-class-name7 {
              max-width: auto;
            }
            .card-root-class-name8 {
              max-width: auto;
            }
            .card-root-class-name9 {
              max-width: auto;
            }
            .card-root-class-name10 {
              max-width: auto;
            }
            .card-root-class-name11 {
              max-width: auto;
            }
            .card-root-class-name13 {
              max-width: auto;
            }
            .card-root-class-name15 {
              max-width: auto;
            }
            .card-root-class-name16 {
              max-width: auto;
            }
            .card-root-class-name17 {
              max-width: auto;
            }
            .card-root-class-name18 {
              max-width: auto;
            }
            .card-root-class-name19 {
              max-width: auto;
            }
            .card-root-class-name21 {
              max-width: auto;
            }
            .card-root-class-name22 {
              max-width: auto;
            }
            .card-root-class-name23 {
              max-width: auto;
            }
            .card-root-class-name24 {
              max-width: auto;
            }
            .card-root-class-name25 {
              max-width: auto;
            }
            .card-root-class-name27 {
              max-width: auto;
            }
            .card-root-class-name28 {
              max-width: auto;
            }
            .card-root-class-name29 {
              max-width: auto;
            }
            .card-root-class-name30 {
              max-width: auto;
            }
          }
          @media (max-width: 479px) {
            .card-card {
              flex-wrap: wrap;
              max-width: auto;
            }
            .card-root-class-name {
              min-width: auto;
            }
            .card-root-class-name1 {
              min-width: auto;
            }
            .card-root-class-name2 {
              min-width: auto;
            }
            .card-root-class-name3 {
              min-width: auto;
            }
            .card-root-class-name4 {
              min-width: auto;
            }
            .card-root-class-name5 {
              min-width: auto;
            }
            .card-root-class-name6 {
              width: 100%;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .card-root-class-name7 {
              width: 100%;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .card-root-class-name8 {
              width: 100%;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .card-root-class-name9 {
              width: 100%;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .card-root-class-name10 {
              width: 100%;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .card-root-class-name11 {
              width: 100%;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .card-root-class-name13 {
              min-width: auto;
            }
            .card-root-class-name14 {
              min-width: auto;
            }
            .card-root-class-name15 {
              min-width: auto;
            }
            .card-root-class-name16 {
              min-width: auto;
            }
            .card-root-class-name17 {
              min-width: auto;
            }
            .card-root-class-name18 {
              min-width: auto;
            }
            .card-root-class-name19 {
              min-width: auto;
            }
            .card-root-class-name20 {
              min-width: auto;
            }
            .card-root-class-name21 {
              min-width: auto;
            }
            .card-root-class-name22 {
              min-width: auto;
            }
            .card-root-class-name23 {
              min-width: auto;
            }
            .card-root-class-name24 {
              min-width: auto;
            }
            .card-root-class-name25 {
              min-width: auto;
            }
            .card-root-class-name26 {
              min-width: auto;
            }
            .card-root-class-name27 {
              min-width: auto;
            }
            .card-root-class-name28 {
              min-width: auto;
            }
            .card-root-class-name29 {
              min-width: auto;
            }
            .card-root-class-name30 {
              min-width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  imageAlt: 'image',
  button1: 'Door Handle Repair / Replacement',
  button: 'Free',
  imageSrc:
    'https://images.unsplash.com/photo-1517984922331-8dbaa8ffa9c1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxmcmVlfGVufDB8fHx8MTY3MzczMzkyMQ&ixlib=rb-4.0.3&w=200',
  rootClassName: '',
}

Card.propTypes = {
  imageAlt: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Card
