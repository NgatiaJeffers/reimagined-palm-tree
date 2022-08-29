import Head from 'next/head';
import Image from 'next/image.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Banner from "../components/Banner.js";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import CancerScreening from "../public/assets/images/cancer-screening.jpg";
import FarajaCoffee from "../public/assets/images/coffee.jpg";
import testOne from "../public/assets/images/kevin.max.png";
import testTwo from "../public/assets/images/monica.max.png";
import testThree from "../public/assets/images/tracy.max.png";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Faraja Cancer Support - Faraja Cancer Support Trust</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
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
            <div className='col-md-6 d-flex'>
              <div className='img img-about align-self-stretch'></div>
            </div>
            <div className='col-md-6 pl-md-5'>
              <h2 className='mb-4'>Who we are?</h2>
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
      <section className='testimonial-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-none d-lg-block'>
              <ol className='carousel-indicators tabs'>
                <li data-target="#carouselExampleIndicatos" data-slide-to="0" className='active'>
                  <figure>
                      <Image src={testOne} className="img-fluid" />
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicatos" data-slide-to="1">
                  <figure>
                      <Image src={testThree} className="img-fluid"/>
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicatos" data-slide-to="2">
                  <figure>
                      <Image src={testTwo} className="img-fluid"/>
                  </figure>
                </li>
              </ol>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <div id="carouselExampleIndicators" data-interval="false" className='carousel slide' data-ride="carousel">
                <h3 className=''>Testimonials</h3>
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <div className='quote-wrapper'>
                      <p>
                        Taken from Parent&apos;s Magazine; September 2013 Nine-year 
                        old Kevin Githinji is a jovial and active boy. He wears a 
                        woolen cap at home and in school to cover his bald head.
                      </p>
                      <a href='#'>Kevin Githinji</a>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='quote-wrapper'>
                      <p>
                        I had an amazing time at Faraja meeting the staff, volunteers 
                        and patients and now I am back in the UK, I am determined 
                        to do what I can to support the charity.
                      </p>
                      <a href='#'>Tracy Chapman</a>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='quote-wrapper'>
                      <p>
                        Monica was diagnosed with cancer of the oesophagus cancer in 
                        2012 at Kenyatta National Hospital but she could not secure 
                        a slot for surgery despite the urgency required in her condition.
                      </p>
                      <a href='#'>Monica Buluma</a>
                    </div>
                  </div>
                </div>
                <ol className='carousel-indicators indicators'>
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center mb-5 pd-2'>
            <div className='col-md-7 sponsors-section text-center'>
              <h2 className='mb-4'>Our Sponsors</h2>
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
                  <div className="img"></div>
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

      <section className='section-padding'>
        <div className='news-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-12 text-center'>
                <h1 className='mb-4'>
                  <span>News & Updates</span>
                </h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-5'>
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
              <div className='col-md-2'></div>
              <div className='col-md-5'>
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
