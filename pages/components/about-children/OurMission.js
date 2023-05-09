import React, { Fragment } from "react";
import Image from "next/image";

import shape from "../../../public/shape2.png";
import image from "../../../public/diff.jpg";
import image1 from "../../../public/about1.jpg"

const OurMission = () => {
  return (
    <Fragment>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-content-box">
                <div className="title">
                  <h2>Our Mission</h2>
                </div>
                <div className="inner-content">
                  <p>
                  To improve the physical, emotional and social well-being of cancer patients, cancer survivors and their caregivers through the provision of high quality complementary therapeutic treatments and counselling services. Faraja's goal is to reach and improve the lives of as many people as we can reach who are going through the cancer journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="image-box">
                <Image src={image} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="image-box">
                <Image src={image1} />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-content-box">
                <div className="title">
                  <h2>Our Vision</h2>
                </div>
                <div className="inner-content">
                  <p>
                    A safe haven accessible to anyone affected by cancer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurMission;
