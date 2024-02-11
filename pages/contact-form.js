import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import ScrollCode from '../components/scroll-code'

const ContactForm = (props) => {
  return (
    <>
      <div className="contact-form-container">
        <Head>
          <title>Contact-Form - Slide Right</title>
          <meta
            name="description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta property="og:title" content="Contact-Form - Slide Right" />
          <meta
            property="og:description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7f5c1ac9-3363-4b83-a9f4-e49e32493f11/172d04ad-cc77-433d-bf17-c45927f084b9?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="header-root-class-name6"></Header>
        <ScrollCode rootClassName="scroll-code-root-class-name3"></ScrollCode>
        <div className="contact-form-container1">
          <div className="contact-form-container2">
            <Script
              html={`<script type="text/javascript" src="https://form.jotform.com/jsform/222573661896064"></script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-form-container1 {
            width: 100%;
            height: 100vh;
          }
          .contact-form-container2 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ContactForm
