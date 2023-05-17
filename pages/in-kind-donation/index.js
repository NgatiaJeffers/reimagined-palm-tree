import React, { Fragment } from "react";
import Image from "next/image";
import { FaRibbon } from "react-icons/fa";

import shape from "../../public/shape.png";
import DonateSidebar from "../../components/shared/DonateSidebar";

const InKindDonation = () => {
  return (
    <Fragment>
      <section className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="details-content">
                <div className="custom-blog">
                  <div className="text-holder">
                    <div className="text-area">
                      <div className="text-1">
                        <div className="title">
                          <h3>Donation in Kind </h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          Donating to our cause can make a real difference in
                          the lives of those affected by cancer. With your
                          support, we can continue to provide vital services and
                          resources to children and adults in Kenya who are
                          battling this disease. Every donation, no matter how
                          big or small, can help us make a significant impact in
                          the lives of those who need it most. We invite you to
                          consider donating to Faraja Cancer Support Trust and
                          joining us in the fight against cancer. Together, we
                          can make a difference!
                        </p>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>We are open to receiving items such as</h3>
                          <div className="title-shape-1">
                            <Image src={shape} />
                          </div>
                        </div>
                        <div className="featured-text">
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Breast Prostheses</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Wigs</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Milk</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Apples </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Yoga Mats</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Knitting Needles </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Beads </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Glitters </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Stationary (Exercise books, Rubber, Scissors,
                                Colored Pencils, Crayons, Drawing books, Glue,
                                Manilla Paper, ) …Among others
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DonateSidebar />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default InKindDonation;
