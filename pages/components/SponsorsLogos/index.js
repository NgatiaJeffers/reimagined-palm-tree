import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import shape4 from "../../../public/shape4.png";

const SponsorsLogo = ({ logos }) => {
  return (
    <Fragment>
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
                  <Link href={"/contact-us"}>
                    <a className="btn-main">get in touch</a>
                  </Link>
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
            {logos?.map((image) => (
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
    </Fragment>
  );
};

export default SponsorsLogo;
