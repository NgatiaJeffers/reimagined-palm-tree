import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Banner from "../components/Banner.js";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import who from "../public/who.jpg";
import testOne from "../public/kevin.max.png";
import testTwo from "../public/monica.max.png";
import testThree from "../public/tracy.max.png";

export default function Home() {
  // const [scrollPosition] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("click", setInitialInterval, { passive: true });
  //   return () => {
  //     window.addEventListener("click", setInitialInterval);
  //   };
  // }, [scrollPosition]);

  // const setInitialInterval = () => {
  //   let carousel = document.querySelector("#quote-carousel").carousel({
  //     pause: true,
  //     interval: 4000,
  //   });
  //   console.log(carousel);
  // }
  return (
    <div className="container-fluid">
      <Head>
        <title>Faraja Cancer Support - Faraja Cancer Support Trust</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Banner />
      <section id='section-donate' className='ftco-intro'>
        <div className='container'>
          <div className='row gx-0'>
            <div className='col-md-5 d-flex justify-content-center counter-wrap'>
              <div className='block-18 color-1 align-items-stretch'>
                <div className='text'>
                  <strong className='quote'>
                    <q>
                      Faraja saved my life, and I will forever be grateful for the support.
                      It has become like a second home to me and I cannot let a week pass
                      without visiting
                    </q>
                  </strong>
                  <span>Monica</span>
                </div>
              </div>
            </div>
            <div className='col-md d-flex justify-content-center counter-wrap'>
              <div className='block-18 color-2 align-items-stretch'>
                <div className='text'>
                  <h3 className='mb-4 donate-title'>Donate</h3>
                  <p className='donate-text'>Even the all-powerful Pointing has no control about the blind texts.</p>
                  <p><a href="#" className="btn btn-white px-3 py-2 mt-2">Donate Now</a></p>
                </div>
              </div>
            </div>
            <div className='col-md d-flex justify-content-center counter-wrap'>
              <div className='block-18 color-3 align-items-stretch'>
                <div className='text'>
                  <h3 className="mb-4 volunteer-title">Be a Volunteer</h3>
                  <p className='volunteer-text'>Even the all-powerful Pointing has no control about the blind texts.</p>
                  <p><a href="#" className="btn btn-white px-3 py-2 mt-2">Be A Volunteer</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='ftco-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex justify-content-center'>
              <div className='img img-about align-self-stretch' style={{ width: "500px", height: "300px" }}>
                <Image src={who} />
              </div>
            </div>
            <div className='col-md-6 about-details'>
              <h2 className='mb-4 about-title'>Who we are?</h2>
              <p>
                The Faraja Cancer Support Trust was founded in 2010 with the aim of providing emotional,
                practical and healing support to anyone affected by cancer. We offer cancer patients
                and their carers information, advice, counselling and complementary therapies
                in order to make their cancer journey a little more manageable.
              </p>
              <p>
                We work alongside several institutions and hospitals that offer conventional cancer
                treatments such as radiotherapy, chemotherapy and surgery.
                We aim to take our patients beyond medical treatment through offering them a
                holistic approach to coping with the challenges of cancer.
              </p>
              <p><a href="#">Read More  <FontAwesomeIcon icon={faAngleRight} /></a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="home-testimonial">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center testimonial-pos">
              {/* <div className="col-md-12 pt-4 d-flex justify-content-center">
                <h3 className="testimonial-test">Testimonials</h3>
              </div> */}
              <div className="col-md-12 pt-4 d-flex justify-content-center title-area">
                  <h2 className="testimonial-title">Testimonials</h2>
              </div>
          </div>
          <section className="home-testimonial-bottom">
                <div className="container testimonial-inner">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc">
                                    <div className="tour-text text-dark text-center">&ldquo;Taken from Parent&ldquo;s Magazine; September 2013 Nine-year old Kevin Githinji is a jovial and active boy. He wears a woolen cap at home and in school to cover his bald head.&rdquo;</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2">
                                      <Image className="tm-people" src={testOne} alt="" height={"60"} width={"60"} />
                                    </div>
                                    <div className="link-name text-dark d-flex justify-content-center">Kevin Githinji</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc">
                                    <div className="tour-text text-dark text-center">&ldquo;I had an amazing time at Faraja meeting the staff, volunteers and patients and now I am back in the UK, I am determined to do what I can to support the charity.&rdquo;</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2">
                                      <Image className="tm-people" src={testTwo} alt="" height={"60"} width={"60"} />
                                    </div>
                                    <div className="link-name text-dark d-flex justify-content-center">Tracy Chapman</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc">
                                    <div className="tour-text text-dark text-center">&ldquo;Monica was diagnosed with cancer of the oesophagus cancer in 2012 at Kenyatta National Hospital but she could not secure a slot for surgery despite the urgency required in her condition.&rdquo;</div>
                                      <div className="d-flex justify-content-center pt-2 pb-2">
                                        <Image className="tm-people" src={testThree} alt="" height={"60"} width={"60"} />
                                      </div>
                                    <div className="link-name text-dark d-flex justify-content-center">Monica Buluma</div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
            </section>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center mb-5 pd-2'>
            <div className='col-md-7 sponsors-section text-center'>
              <h2 className='mb-4 sponsor-title'>Our Sponsors</h2>
              <p>
                To become a better you, remember to be grateful to
                people who have contributed to making you who you are today.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 d-flex justify-content-center mb-sm-4">
              <div className="sponsor">
                <div className="d-flex mb-4 text-center">
                  <div className="img0"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-center mb-sm-4">
              <div className="sponsor">
                <div className="d-flex mb-4 text-center">
                  <div className="img1"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-center mb-sm-4">
              <div className="sponsor">
                <div className="d-flex mb-4 text-center">
                  <div className="img2"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-center mb-sm-4">
              <div className="sponsor">
                <div className="d-flex mb-4 text-center">
                  <div className="img3"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-center mb-sm-4">
              <div className="sponsor">
                <div className="d-flex mb-4 text-center">
                  <div className="img4"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-center mb-sm-4">
              <div className="sponsor">
                <div className="d-flex mb-4 text-center">
                  <div className="img5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className='section-padding'>
        <div className='news-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-12 text-center'>
                <h1 className='mb-4 news-title'>
                  <span>News & Updates</span>
                </h1>
              </div>
            </div>
            <div className='row news-row'>
              <div className='col-md-6'>
                <div className='news-active'>
                  <div className='single-blog d-flex align-items-center'>
                    <div className="news-info">
                      <span>August 2, 2016</span>
                      <a href="#">
                        <h3>NAKUMATT ON BOARD- LET&apos;S FIGHT THIS BATTLE TOGETHER</h3>
                      </a>
                      <p>
                        In 2014, Nakumatt chose to partner Faraja to deliver
                        two ground-breaking projects called &apos;Make-Over&apos; and
                        &apos;Let&apos;s Fight this Battle Together&apos;. Both show the
                        power corporate partnerships can have.
                      </p>
                      <a className="read-more" href="#">Read More  <FontAwesomeIcon icon={faAngleRight} /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='col-md-2'></div> */}
              <div className='col-md-6'>
                <div className='news-active'>
                  <div className='single-blog d-flex align-items-center'>
                    <div className="news-info">
                      <span>July 13, 2016</span>
                      <a href="#">
                        <h3>WHAT IS KENYA&apos;S BIGGEST COFFEE MORNING?</h3>
                      </a>
                      <p>
                        If you&apos;ve heard about Kenya&apos;s Biggest Coffee
                        Morning – and want to find out more – you at the right place.
                      </p>
                      <a className="read-more" href="#">Read More  <FontAwesomeIcon icon={faAngleRight} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
