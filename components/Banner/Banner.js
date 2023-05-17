import React from "react";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
// import swiper required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { urlFor } from "../../lib/sanity";


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
                {newImages?.map((image) => {
                  const { _id, bannerImage, title, text, slug } = image;
                  return (
                    <SwiperSlide key={_id}>
                    <div className="slide">
                      <div className="overlay"></div>
                      <div
                        className="image-layer"
                        style={{ backgroundImage: `url(${urlFor(bannerImage?.asset).url()})` }}
                      ></div>
                      <div className="main-content-box">
                        <div className="content-box">
                          <div className="title" data-swiper-parallax="-300">
                            <h3>Change life, change World</h3>
                          </div>
                          <div className="subtitle" data-swiper-parallax="-200">
                            <h2>{title}</h2>
                          </div>
                          <div className="border-box"></div>
                          <div
                            className="banner-text"
                            data-swiper-parallax="-100"
                          >
                            
                            <p>{text}</p>
                          </div>
                          {slug?.current !== "information-and-awareness" && (
                            <div className="banner-buttons d-grid gap-2 d-md-flex">
                              <Link as={`/${slug?.current}`}
                                href={"/[slug]"}>
                                <a className="btn-main">Read More</a>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
