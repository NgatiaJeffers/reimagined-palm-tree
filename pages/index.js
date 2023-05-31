import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiOutlineGift, AiFillClockCircle } from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";
import Banner from "../components/Banner/Banner";
import TruncatedParagraph from "../components/atoms/TruncatedText";
import SponsorsLogo from "./components/SponsorsLogos";

import shape1 from "../public/shape1.png";
import shape4 from "../public/shape4.png";
import float from "../public/shape3.png";
import avatar from "../public/avatar.png";
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
  events?.sort((a, b) => {
    const dateA = new Date(a.dateCreated);
    const dateB = new Date(b.dateCreated);
    return dateA - dateB;
  });

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
                      <Link href={"/about"}>
                        <a className="btn-main">Read More</a>
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
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between donate-content">
            <AiOutlineGift className="icon-gift" />
            <p className="text mr-auto">Donate now to change life forever</p>
            <Link href={"/donate"}>
              <a className="btn-donate">Make a Donation</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-primary t-bordered">
        <div className="about-title text-center">
          <div className="sub-title">
            <div className="inner text-center">
              <h3>
                Don't just take it from us, let our clients do the talking!
              </h3>
            </div>
          </div>
          <h2>Testimonials</h2>
        </div>
        <div className="container">
          <div className="row testimonial-three testimonial-three--col-three">
            {testimonial?.map((item) => (
              <div className="col-md-4 testimonial-three-col" key={item?.id}>
                <div className="testimonial-inner">
                  <div className="testimonial-image">
                    <Image
                      height="180"
                      weight="180"
                      src={item?.image?.url}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="testimonial-content">
                    <TruncatedParagraph text={item.text[0]} limit={200} />
                  </div>
                  <div className="testimonial-meta">
                    <Link
                      href={"https://farajacancersupport.wordpress.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a>
                        <strong className="testimonial-name">
                          {item?.name}
                        </strong>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
                  <div className="title-align">
                    <h4 className="content-title">A Charity with Mission</h4>
                    <h1>
                      Upcoming <span>Events</span>
                    </h1>
                  </div>
                  <div className="text">
                    The future is something which everyone reaches at the rate of
                    sixty minutes an hour, whatever he does, whoever he is.
                  </div>
                  <div className="row">
                    {events?.slice(0, 2).map((event) => (
                      <div
                        className="col-lg-6 col-md-6 event-block"
                        key={event?._id}
                      >
                        <div className="inner-box">
                          <div className="date">{event?.eventDate}</div>
                          <h4>{event?.title}</h4>
                        </div>
                      </div>
                    ))}
                    <div className="col-md-12">
                      <div className="link-btn">
                        <Link href={"/events"}>
                          <a className="btn-main">Events Calender</a>
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
            <h2>What&apos;s Happening</h2>
          </div>
          <div className="row">
            {blog?.map((item) => {
              const { _id, image, title, description, slug } = item;
              return (
                <div className="col-xl-4 col-lg-4" key={_id}>
                  <div className="single-blog">
                    <div className="img-holder">
                      <div className="inner">
                        <Link
                          as={`/whats-happening/${slug?.current}`}
                          href={"/whats-happening/[slug]"}
                        >
                          <a>
                            <Image
                              src={urlFor(image?.asset).url()}
                              layout="fill"
                              objectFit="contain"
                              style={{ position: "relative !important" }}
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="text-holder">
                      <h3 className="blog-title">
                        <Link
                          as={`/whats-happening/${slug?.current}`}
                          href={"/whats-happening/[slug]"}
                        >
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <div className="text">
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPONSORS LOGO COMPONENT */}
      <SponsorsLogo logos={sponsors} />
    </>
  );
}

// Backend call for server side data
export const getStaticProps = async () => {
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
      sponsors,
    },
  };
};
