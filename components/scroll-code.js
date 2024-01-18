import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const ScrollCode = (props) => {
  return (
    <>
      <div className={`scroll-code-container ${props.rootClassName} `}>
        <div className="scroll-code-container1">
          <div className="scroll-code-container2">
            <Script
              html={`<style>
::-webkit-scrollbar{
        height: 10px;
        width: 10px;
        background: #000E4A;
    }
    ::-webkit-scrollbar-thumb:horizontal{
        background: #FAFF00;
        border-radius: 10px;
        border: 1px solid #000E4A;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #FAFF00;
    }
</style>


`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .scroll-code-container {
            display: flex;
            position: relative;
          }
          .scroll-code-container2 {
            display: contents;
          }

          @media (max-width: 479px) {
            .scroll-code-container1 {
              width: 100%;
            }
            .scroll-code-root-class-name5 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ScrollCode.defaultProps = {
  rootClassName: '',
}

ScrollCode.propTypes = {
  rootClassName: PropTypes.string,
}

export default ScrollCode
