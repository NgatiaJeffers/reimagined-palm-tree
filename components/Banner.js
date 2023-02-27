import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
// import swiper required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// API calls
import { fetchBannerContent } from "../util/fetchBannerContent";


const Banner = (props) => {
    const {images} = props;
    console.log(images)

    const pagination = {
        clickable: true,
        renderBullet: function(idx, className) {
            return '<span class="' + className + '">' + (idx + 1) + "</span>";
        }
    }

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12 col-12 col-md-12">
                    <div className="banner-wrapper">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        centeredSlides={true}
                        autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        }}
                        pagination={pagination}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 4,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 1,
                              spaceBetween: 50,
                            },
                          }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className="slide">
                                <div className="overlay"></div>
                                <div className="image-layer" style={{ backgroundImage: 'url(/slide1.jpg)'}}></div>
                                <div className="main-content-box">
                                    <div className="content-box">
                                        <div className="title" data-swiper-parallax="-300">
                                            <h3>Change life, change World</h3>
                                        </div>
                                        <div className="subtitle" data-swiper-parallax="-200">
                                            <h2>We Do Yoga</h2>
                                        </div>
                                        <div className="border-box"></div>
                                        <div className="banner-text" data-swiper-parallax="-100">
                                            <p>
                                                Yoga is not just doing the physical postures, 
                                                it is about bringing balance to the body, mind and breath.
                                            </p>
                                        </div>
                                        <div className="banner-buttons d-grid gap-2 d-md-flex">
                                            <Link href={'/'}>
                                                <a className="btn-donate">HOW WE HELP</a>
                                            </Link>
                                            <Link href={'/'}>
                                                <a className="btn-donate">SUPPORT US</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div className="slide">
                                <div className="overlay"></div>
                                <div className="image-layer" style={{ backgroundImage: 'url(/slide2.jpg)'}}></div>
                                <div className="main-content-box">
                                    <div className="content-box">
                                        <div className="title" data-swiper-parallax="-300">
                                            <h3>Change life, change World</h3>
                                        </div>
                                        <div className="subtitle" data-swiper-parallax="-200">
                                            <h2>We Give Hope</h2>
                                        </div>
                                        <div className="banner-text" data-swiper-parallax="-100">
                                            <p>
                                                Hope is being able to see that there is light despite all of the darkness.
                                            </p>
                                        </div>
                                        <div className="banner-buttons d-grid gap-2 d-md-flex">
                                            <Link href={'/'}>
                                                <a className="btn-donate">HOW WE HELP</a>
                                            </Link>
                                            <Link href={'/'}>
                                                <a className="btn-donate">SUPPORT US</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="overlay"></div>
                                <div className="image-layer" style={{ backgroundImage: 'url(/slide4.jpg)'}}></div>
                                <div className="main-content-box">
                                    <div className="content-box">
                                        <div className="title" data-swiper-parallax="-300">
                                            <h3>Change life, change World</h3>
                                        </div>
                                        <div className="subtitle" data-swiper-parallax="-200">
                                            <h2>We Fundraise</h2>
                                        </div>
                                        <div className="banner-text" data-swiper-parallax="-100">
                                            <p>
                                                The best way to predict the future of your organization is to create it.
                                            </p>
                                        </div>
                                        <div className="banner-buttons d-grid gap-2 d-md-flex">
                                            <Link href={'/'}>
                                                <a className="btn-donate">HOW WE HELP</a>
                                            </Link>
                                            <Link href={'/'}>
                                                <a className="btn-donate">SUPPORT US</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Banner;

// Backend call for server side data
export const getStaticProps = async () => {
    const images = await fetchBannerContent()
  
    return {
      props: {
        images,
      }
    } 
  };  

  
