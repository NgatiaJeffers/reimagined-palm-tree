import React from "react";
import Head from "next/head";
import Image from "next/image.js";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiOutlineGift, AiFillClockCircle } from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";
import Banner from "../components/Banner";

import shape1 from "../public/shape1.png";
import shape4 from "../public/shape4.png";
import float from "../public/shape3.png";
import news from "../public/received.jpg";
import logo1 from "../public/logo-2.original.png";

import { urlFor } from "../lib/sanity";

// HELPER FUNCTIONS
import { getDayAndMonth } from "../util/util";

// API CALLS
import { fetchBannerContent } from "../util/fetchBannerContent";
import { fetchAboutUs } from "../util/fetchAboutUs";
import { fetchTestimonials } from "../util/fetchTestimonials";
import { fetchEvents } from "../util/fetchEvents";
import { fetchBlog } from "../util/fetchBlog";
import { fetchSponsors } from "../util/fetchSponsors";

export default function Home(props) {
  const { about, testimonial, images, events, blog, sponsors } = props;
console.log(sponsors)

  return (
    <>
      <Head>
        <title>Faraja Cancer Support - Faraja Cancer Support Trust</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw="
          crossOrigin="anonymous"
        />
      </Head>
      <Banner images={images} />

      <section className="section-md">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 col-11 col-md-11 col-sm-11 quote-box">
              <h2 className="text-decorated">
                <q>
                  Faraja saved my life, and I will forever be grateful for the
                  support. It has become like a second home to me and I cannot
                  let a week pass without visiting
                </q>
              </h2>
              <span className="author">Monica</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area">
        <div className="container">
          <div className="about-title text-center">
            <div className="sub-title">
              <div className="inner text-center">
                <h3>Aim to provide emotional, practical and healing support</h3>
              </div>
            </div>
            <h2>Our Mission & Goals</h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {about?.map((item) => (
                <div className="about-content" key={item?._id}>
                  <div className="shape1">
                    <Image src={shape1} />
                  </div>
                  <div
                    className="about-img-box"
                    style={{ backgroundImage: `url(${item.image.url})` }}
                  ></div>
                  <div className="text-holder">
                    <div className="top">
                      <div className="title">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                    <div className="text">{item.bodyText}</div>
                    <div className="text-1">{item.text}</div>
                    <div className="bottom">
                      <Link href={"/"}>
                        <a className="btn-donate">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate section */}
      <section
        className="donate-now-area section-bg"
        style={{ backgroundImage: "url(/overlay.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <AiOutlineGift className="icon-gift" />
            <p className="text mr-auto">Donate now to change life forever</p>
            <Link href={"/"}>
              <a className="btn-donate">Make a Donation</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-area">
        <div
          className="testimonial-bg"
          style={{ backgroundImage: "url(/backbg.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="testimonial-content">
                  <div className="testimonial-carousel">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="swiper-testimonial"
                    >
                      {testimonial?.map((item) => (
                        <SwiperSlide key={item?._id}>
                          <div className="single-testimonial">
                            <div className="img-holder">
                              <div className="inner">
                                <Image
                                  className="rounded-circle"
                                  src={item?.image?.url}
                                  alt=""
                                  height={"140"}
                                  width={"140"}
                                />
                              </div>
                            </div>
                            <div className="text-holder">
                              <div className="quote">
                                <ImQuotesLeft className="quote-icon" />
                              </div>
                              <div className="text">
                                <h3>{item?.title}</h3>
                                {item?.text[0]}
                              </div>
                              <div className="client-info">
                                <h4>{item?.name}</h4>
                                {/* <span>DRC Congo</span> */}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="event-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div
                className="image-box"
                style={{ backgroundImage: 'url("/event.jpg")' }}
              ></div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="content-box">
                <div className="title style-two">
                  <h4 className="content-title">A Charity with Mission</h4>
                  <h1>
                    Upcoming <span>Events</span>
                  </h1>
                  <div className="text">
                    The future is something which everyone reaches at the rate{" "}
                    <br /> of sixty minutes an hour, whatever he does, whoever
                    he is.
                  </div>
                  <div className="row">
                    {events?.map((event) => (
                    <div className="col-lg-6 col-md-6 event-block" key={event?._id}>
                      <div className="inner-box">
                        <div className="date">
                          {getDayAndMonth(event?.eventDatetime)}
                        </div>
                        <div className="organizer">
                          Organized By:{" "}
                          <Link href={"/"}>
                            <a>Cindy</a>
                          </Link>
                        </div>
                        <h4>
                          {event?.eventDay}
                        </h4>
                        <ul className="post-meta">
                          <li>
                            <AiFillClockCircle className="post-icon" /> 08:00am
                            - Karura Forest, Nairobi, Kenya
                          </li>
                        </ul>
                      </div>
                    </div>
                    ))}
                    <div className="col-md-12">
                      <div className="link-btn">
                        <Link href={"/"}>
                          <a className="btn-donate">Events Calender</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="blog-area">
        <div className="float-shape">
          <Image src={float} />
        </div>
        <div className="container">
          <div className="blog-title text-center">
            <div className="sub-title">
              <div className="inner text-center">
                <h3>We Change Your Life & World</h3>
              </div>
            </div>
            <h2>News & Happenings</h2>
          </div>
          <div className="row">
            {blog?.map((item) => (
              <div className="col-xl-4 col-lg-4" key={item?._id}>
              <div className="single-blog">
                <div className="img-holder">
                  <div className="inner">
                    <Link href={"/"}>
                      <a>
                        <Image 
                        src={item?.image?.url}
                        layout="fill"
                        objectFit="contain"
                        style={{ position: "relative !important"}}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="date-box">
                    <h2>18</h2>
                    <p>June</p>
                  </div>
                </div>
                <div className="text-holder">
                  <h3 className="blog-title">
                    <Link href={"/"}>
                      <a>
                        {item?.title}
                      </a>
                    </Link>
                  </h3>
                  <div className="text">
                    <p>
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="partner-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="top-box">
                <div className="shape">
                  <Image src={shape4} />
                </div>
                <div className="title">
                  <h2>Become Support Partner</h2>
                  <h4>
                    By supporting Faraja you will become a part of the community
                  </h4>
                </div>
                <div className="btn-box">
                  <a className="btn-donate">get in touch</a>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {sponsors?.map((image) => (
              <SwiperSlide key={image?._id}>
                <div className="single-sponsor">
                  <div className="img-box">
                    <Image 
                      src={image?.image?.url} 
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

// Backend call for server side data
export const getServerSideProps = async () => {
  const images = await fetchBannerContent();
  const about = await fetchAboutUs();
  const testimonial = await fetchTestimonials();
  const events = await fetchEvents();
  const blog = await fetchBlog();
  const sponsors = await fetchSponsors();

  return {
    props: {
      about,
      testimonial,
      images,
      events,
      blog,
      sponsors
    },
  };
};
