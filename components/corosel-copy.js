import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Card from './card'

const CoroselCopy = (props) => {
  return (
    <>
      <div className={`corosel-copy-corosel ${props.rootClassName} `}>
        <div>
          <div className="corosel-copy-container1">
            <Script
              html={`<style>
ul.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

ul.scrollmenu li {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

ul.scrollmenu li:hover {
  cursor: pointer;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="corosel-copy-splidetrack">
          <ul className="scrollmenu list corosel-copy-ul">
            <li className="list-item item corosel-copy-li">
              <a
                href="https://slide-right.com/data-page/#certified.technicians"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Card
                  button="Technicians"
                  button1="Certified Technicians"
                  imageSrc="https://images.unsplash.com/photo-1627899093722-e8ad13e6d1c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTcxMDA&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name19"
                  className="corosel-copy-card-1"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a
                href="https://slide-right.com/data-page/#rollers.replacement"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Card
                  button="Replacement"
                  button1="Rollers Replacement"
                  imageSrc="https://images.unsplash.com/photo-1562494512-f47c102f13d4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg5fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTg4Mjk&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name20"
                  className="corosel-copy-card-2"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a
                href="https://slide-right.com/data-page/#sliding.screen.door.repair"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Card
                  button="Repair"
                  button1="Sliding Screen Door Repair"
                  imageSrc="https://images.unsplash.com/photo-1554355646-88098c10018a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDgzfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzQzMTg4Mjk&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name21"
                  className="corosel-copy-card-3"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a
                href="https://slide-right.com/data-page/#glass.replacement"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Card
                  button="Replacement"
                  button1="Glass Replacement"
                  imageSrc="https://images.unsplash.com/photo-1576152793788-1e96e8074ac4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyM3x8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDI0&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name22"
                  className="corosel-copy-card-4"
                ></Card>
              </a>
            </li>
            <li className="list-item item">
              <a href="https://slide-right.com/data-page/#door.handle.repair.replacement">
                <Card
                  button="Replacement"
                  button1="Door Handle Repair / Replacement"
                  imageSrc="https://images.unsplash.com/photo-1619436014242-58f72c5c4c19?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI1Nnx8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDU1&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name23"
                  className="corosel-copy-card-5"
                ></Card>
              </a>
            </li>
            <li className="list-item item corosel-copy-li5">
              <a href="https://slide-right.com/data-page/#sliding.glass.door.repair">
                <Card
                  button="Repair"
                  button1="Sliding Glass Door Repair"
                  imageSrc="https://images.unsplash.com/photo-1635540635634-ea338d99b96e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2Mnx8c2xpZGluZyUyMGRvb3J8ZW58MHx8fHwxNjc0MzE5MDU1&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="card-root-class-name24"
                  className="corosel-copy-card-6"
                ></Card>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .corosel-copy-container1 {
            display: contents;
          }
          .corosel-copy-splidetrack {
            position: relative;
          }
          .corosel-copy-card-1 {
            text-decoration: none;
          }
          .corosel-copy-card-2 {
            text-decoration: none;
          }
          .corosel-copy-card-3 {
            text-decoration: none;
          }
          .corosel-copy-card-4 {
            text-decoration: none;
          }
          .corosel-copy-card-5 {
            text-decoration: none;
          }
          .corosel-copy-card-6 {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .corosel-copy-corosel {
              width: 100%;
            }
            .corosel-copy-ul {
              width: 100%;
            }
            .corosel-copy-li {
              width: auto;
            }
            .corosel-copy-li5 {
              list-style-type: disc;
              list-style-image: none;
              list-style-position: outside;
            }
          }
          @media (max-width: 991px) {
            .corosel-copy-ul {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CoroselCopy.defaultProps = {
  rootClassName: '',
}

CoroselCopy.propTypes = {
  rootClassName: PropTypes.string,
}

export default CoroselCopy
