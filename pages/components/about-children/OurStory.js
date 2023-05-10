import React, { Fragment } from "react";
import Image from "next/image";

import shape from "../../../public/shape2.png";
import image from "../../../public/New content/Donation in Kind.jpeg";
import Support from "../../../components/shared/Support";

const OurStory = () => {
  return (
    <Fragment>
      <section className="wide-tb-100 our-story-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div className="our-story-content">
                <h2 className="heading-main">
                  Our <span className="underline">Story</span>
                </h2>
                <p>
                  Located in Nairobi at HCG-CCK Cancer Centre and in Eldoret at
                  the Moi Teaching and Referral Hospital (MTRH) within the
                  Chandaria Cancer Center. Faraja was founded in 2010 with the
                  aim of providing emotional, practical and healing support to
                  anyone affected by cancer.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div
                className="box-bg"
                style={{ backgroundImage: `url(/in-kind.jpeg)` }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div
                className="box-bg"
                style={{ backgroundImage: `url(/diff.jpg)` }}
              ></div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div className="our-story-content">
                <h2 className="heading-main">
                  Our <span className="underline">Mission</span>
                </h2>
                <p>
                  To improve the physical, emotional and social well-being of
                  cancer patients, cancer survivors and their caregivers through
                  the provision of high quality complementary therapeutic
                  treatments and counselling services. Faraja's goal is to reach
                  and improve the lives of as many people as we can reach who
                  are going through the cancer journey.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div className="our-story-content">
                <h2 className="heading-main">
                  Our <span className="underline">Vision</span>
                </h2>
                <p>A safe haven accessible to anyone affected by cancer.</p>
              </div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div
                className="box-bg"
                style={{ backgroundImage: `url(/about1.jpg)` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Support />
    </Fragment>
  );
};

export default OurStory;
