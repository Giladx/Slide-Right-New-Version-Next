import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Card from './card'

const Corosel = (props) => {
  return (
    <>
      <div id="carousel" className={`corosel-corosel ${props.rootClassName} `}>
        <div className="corosel-container">
          <div className="corosel-container1">
            <Script
              html={`<style>
ul.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

ul.scrollmenu li {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 14px;
}

ul.scrollmenu li:hover {
  cursor: pointer;
}
</style>

<script>
const slider = document.querySelector('.scrollmenu');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
</script>`}
            ></Script>
          </div>
        </div>
        <div className="corosel-splidetrack">
          <a href="https://slide-right.com/data-page/#sliding.glass.door.repair">
            <Card
              button="Repair"
              button1="Sliding Glass Door Repair"
              imageSrc="https://images.unsplash.com/photo-1525570665650-76bb26af503d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3NDMxNzAwNw&amp;ixlib=rb-4.0.3&amp;h=200"
              rootClassName="card-root-class-name"
              className="corosel-card-2"
            ></Card>
          </a>
          <ul className="scrollmenu list corosel-ul">
            <li className="corosel-li list-item item">
              <a href="https://slide-right.com/data-page/#free.estimate">
                <Card
                  button1="Free Estimate"
                  imageSrc="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3NDMxNzAwNw&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name1"
                  className="corosel-card-1"
                ></Card>
              </a>
            </li>
            <li className="corosel-li01 list-item item"></li>
            <li className="corosel-li02 list-item item">
              <a href="https://slide-right.com/data-page/#sliding.glass.door.track.repair">
                <Card
                  button="Repair"
                  button1="Sliding Glass Door Track Repair"
                  imageSrc="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3NDMxNzAwNw&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name2"
                  className="corosel-card-3"
                ></Card>
              </a>
            </li>
            <li className="corosel-li03 list-item item">
              <a href="https://slide-right.com/data-page/#door.handle.repair.replacement">
                <Card
                  button="Repair"
                  button1="Door Handle Repair / Replacement"
                  imageSrc="https://images.unsplash.com/photo-1580953546435-96ba8e1415da?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcwMDc&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name3"
                  className="corosel-card-4"
                ></Card>
              </a>
            </li>
            <li className="corosel-li04 list-item item">
              <a href="https://slide-right.com/data-page/#sliding.glass.door.replacement">
                <Card
                  button="Replacement"
                  button1="Sliding Glass Door Replacement"
                  imageSrc="https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcwNjU&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name4"
                  className="corosel-card-5"
                ></Card>
              </a>
            </li>
            <li className="corosel-li05 list-item item">
              <a href="https://slide-right.com/data-page/#glass.replacement">
                <Card
                  button="Replacement"
                  button1="Glass Replacement"
                  imageSrc="https://images.unsplash.com/photo-1600849201385-980094c9037a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxnbGFzcyUyMGRvb3J8ZW58MHx8fHwxNjc0MTIxOTM2&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name5"
                  className="corosel-card-6"
                ></Card>
              </a>
            </li>
            <li className="corosel-li06 list-item item">
              <a href="https://slide-right.com/data-page/#certified.technicians">
                <Card
                  button="Technicians"
                  button1="Certified Technicians"
                  imageSrc="https://images.unsplash.com/photo-1627899093722-e8ad13e6d1c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcxMDA&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name25"
                  className="corosel-card-7"
                ></Card>
              </a>
            </li>
            <li className="corosel-li07 list-item item">
              <a href="https://slide-right.com/data-page/#rollers.replacement">
                <Card
                  button="Replacement"
                  button1="Rollers Replacement"
                  imageSrc="https://images.unsplash.com/photo-1562494512-f47c102f13d4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg5fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTg4Mjk&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name26"
                  className="corosel-card-8"
                ></Card>
              </a>
            </li>
            <li className="corosel-li08 list-item item">
              <a href="https://slide-right.com/data-page/#sliding.screen.door.repair">
                <Card
                  button="Repair"
                  button1="Sliding Screen Door Repair"
                  imageSrc="https://images.unsplash.com/photo-1554355646-88098c10018a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDgzfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTg4Mjk&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name27"
                  className="corosel-card-9"
                ></Card>
              </a>
            </li>
            <li className="corosel-li09 list-item item">
              <a href="https://slide-right.com/data-page/#glass.replacement">
                <Card
                  button="Replacement"
                  button1="Glass Replacement"
                  imageSrc="https://images.unsplash.com/photo-1576152793788-1e96e8074ac4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyM3x8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDI0&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name28"
                  className="corosel-card-10"
                ></Card>
              </a>
            </li>
            <li className="corosel-li10 list-item item">
              <a href="https://slide-right.com/data-page/#door.handle.repair.replacement">
                <Card
                  button="Replacement"
                  button1="Door Handle Repair / Replacement"
                  imageSrc="https://images.unsplash.com/photo-1619436014242-58f72c5c4c19?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI1Nnx8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDU1&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="rootClassName29"
                ></Card>
              </a>
            </li>
            <li className="corosel-li11 list-item item">
              <a href="https://slide-right.com/data-page/#sliding.glass.door.repair">
                <Card
                  button="Repair"
                  button1="Sliding Glass Door Repair"
                  imageSrc="https://images.unsplash.com/photo-1635540635634-ea338d99b96e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2Mnx8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDU1&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name30"
                  className="corosel-card-12"
                ></Card>
              </a>
            </li>
          </ul>
        </div>
        <div
          data-thq="slider"
          data-pagination="true"
          data-navigation="true"
          data-autoplay="true"
          data-loop="false"
          data-pause-autoplay-on-mouse-enter="true"
          className="corosel-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="corosel-slider-slide swiper-slide"
            >
              <Card
                button1="Free Estimate"
                imageSrc="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3NDMxNzAwNw&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-card-root-class-name38"
                className="corosel-card-11 corosel-card-11"
              ></Card>
              <Card
                button="Repair"
                button1="Sliding Glass Door Repair"
                imageSrc="https://images.unsplash.com/photo-1525570665650-76bb26af503d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3NDMxNzAwNw&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name37"
                className="corosel-card-21"
              ></Card>
              <Card
                button="Repair"
                button1="Sliding Glass Door Track Repair"
                imageSrc="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3NDMxNzAwNw&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name39"
                className="corosel-card-31"
              ></Card>
              <Card
                button="Repair"
                button1="Door Handle Repair / Replacement"
                imageSrc="https://images.unsplash.com/photo-1580953546435-96ba8e1415da?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcwMDc&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name40"
                className="corosel-card-41"
              ></Card>
              <Card
                button="Replacement"
                button1="Sliding Glass Door Replacement"
                imageSrc="https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcwNjU&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name41"
                className="corosel-card-51"
              ></Card>
              <Card
                button="Replacement"
                button1="Glass Replacement"
                imageSrc="https://images.unsplash.com/photo-1600849201385-980094c9037a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxnbGFzcyUyMGRvb3J8ZW58MHx8fHwxNjc0MTIxOTM2&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name42"
                className="corosel-card-61"
              ></Card>
              <Card
                button="Technicians"
                button1="Certified Technicians"
                imageSrc="https://images.unsplash.com/photo-1627899093722-e8ad13e6d1c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcxMDA&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name43"
                className="corosel-card-71"
              ></Card>
              <Card
                button="Replacement"
                button1="Rollers Replacement"
                imageSrc="https://images.unsplash.com/photo-1562494512-f47c102f13d4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg5fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTg4Mjk&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name44"
                className="corosel-card-81"
              ></Card>
              <Card
                button="Repair"
                button1="Sliding Screen Door Repair"
                imageSrc="https://images.unsplash.com/photo-1554355646-88098c10018a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDgzfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTg4Mjk&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name45"
                className="corosel-card-91"
              ></Card>
              <Card
                button="Replacement"
                button1="Glass Replacement"
                imageSrc="https://images.unsplash.com/photo-1576152793788-1e96e8074ac4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyM3x8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDI0&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name46"
                className="corosel-card-101"
              ></Card>
              <Card
                button="Replacement"
                button1="Door Handle Repair / Replacement"
                imageSrc="https://images.unsplash.com/photo-1619436014242-58f72c5c4c19?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI1Nnx8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDU1&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name47"
                className="corosel-card-111"
              ></Card>
              <Card
                button="Repair"
                button1="Sliding Glass Door Repair"
                imageSrc="https://images.unsplash.com/photo-1635540635634-ea338d99b96e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2Mnx8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDU1&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name48"
                className="corosel-card-121"
              ></Card>
              <Card
                button="Repair"
                button1="Door Handle Repair / Replacement"
                imageSrc="https://images.unsplash.com/photo-1580953546435-96ba8e1415da?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcwMDc&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name49"
                className="corosel-card-42"
              ></Card>
              <Card
                button="Replacement"
                button1="Glass Replacement"
                imageSrc="https://images.unsplash.com/photo-1600849201385-980094c9037a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxnbGFzcyUyMGRvb3J8ZW58MHx8fHwxNjc0MTIxOTM2&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="card-root-class-name50"
                className="corosel-card-62"
              ></Card>
            </div>
            <div
              data-thq="slider-slide"
              className="corosel-slider-slide1 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="corosel-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
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
          .corosel-corosel {
            width: 100%;
            white-space: nowrap;
          }
          .corosel-container {
            display: none;
          }
          .corosel-container1 {
            display: contents;
          }
          .corosel-splidetrack {
            width: 100%;
            display: none;
            overflow: hidden;
            position: relative;
          }
          .corosel-card-2 {
            text-decoration: none;
          }
          .corosel-li {
            width: auto;
          }
          .corosel-card-1 {
            text-decoration: none;
          }
          .corosel-li01 {
            width: auto;
          }
          .corosel-li02 {
            width: auto;
          }
          .corosel-card-3 {
            text-decoration: none;
          }
          .corosel-li03 {
            width: auto;
          }
          .corosel-card-4 {
            text-decoration: none;
          }
          .corosel-li04 {
            width: auto;
          }
          .corosel-card-5 {
            text-decoration: none;
          }
          .corosel-li05 {
            width: auto;
          }
          .corosel-card-6 {
            text-decoration: none;
          }
          .corosel-li06 {
            width: auto;
          }
          .corosel-card-7 {
            text-decoration: none;
          }
          .corosel-li07 {
            width: auto;
          }
          .corosel-card-8 {
            text-decoration: none;
          }
          .corosel-li08 {
            width: auto;
          }
          .corosel-card-9 {
            text-decoration: none;
          }
          .corosel-li09 {
            width: auto;
          }
          .corosel-card-10 {
            text-decoration: none;
          }
          .corosel-li10 {
            width: auto;
          }
          .corosel-card-11 {
            text-decoration: none;
          }
          .corosel-li11 {
            width: auto;
          }
          .corosel-card-12 {
            text-decoration: none;
          }
          .corosel-slider {
            width: 100%;
            height: auto;
            display: inline-block;
          }
          .corosel-slider-slide {
            display: flex;
          }
          .corosel-card-11 {
            text-decoration: none;
          }
          .corosel-card-21 {
            text-decoration: none;
          }
          .corosel-card-31 {
            text-decoration: none;
          }
          .corosel-card-41 {
            text-decoration: none;
          }
          .corosel-card-51 {
            text-decoration: none;
          }
          .corosel-card-61 {
            text-decoration: none;
          }
          .corosel-card-71 {
            text-decoration: none;
          }
          .corosel-card-81 {
            text-decoration: none;
          }
          .corosel-card-91 {
            text-decoration: none;
          }
          .corosel-card-101 {
            text-decoration: none;
          }
          .corosel-card-111 {
            text-decoration: none;
          }
          .corosel-card-121 {
            text-decoration: none;
          }
          .corosel-card-42 {
            text-decoration: none;
          }
          .corosel-card-62 {
            text-decoration: none;
          }
          .corosel-slider-slide1 {
            display: flex;
          }
          .corosel-slider-pagination {
            display: block;
          }

          .corosel-root-class-name2 {
            width: auto;
            align-self: center;
            margin-left: 0x;
            margin-right: 0x;
          }
          .corosel-root-class-name3 {
            width: auto;
          }
          @media (max-width: 1200px) {
            .corosel-corosel {
              width: auto;
            }
            .corosel-ul {
              width: auto;
            }
            .corosel-li {
              width: auto;
            }
            .corosel-li01 {
              width: auto;
            }
            .corosel-li02 {
              width: auto;
            }
            .corosel-li03 {
              width: auto;
            }
            .corosel-li04 {
              width: auto;
            }
            .corosel-li05 {
              width: auto;
            }
            .corosel-li06 {
              width: auto;
            }
            .corosel-li07 {
              width: auto;
            }
            .corosel-li08 {
              width: auto;
            }
            .corosel-li09 {
              width: auto;
            }
            .corosel-li10 {
              width: auto;
            }
            .corosel-li11 {
              width: auto;
            }
            .corosel-root-class-name3 {
              width: auto;
            }
          }
          @media (max-width: 991px) {
            .corosel-corosel {
              width: auto;
            }
            .corosel-ul {
              width: auto;
            }
            .corosel-root-class-name {
              max-width: auto;
            }
          }
          @media (max-width: 767px) {
            .corosel-root-class-name {
              max-width: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .corosel-root-class-name {
              max-width: auto;
            }
            .corosel-root-class-name2 {
              width: 100%;
              display: none;
              max-width: 100%;
              align-self: center;
              margin-left: 0px;
              margin-right: 0px;
            }
            .corosel-root-class-name3 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Corosel.defaultProps = {
  rootClassName: '',
  rootClassName1: '',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1517984922331-8dbaa8ffa9c1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxmcmVlfGVufDB8fHx8MTY3MzczMzkyMQ&ixlib=rb-4.0.3&w=200',
  button: 'Free',
  button1: 'Door Handle Repair / Replacement',
}

Corosel.propTypes = {
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Corosel
