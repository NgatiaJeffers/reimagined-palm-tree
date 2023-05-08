import React from "react";
import Image from "next/image";

import shape from "../../../public/shape2.png";
import image from "../../../public/diff.jpg";


const OurStory = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="about-content-box">
              <div className="shape-box">
                <Image src={shape} />
              </div>
              <div className="title">
                <div className="sub-title">
                  <div className="inner">
                    <h3>Give a little, change a lot</h3>
                  </div>
                </div>
                <h2>Our Story</h2>
              </div>
              <div className="inner-content">
                <p>
                  Located in Nairobi at HCG-CCK Cancer Centre and in Eldoret at
                  the Moi Teaching and Referral Hospital (MTRH) within the
                  Chandaria Cancer Center. Faraja was founded in 2010 with the
                  aim of providing emotional, practical and healing support to
                  anyone affected by cancer.
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
  );
};

export default OurStory;
