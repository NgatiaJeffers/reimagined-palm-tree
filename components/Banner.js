import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsCheckCircle } from "react-icons/bs"
import { fetchBannerContent } from "../util/fetchBannerContent";


const Banner = () => {
    // const [data, setData] = useState([
    //     [
    //         {
    //           id: 1,
    //           title: "accusamus beatae ad facilis cum similique qui sunt",
    //           url: "https://farajacancersupport.org/media/images/slide1-wide.original.jpg",
    //         },
    //         {
    //           id: 2,
    //           title: "accusamus beatae ad facilis cum similique qui sunt",
    //           url: "https://farajacancersupport.org/media/images/slide5-wide.original.jpg",
    //         },
    //         {
    //           id: 3,
    //           title: "accusamus beatae ad facilis cum similique qui sunt",
    //           url: "https://farajacancersupport.org/media/images/slide2-wide.original.jpg",
    //         },
    //     ]
    // ]);


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //       .then(response => response.json())
    //       .then(data => setData(data));
    //   }, []);

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplaySpeed: 20,
    // };

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
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        }}
                        pagination={pagination}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide">
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
                                        <div className="banner-buttons">
                                            <Link href={'/'}>
                                                <a className="btn-one btn-one-style">HOW WE HELP</a>
                                            </Link>
                                            <Link href={'/'}>
                                                 <a className="btn-one btn-one-style btn-one-color" style={{ marginLeft: '15px'}}>SUPPORT US</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
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
                                        <div className="banner-buttons">
                                            <Link href={'/'}>
                                                <a className="btn-one btn-one-style">HOW WE HELP</a>
                                            </Link>
                                            <Link href={'/'}>
                                                 <a className="btn-one btn-one-style btn-one-color" style={{ marginLeft: '15px'}}>SUPPORT US</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
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
                                        <div className="banner-buttons">
                                            <Link href={'/'}>
                                                <a className="btn-one btn-one-style">HOW WE HELP</a>
                                            </Link>
                                            <Link href={'/'}>
                                                 <a className="btn-one btn-one-style btn-one-color" style={{ marginLeft: '15px'}}>SUPPORT US</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Banner;
