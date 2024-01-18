import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import ScrollCode from '../components/scroll-code'
import Corosel from '../components/corosel'
import FooterLight from '../components/footer-light'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Slide Right</title>
          <meta
            name="description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta property="og:title" content="Slide Right" />
          <meta
            property="og:description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7f5c1ac9-3363-4b83-a9f4-e49e32493f11/172d04ad-cc77-433d-bf17-c45927f084b9?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="header-root-class-name5"></Header>
        <ScrollCode rootClassName="scroll-code-root-class-name5"></ScrollCode>
        <div className="home-tops">
          <div className="home-hero">
            <div className="home-col">
              <h1 data-aos="fade-up" className="home-text">
                <span>We are a full-service sliding glass</span>
                <br></br>
                <span> door repair company</span>
                <br></br>
              </h1>
              <span data-aos="fade" className="home-text05">
                installing, replacing and repairing
              </span>
            </div>
          </div>
          <div className="home-gallery">
            <div className="home-container01">
              <div className="home-gallery1">
                <div className="home-container02">
                  <img
                    alt="image"
                    src="/photo-1616860744588-fcc95e7cc721-400w.webp"
                    data-aos="fade-left"
                    className="home-image"
                  />
                </div>
                <div className="home-container03">
                  <div className="home-container04">
                    <img
                      alt="image"
                      src="/photo-1601084213767-04a4dba01dbb-400w.webp"
                      data-aos="fade-up"
                      className="home-image1"
                    />
                  </div>
                  <img
                    alt="image"
                    src="/photo-1519999933293-fb5e79c3e9b3-400w.webp"
                    data-aos="fade-down"
                    className="home-image2"
                  />
                </div>
                <div className="home-container05">
                  <div className="home-container06">
                    <img
                      alt="image"
                      src="/photo-1620641621506-5e8cc7cb5656-800w.webp"
                      data-aos="fade-right"
                      className="home-image3"
                    />
                  </div>
                  <div className="home-container07">
                    <div className="home-container08">
                      <img
                        alt="image"
                        src="/photo-1623189615085-11a59bd4fbd2-800w.webp"
                        data-aos="fade-up"
                        className="home-image4"
                      />
                    </div>
                    <div className="home-container09">
                      <img
                        alt="image"
                        src="/photo-1525570665650-76bb26af503d-800w.webp"
                        data-aos="fade-right"
                        className="home-image5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="home-text06">OUR SERVICES</h1>
          <div className="home-service">
            <Corosel rootClassName="corosel-root-class-name3"></Corosel>
          </div>
        </div>
        <div className="home-portofolio">
          <h1 data-aos="fade-down" className="home-text07">
            <span>OUR work</span>
            <br></br>
          </h1>
          <span data-aos="fade" className="home-text10">
            <span>
              Slide Right, Door Repair Services also ensure that in the event
              that your sliding glass door breaks or fails to open and close
              properly, we will provide a fast repair service with our decades
              of experience. For more information about our sliding glass door
              installation and repair services
            </span>
            <br></br>
            <br></br>
          </span>
          <span data-aos="fade" className="home-text14">
            Our expert glass technicians have the experience and knowledge to
            install quality glass and extend the life of your new sliding glass
            patio doors. Our glass experts can also design and install custom
            glass sliding dog doors. Sliding Door Express technicians are
            professionally trained, licensed, and insured, so you can rest
            assured that the installation of your new sliding door or any other
            replacement parts you may need has been handled properly.
          </span>
          <a href="tel:+17862514754" data-aos="fade" className="home-link">
            <span className="home-text15">
              <span>CALL NOW!</span>
              <br></br>
              <span>786-251-4754</span>
              <br></br>
            </span>
          </a>
        </div>
        <div className="home-about">
          <div className="home-max-width">
            <div className="home-text-block">
              <span data-aos="fade" className="home-text20">
                about us
              </span>
              <h1 data-aos="fade-left" className="home-text21">
                Why choose us?
              </h1>
              <span data-aos="fade-right" className="home-text22">
                We are a full-service glass sliding doors professionals with
                organized office and plenty of in-house talent.
              </span>
              <div data-aos="fade" className="home-checklist">
                <svg
                  viewBox="0 0 1024 1024"
                  data-aos="fade"
                  className="home-icon"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span data-aos="fade" className="home-text23">
                  FREE Estimate
                </span>
              </div>
              <div data-aos="fade" className="home-checklist1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-aos="fade"
                  className="home-icon02"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="home-text24">
                  <span>Certified Technicians</span>
                  <br></br>
                </span>
              </div>
              <div data-aos="fade" className="home-checklist2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-aos="fade"
                  className="home-icon04"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span data-aos="fade" className="home-text27">
                  Quality services and support all time
                </span>
              </div>
              <div data-aos="fade" className="home-checklist3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-aos="fade"
                  className="home-icon06"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span data-aos="fade" className="home-text28">
                  Over 10 years in the business
                </span>
              </div>
              <div data-aos="fade" className="home-checklist4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-aos="fade"
                  className="home-icon08"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span data-aos="fade" className="home-text29">
                  Future-Proofing Projects
                </span>
              </div>
              <div data-aos="fade" className="home-checklist5">
                <svg
                  viewBox="0 0 1024 1024"
                  data-aos="fade"
                  className="home-icon10"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span data-aos="fade" className="home-text30">
                  Support in any implementation
                </span>
              </div>
            </div>
            <div className="home-container10">
              <img
                alt="image"
                src="/rectangle%20109-1400w.png"
                data-aos="fade-in"
                className="home-image6"
              />
            </div>
          </div>
        </div>
        <div className="home-process">
          <div className="home-max-width1">
            <div className="home-text-block1">
              <span data-aos="fade" className="home-text31">
                Our process
              </span>
              <h1 data-aos="fade" className="home-text32">
                We use a simple three step process.
              </h1>
              <div data-aos="fade" className="home-container11">
                <span className="home-text33">01</span>
                <div className="home-container12">
                  <span className="home-text34">
                    <span>FREE ESTIMATE</span>
                    <br></br>
                  </span>
                  <span className="home-text37">
                    We will estimate work price for free
                  </span>
                </div>
              </div>
              <div data-aos="fade" className="home-container13">
                <span className="home-text38">02</span>
                <div className="home-container14">
                  <span className="home-text39">FIX/INSTALL YOUR DOOR</span>
                  <span className="home-text40">
                    We will fix or install your doors the best way there is
                  </span>
                </div>
              </div>
              <div data-aos="fade" className="home-container15">
                <span className="home-text41">03</span>
                <div className="home-container16">
                  <span className="home-text42">
                    <span>DONE!</span>
                    <br></br>
                  </span>
                  <span className="home-text45">
                    Enjoy your fixed/new doors sliding smooth and quit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-max-width2">
            <span data-aos="fade" className="home-text46">
              what are you waiting for?
            </span>
            <h1 data-aos="fade" className="home-text47">
              Let’s Start &amp; Contact Us Now!
            </h1>
            <div data-aos="fade" className="home-container17">
              <span className="home-text48">CALL NOW</span>
              <a href="tel:7862514754" className="home-link1">
                786-251-4754
              </a>
            </div>
          </div>
        </div>
        <FooterLight rootClassName="footer-light-root-class-name5"></FooterLight>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          .home-tops {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-col {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            height: auto;
            font-size: 3.5em;
            font-style: normal;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            line-height: 1.15;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text05 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 100%;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 70%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-gallery1 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-self: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding-top: 0px;
            border-radius: 10px;
            padding-bottom: 0px;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 0px;
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-radius: 10px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-image3 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-image4 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-image5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            padding-bottom: 0px;
          }
          .home-text06 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            overflow: hidden;
            font-size: 3em;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-yellow);
          }
          .home-service {
            flex: 0 0 auto;
            width: 100%;
            display: flow-root;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-yellow);
          }
          .home-portofolio {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-text07 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3em;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text10 {
            color: var(--dl-color-primary-darkblue);
            font-size: 25px;
            max-width: 900px;
            align-self: center;
          }
          .home-text14 {
            color: var(--dl-color-primary-darkblue);
            font-size: 25px;
            max-width: 900px;
            align-self: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-link {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 32px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 700;
            line-height: 1.15;
            border-color: var(--dl-color-primary-darkblue);
            border-width: 4px;
            padding-left: 2rem;
            border-radius: 0px;
            padding-right: 2rem;
            text-transform: none;
            text-decoration: none;
            background-color: var(--dl-color-primary-yellow);
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text15 {
            width: 100%;
            font-size: 75px;
            font-style: normal;
            text-align: center;
            font-weight: 900;
          }
          .home-about {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-primary-deepblue);
          }
          .home-max-width {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 60%;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-text-block {
            flex: 0 0 auto;
            width: 40%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text20 {
            color: var(--dl-color-primary-yellow);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-text21 {
            color: var(--dl-color-primary-yellow);
            font-size: 3em;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text22 {
            color: var(--dl-color-primary-yellow);
            font-size: 25px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-checklist {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon {
            fill: var(--dl-color-primary-yellow);
            width: 25px;
            height: 25px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: var(--dl-color-primary-yellow);
            font-size: 25px;
          }
          .home-checklist1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon02 {
            fill: var(--dl-color-primary-yellow);
            width: 25px;
            height: 25px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text24 {
            color: var(--dl-color-primary-yellow);
            font-size: 25px;
          }
          .home-checklist2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon04 {
            fill: var(--dl-color-primary-yellow);
            width: 40px;
            height: 25px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text27 {
            color: var(--dl-color-primary-yellow);
            font-size: 25px;
          }
          .home-checklist3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon06 {
            fill: var(--dl-color-primary-yellow);
            width: 30px;
            height: 25px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text28 {
            color: var(--dl-color-primary-yellow);
            font-size: 25px;
          }
          .home-checklist4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon08 {
            fill: var(--dl-color-primary-yellow);
            width: 25px;
            height: 25px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text29 {
            color: var(--dl-color-primary-yellow);
            font-size: 25px;
          }
          .home-checklist5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon10 {
            fill: var(--dl-color-primary-yellow);
            width: 30px;
            height: 25px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text30 {
            color: var(--dl-color-primary-yellow);
            font-size: 25px;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image6 {
            width: 100%;
            height: 486px;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-process {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-primary-darkblue);
          }
          .home-max-width1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 46%;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text-block1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text31 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-text32 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 1px;
            margin-bottom: 53px;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text33 {
            color: var(--dl-color-gray-900);
            font-size: 75px;
            margin-right: 180px;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text34 {
            color: var(--dl-color-gray-900);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text37 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-bottom: 53px;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text38 {
            color: var(--dl-color-gray-900);
            font-size: 75px;
            margin-right: 180px;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text39 {
            color: var(--dl-color-gray-900);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text40 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-bottom: 53px;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text41 {
            color: var(--dl-color-gray-900);
            font-size: 75px;
            margin-right: 180px;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text42 {
            color: var(--dl-color-gray-900);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text45 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-primary-yellow);
          }
          .home-max-width2 {
            flex: 0 0 auto;
            width: 46%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text46 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 22px;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-text47 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3em;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text48 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 4em;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            text-transform: uppercase;
          }
          .home-link1 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 4em;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            text-transform: uppercase;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .home-text {
              font-size: 4.5em;
            }
            .home-image4 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-text06 {
              width: 100%;
            }
            .home-service {
              width: 100%;
              background-color: var(--dl-color-primary-yellow);
            }
            .home-max-width {
              max-width: 60%;
            }
            .home-text21 {
              font-size: 2em;
            }
            .home-text22 {
              font-size: 20px;
            }
            .home-text23 {
              font-size: 20px;
            }
            .home-text24 {
              font-size: 20px;
            }
            .home-text27 {
              font-size: 20px;
            }
            .home-text28 {
              font-size: 20px;
            }
            .home-text29 {
              font-size: 20px;
            }
            .home-text30 {
              font-size: 20px;
            }
            .home-image6 {
              height: 360px;
            }
            .home-max-width1 {
              max-width: 60%;
            }
          }
          @media (max-width: 1200px) {
            .home-text {
              font-size: 4.5em;
            }
            .home-image3 {
              height: auto;
            }
            .home-image4 {
              width: 100%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image5 {
              width: 100%;
            }
            .home-text06 {
              width: 100%;
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-service {
              width: 100%;
              background-color: var(--dl-color-primary-yellow);
            }
            .home-max-width {
              max-width: 80%;
            }
            .home-text20 {
              font-size: 18px;
            }
            .home-text21 {
              font-size: 2em;
            }
            .home-text22 {
              font-size: 22px;
            }
            .home-icon {
              width: 24px;
              height: 24px;
            }
            .home-text23 {
              font-size: 22px;
            }
            .home-icon02 {
              width: 24px;
              height: 24px;
            }
            .home-text24 {
              font-size: 22px;
            }
            .home-icon04 {
              width: 30px;
              height: 30px;
            }
            .home-text27 {
              font-size: 22px;
            }
            .home-icon06 {
              width: 24px;
              height: 24px;
            }
            .home-text28 {
              font-size: 22px;
            }
            .home-icon08 {
              width: 24px;
              height: 24px;
            }
            .home-text29 {
              font-size: 22px;
            }
            .home-icon10 {
              width: 24px;
              height: 24px;
            }
            .home-text30 {
              font-size: 22px;
            }
            .home-image6 {
              height: 456px;
            }
            .home-max-width1 {
              max-width: 80%;
            }
          }
          @media (max-width: 991px) {
            .home-text {
              width: 80%;
              font-size: 3em;
              align-self: center;
            }
            .home-container01 {
              width: 80%;
            }
            .home-image {
              height: 100%;
            }
            .home-image3 {
              height: auto;
            }
            .home-image4 {
              width: 100%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image5 {
              width: 100%;
              height: 100%;
              margin-left: 0px;
            }
            .home-text06 {
              width: 100%;
              align-items: center;
            }
            .home-service {
              width: 100%;
              background-color: var(--dl-color-primary-yellow);
            }
            .home-about {
              flex-direction: column;
            }
            .home-max-width {
              max-width: 80%;
            }
            .home-image6 {
              height: 513px;
            }
            .home-text33 {
              margin-right: 50px;
            }
            .home-text38 {
              margin-right: 50px;
            }
            .home-text41 {
              margin-right: 50px;
            }
            .home-max-width2 {
              width: 60%;
            }
            .home-text47 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-col {
              width: 80%;
              align-self: center;
            }
            .home-text {
              width: 80%;
              font-size: 3em;
              align-self: center;
            }
            .home-gallery1 {
              width: 90%;
              align-self: center;
            }
            .home-image3 {
              width: 100%;
              height: auto;
            }
            .home-container07 {
              display: none;
            }
            .home-image4 {
              width: 100%;
              height: auto;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image5 {
              width: 100%;
            }
            .home-text06 {
              width: 100%;
            }
            .home-service {
              width: 100%;
              background-color: var(--dl-color-primary-yellow);
            }
            .home-text15 {
              font-size: 50px;
              text-decoration: none;
            }
            .home-about {
              flex-direction: column;
            }
            .home-max-width {
              max-width: 90%;
              flex-direction: column;
            }
            .home-text-block {
              width: 100%;
            }
            .home-text20 {
              font-size: 18px;
            }
            .home-text21 {
              font-size: 2em;
            }
            .home-text22 {
              font-size: 22px;
            }
            .home-text23 {
              font-size: 22px;
            }
            .home-text24 {
              font-size: 22px;
            }
            .home-text27 {
              font-size: 22px;
            }
            .home-text28 {
              font-size: 22px;
            }
            .home-text29 {
              font-size: 22px;
            }
            .home-text30 {
              font-size: 22px;
            }
            .home-container10 {
              width: 100%;
            }
            .home-image6 {
              height: auto;
            }
            .home-max-width1 {
              max-width: 100%;
            }
            .home-text33 {
              margin-right: 50px;
            }
            .home-text38 {
              margin-right: 50px;
            }
            .home-text41 {
              margin-right: 50px;
            }
            .home-max-width2 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-tops {
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-hero {
              max-width: 100%;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-col {
              width: 80%;
            }
            .home-text {
              width: 100%;
              font-size: 3em;
              align-self: center;
            }
            .home-text05 {
              color: var(--dl-color-primary-darkblue);
              width: 100%;
              font-size: 22px;
              align-self: center;
              margin-left: auto;
              margin-right: auto;
            }
            .home-gallery {
              width: 100%;
              max-width: 100%;
              flex-direction: column;
            }
            .home-container01 {
              width: 100%;
            }
            .home-gallery1 {
              width: 100%;
              display: flex;
            }
            .home-container02 {
              width: 20%;
              margin: 0px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-container03 {
              width: 20%;
              margin: 0px;
              padding: var(--dl-space-space-halfunit);
            }
            .home-container04 {
              width: 100%;
              height: 50%;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-image1 {
              width: 100%;
              height: 100%;
              margin-bottom: 0px;
            }
            .home-image2 {
              width: 100%;
              height: 50%;
            }
            .home-container05 {
              width: 40%;
            }
            .home-container06 {
              width: 100%;
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-image3 {
              width: 100%;
              height: auto;
              margin-bottom: 0px;
            }
            .home-container07 {
              display: none;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-container08 {
              width: 100%;
              height: auto;
              align-items: center;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-image4 {
              width: 100%;
              height: auto;
              margin-right: 0px;
            }
            .home-container09 {
              width: 100%;
              align-items: center;
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-image5 {
              width: 100%;
              height: auto;
              margin-left: 0px;
            }
            .home-text06 {
              color: var(--dl-color-primary-darkblue);
              width: 100%;
              font-size: 3em;
              font-style: normal;
              text-align: center;
              align-items: center;
              font-weight: 900;
              flex-direction: column;
              text-transform: uppercase;
            }
            .home-service {
              width: 100%;
              background-color: var(--dl-color-primary-yellow);
            }
            .home-text10 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text14 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-link {
              font-size: 50px;
            }
            .home-text15 {
              color: var(--dl-color-primary-darkblue);
              font-style: normal;
              font-weight: 900;
            }
            .home-about {
              flex-direction: column;
              background-color: var(--dl-color-primary-deepblue);
            }
            .home-max-width {
              width: 100%;
              height: auto;
              max-width: var(--dl-size-size-maxwidth);
            }
            .home-text21 {
              font-size: 2em;
            }
            .home-text22 {
              font-size: 22px;
            }
            .home-icon {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text23 {
              font-size: 22px;
            }
            .home-icon02 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text24 {
              font-size: 22px;
            }
            .home-icon04 {
              width: var(--dl-size-size-xsmall);
              height: 20px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text27 {
              font-size: 22px;
            }
            .home-icon06 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text28 {
              font-size: 22px;
            }
            .home-icon08 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text29 {
              font-size: 22px;
            }
            .home-icon10 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text30 {
              font-size: 22px;
            }
            .home-image6 {
              height: auto;
            }
            .home-container11 {
              flex-direction: column;
            }
            .home-text33 {
              margin-right: 10px;
            }
            .home-container13 {
              flex-direction: column;
            }
            .home-text38 {
              margin-right: 10px;
            }
            .home-container15 {
              flex-direction: column;
            }
            .home-text41 {
              margin-right: 10px;
            }
            .home-max-width2 {
              width: 100%;
            }
            .home-text47 {
              font-family: Fira Sans;
            }
            .home-text48 {
              font-family: Fira Sans;
            }
            .home-link1 {
              font-size: 3em;
              text-align: center;
              font-family: Fira Sans;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
