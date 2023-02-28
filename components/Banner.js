import React, { useEffect, useState } from "react";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
// import swiper required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Banner = (images) => {
  const newImages = images?.images;

  const pagination = {
    clickable: true,
    renderBullet: function (idx, className) {
      return '<span class="' + className + '">' + (idx + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-12 col-md-12">
            <div className="banner-wrapper">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                // centeredSlides={true}
                autoplay={{
                  delay: 8000,
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
                className="mySwiper"
              >
                {newImages?.map((image) => (
                  <SwiperSlide key={image?._id}>
                    <div className="slide">
                      <div className="overlay"></div>
                      <div
                        className="image-layer"
                        style={{ backgroundImage: `url(${image?.image?.url})` }}
                      ></div>
                      <div className="main-content-box">
                        <div className="content-box">
                          <div className="title" data-swiper-parallax="-300">
                            <h3>Change life, change World</h3>
                          </div>
                          <div className="subtitle" data-swiper-parallax="-200">
                            <h2>{image?.title}</h2>
                          </div>
                          <div className="border-box"></div>
                          <div
                            className="banner-text"
                            data-swiper-parallax="-100"
                          >
                            <p>{image?.text}</p>
                          </div>
                          <div className="banner-buttons d-grid gap-2 d-md-flex">
                            <Link href={"/"}>
                              <a className="btn-donate">HOW WE HELP</a>
                            </Link>
                            <Link href={"/"}>
                              <a className="btn-donate">SUPPORT US</a>
                            </Link>
                          </div>
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
    </>
  );
};

export default Banner;
