import React from "react";
import Image from "next/image";

import BreadCrumb from "../../components/atoms/Breadcrumb";

import shape from "../../public/shape2.png";
import image from "../../public/diff.jpg";

const AboutPage = () => {
  return (
    <>
      <BreadCrumb title={"About Us"} />
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
                  <h2>
                    Our Mission Is To Make The World A Better Place For Everyone
                  </h2>
                </div>
                <div className="inner-content">
                  <p>
                    The Faraja Cancer Support Trust was founded in 2010 with the
                    aim of providing emotional, practical and healing support to
                    anyone affected by cancer. We offer cancer patients and
                    their carers information, advice, counselling and
                    complementary therapies in order to make their cancer
                    journey a little more manageable.
                  </p>
                  <p>
                    We work alongside several institutions and hospitals that
                    offer conventional cancer treatments such as radiotherapy,
                    chemotherapy and surgery. We aim to take our patients beyond
                    medical treatment through offering them a holistic approach
                    to coping with the challenges of cancer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="image-box">
                <Image 
                src={image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
