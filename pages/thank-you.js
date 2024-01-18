import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import ScrollCode from '../components/scroll-code'
import FooterLight from '../components/footer-light'

const ThankYou = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="thank-you-container">
        <Head>
          <title>Thank-You - Slide Right</title>
          <meta
            name="description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta property="og:title" content="Thank-You - Slide Right" />
          <meta
            property="og:description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7f5c1ac9-3363-4b83-a9f4-e49e32493f11/172d04ad-cc77-433d-bf17-c45927f084b9?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="header-root-class-name4"></Header>
        <div>
          <div className="thank-you-container2">
            <Script
              html={`<script>
  var scripthead = document.createElement('scripthead');
  scripthead.innerHTML = '<script>gtag('event', 'conversion', {'send_to': 'AW-10967824856/cW4NCKn2-7AYENjz7u0o'});<script>';
  document.Head.appendChild(scripthead);
</script>"`}
            ></Script>
          </div>
        </div>
        <ScrollCode rootClassName="scroll-code-root-class-name"></ScrollCode>
        <div className="thank-you-main">
          <h1 data-aos="fade" className="thank-you-text">
            Thank You!
          </h1>
          <div data-aos="fade" className="thank-you-div">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_niyfyoqs.json"
              loop
              speed="1"
              autoplay
              data-aos="fade"
              background="transparent"
            ></lottie-player>
          </div>
          <h1 data-aos="fade" className="thank-you-text1">
            Your submission has been received!
          </h1>
          <Link href="/" data-aos="fade">
            <a className="thank-you-link button">
              <span>
                <span>Back to Home Page</span>
                <br></br>
              </span>
            </a>
          </Link>
          <div className="thank-you-container3">
            <div className="thank-you-container4">
              <Script
                html={`<script>
    // Using regular methods.
     function redirect_Page () {
        var tID = setTimeout(function () {
            window.location.href = "https://slide-right.com/";
            window.clearTimeout(tID);		// clear time out.
        }, 5000);
    } 
</script>
`}
              ></Script>
            </div>
          </div>
          <h1 data-aos="fade" className="thank-you-text5">
            You Will Be Redirect
          </h1>
        </div>
        <FooterLight rootClassName="footer-light-root-class-name4"></FooterLight>
      </div>
      <style jsx>
        {`
          .thank-you-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .thank-you-container2 {
            display: contents;
          }
          .thank-you-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .thank-you-text {
            color: var(--dl-color-primary-darkblue);
            font-size: 3em;
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .thank-you-div {
            width: 100%;
            height: 346px;
          }
          .thank-you-text1 {
            color: var(--dl-color-primary-darkblue);
            font-size: 3em;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .thank-you-link {
            color: var(--dl-color-primary-darkblue);
            font-size: 2em;
            border-color: var(--dl-color-primary-darkblue);
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
            background-color: var(--dl-color-primary-yellow);
          }
          .thank-you-container3 {
            width: 622px;
            height: 94px;
          }
          .thank-you-container4 {
            display: contents;
          }
          .thank-you-text5 {
            color: var(--dl-color-primary-darkblue);
            display: none;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          @media (max-width: 767px) {
            .thank-you-text1 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .thank-you-text {
              font-size: 2.5em;
            }
            .thank-you-div {
              height: 300px;
            }
            .thank-you-text1 {
              width: 100%;
              font-size: 2em;
              text-align: center;
            }
            .thank-you-link {
              font-size: 2em;
              border-radius: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ThankYou
