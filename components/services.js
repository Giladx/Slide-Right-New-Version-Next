import React from 'react'

import Corosel from './corosel'
import Corosel1 from './corosel-1'

const Services = (props) => {
  return (
    <>
      <div className="services-services">
        <h1 data-aos="fade-down" className="services-text">
          <span>OUR SERVICES</span>
          <br></br>
        </h1>
        <div className="services-windmill">
          <Corosel rootClassName="corosel-root-class-name"></Corosel>
          <Corosel1 rootClassName="corosel1-root-class-name"></Corosel1>
        </div>
      </div>
      <style jsx>
        {`
          .services-services {
            flex: -1;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: var(--dl-color-primary-yellow);
          }
          .services-text {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3em;
            align-self: center;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .services-windmill {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .services-services {
              margin-left: auto;
              margin-right: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .services-services {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .services-services {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
