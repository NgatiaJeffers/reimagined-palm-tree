import React, { Fragment } from "react";
import Image from "next/image";

import shape from "../../../public/shape2.png";
import image from "../../../public/diff.jpg";

const OurServices = () => {
  return (
    <Fragment>
      <section className="blog-area services-area">
        <div className="container">
          <div className="blog-title text-center">
            <div className="sub-title">
              <div className="inner text-center">
                <h3>Our Services</h3>
              </div>
            </div>
            <h2>
              Faraja offers free services to complement medical treatment.
            </h2>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="container-fluid">
          {/* SECTION I */}
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div
                className="image-bg"
                style={{ backgroundImage: `url(/information.jpg)` }}
              ></div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div className="content-box">
                <div className="heading-box">
                  <h2 className="heading-title">Information</h2>
                  <p>
                    Cancer patients and their caregivers have many questions as
                    they go through their cancer journey. Our well-stocked
                    resource library provides information and education on
                    Cancer{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION II */}
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div className="content-box">
                <div className="heading-box">
                  <h2 className="heading-title">Complementary therapies</h2>
                  <p>
                    Complementary therapies are used to help cancer patients
                    manage symptoms, reduce side effects and restore a sense of
                    control and vitality. Therapies not only boost physical
                    health but also helps to deal with the emotional stress of
                    cancer. Therapies offered include: nutritional counselling,
                    Lymphatic drainage, physiotherapy and breathing therapy,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div
                className="image-bg"
                style={{ backgroundImage: `url(/ct.jpg)` }}
              ></div>
            </div>
          </div>
          {/* SECTION III */}
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div
                className="image-bg"
                style={{ backgroundImage: `url(/support-G.jpg)` }}
              ></div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div className="content-box">
                <div className="heading-box">
                  <h2 className="heading-title">Support Groups</h2>
                  <p>
                    We conduct hybrid support groups for patients and caregivers
                    to share experiences, peer learning, and also the benefit of
                    information on such issues as side effects treatment,
                    nutritional advice, mental wellness, etc. from technical and
                    medical experts in the Cancer sector. Patients and
                    caregivers can attend the support groups both virtually and
                    physically
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION IV */}
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div className="content-box">
                <div className="heading-box">
                  <h2 className="heading-title">Crafts for Cure </h2>
                  <p>
                    This is an outreach therapy program of art, crafts and music
                    therapy that we carry out at Kenyatta National Hospital
                    (KNH) and at the Moi Teaching and Referral Hospital (MTRH)
                    at the Children’s Oncology Wards. We use therapeutic play,
                    art, music, knitting and beadwork (diversional therapy) to
                    demystify the cancer journey for children and teenagers, and
                    to help them cope with psychosocial wellness
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div
                className="image-bg"
                style={{ backgroundImage: `url(/crafts_for_cure.jpg)` }}
              ></div>
            </div>
          </div>
          {/* SECTION III */}
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div
                className="image-bg"
                style={{ backgroundImage: `url(/in-kind.jpeg)` }}
              ></div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 p-0">
              <div className="content-box">
                <div className="heading-box">
                  <h2 className="heading-title">Medical Assistance </h2>
                  <p>
                    Faraja has an endowment medical fund and provides financial
                    assistance for medical treatment for cancer patients
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

export default OurServices;
