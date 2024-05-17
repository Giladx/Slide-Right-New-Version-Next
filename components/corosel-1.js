import React from 'react'

import PropTypes from 'prop-types'

import Card from './card'

const Corosel1 = (props) => {
  return (
    <>
      <div className={`corosel-1-corosel items ${props.rootClassName} `}>
        <div className="corosel-1-container">
          <ul className="scrollmenu list">
            <li className="list-item item">
              <a href="https://slide-right.com/data-page/#certified.technicians">
                <Card
                  button="Technicians"
                  button1="Certified Technicians"
                  imageSrc="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxUZWNobmljaWFucyUyMHRlYW18ZW58MHx8fHwxNjczNzk2MTc5&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name6"
                  className="corosel-1-card-1"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a href="https://slide-right.com/data-page/#rollers.replacement">
                <Card
                  button="Replacement"
                  button1="Rollers Replacement"
                  imageSrc="https://images.unsplash.com/photo-1611818827790-b0767482076a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3Mzc5NjA4Nw&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name7"
                  className="corosel-1-card-2"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a href="https://slide-right.com/data-page/#sliding.screen.door.repair">
                <Card
                  button="Repair"
                  button1="Sliding Screen Door Repair"
                  imageSrc="https://images.unsplash.com/photo-1623161551727-54c918bdcec1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYwfHx0b29sc3xlbnwwfHx8fDE2NzM3OTYyNDU&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name8"
                  className="corosel-1-card-3"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a href="https://slide-right.com/data-page/#glass.replacement">
                <Card
                  button="Replacement"
                  button1="Glass Replacement"
                  imageSrc="https://images.unsplash.com/photo-1600862038484-9281bdfb372a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM3OTYwODc&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name9"
                  className="corosel-1-card-4"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a href="https://slide-right.com/data-page/#door.handle.repair.replacement">
                <Card
                  button="Replacement"
                  button1="Door Handle Repair / Replacement"
                  imageSrc="https://images.unsplash.com/photo-1534430198509-8a3091682aa8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUxfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM3OTYzMjQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name10"
                  className="corosel-1-card-5"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a href="https://slide-right.com/data-page/#sliding.glass.door.repair">
                <Card
                  button="Repair"
                  button1="Sliding Glass Door Repair"
                  imageSrc="https://images.unsplash.com/photo-1611288865035-d953889ce0aa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExMXx8dG9vbHN8ZW58MHx8fHwxNjczNzk2NDM0&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name11"
                  className="corosel-1-card-6"
                ></Card>
              </a>
            </li>
          </ul>
        </div>
        <div
          data-thq="slider"
          data-pagination="true"
          data-navigation="true"
          className="corosel-1-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="corosel-1-slider-slide swiper-slide"
            >
              <Card
                button="Technicians"
                button1="Certified Technicians"
                imageSrc="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxUZWNobmljaWFucyUyMHRlYW18ZW58MHx8fHwxNjczNzk2MTc5&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name31"
                className="corosel-1-card-11"
              ></Card>
              <Card
                button="Replacement"
                button1="Rollers Replacement"
                imageSrc="https://images.unsplash.com/photo-1611818827790-b0767482076a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3Mzc5NjA4Nw&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name36"
                className="corosel-1-card-21"
              ></Card>
              <Card
                button="Repair"
                button1="Sliding Screen Door Repair"
                imageSrc="https://images.unsplash.com/photo-1623161551727-54c918bdcec1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYwfHx0b29sc3xlbnwwfHx8fDE2NzM3OTYyNDU&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name35"
                className="corosel-1-card-31"
              ></Card>
              <Card
                button="Replacement"
                button1="Glass Replacement"
                imageSrc="https://images.unsplash.com/photo-1600862038484-9281bdfb372a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM3OTYwODc&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name34"
                className="corosel-1-card-41"
              ></Card>
              <Card
                button="Replacement"
                button1="Door Handle Repair / Replacement"
                imageSrc="https://images.unsplash.com/photo-1534430198509-8a3091682aa8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUxfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM3OTYzMjQ&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name33"
                className="corosel-1-card-51"
              ></Card>
              <Card
                button="Repair"
                button1="Sliding Glass Door Repair"
                imageSrc="https://images.unsplash.com/photo-1611288865035-d953889ce0aa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExMXx8dG9vbHN8ZW58MHx8fHwxNjczNzk2NDM0&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name32"
                className="corosel-1-card-61"
              ></Card>
            </div>
            <div
              data-thq="slider-slide"
              className="corosel-1-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="corosel-1-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="corosel-1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .corosel-1-corosel {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .corosel-1-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .corosel-1-card-1 {
            text-decoration: none;
          }
          .corosel-1-card-2 {
            text-decoration: none;
          }
          .corosel-1-card-3 {
            text-decoration: none;
          }
          .corosel-1-card-4 {
            text-decoration: none;
          }
          .corosel-1-card-5 {
            text-decoration: none;
          }
          .corosel-1-card-6 {
            text-decoration: none;
          }
          .corosel-1-slider {
            width: 100%;
            height: auto;
            display: inline-block;
          }
          .corosel-1-slider-slide {
            width: 100%;
            display: flex;
          }
          .corosel-1-card-11 {
            text-decoration: none;
          }
          .corosel-1-card-21 {
            text-decoration: none;
          }
          .corosel-1-card-31 {
            text-decoration: none;
          }
          .corosel-1-card-41 {
            text-decoration: none;
          }
          .corosel-1-card-51 {
            text-decoration: none;
          }
          .corosel-1-card-61 {
            text-decoration: none;
          }
          .corosel-1-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=1500');
          }
          .corosel-1-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=1500');
          }
          .corosel-1-slider-pagination {
            display: block;
          }

          .corosel-1-root-class-name1 {
            width: auto;
            align-self: center;
          }
          @media (max-width: 991px) {
            .corosel-1-corosel {
              width: 95%;
              max-width: auto;
              margin-left: auto;
              margin-right: auto;
            }
          }
          @media (max-width: 767px) {
            .corosel-1-corosel {
              width: 95%;
              max-width: auto;
            }
            .corosel-1-root-class-name {
              max-width: auto;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .corosel-1-corosel {
              width: 95%;
              max-width: auto;
              flex-direction: row;
              justify-content: flex-start;
            }
            .corosel-1-root-class-name {
              max-width: auto;
            }
            .corosel-1-root-class-name1 {
              width: 100%;
              display: none;
              align-self: center;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Corosel1.defaultProps = {
  rootClassName: '',
  rootClassName1: '',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1517984922331-8dbaa8ffa9c1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxmcmVlfGVufDB8fHx8MTY3MzczMzkyMQ&ixlib=rb-4.0.3&w=200',
  button: 'Free',
  button1: 'Door Handle Repair / Replacement',
}

Corosel1.propTypes = {
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Corosel1
