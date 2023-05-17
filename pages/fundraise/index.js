import React, { Fragment } from "react";
import Image from "next/image";
import { FaRibbon } from "react-icons/fa";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import common from "../../public/donor.jpg";
import shape from "../../public/shape.png";
import DonateSidebar from "../../components/shared/DonateSidebar";

const Fundraise = () => {
  return (
    <Fragment>
      <BreadCrumb title={"Fundraise"} />
      <section className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="details-content">
                <div className="custom-blog">
                  <div className="img-holder">
                    <div className="img-box">
                      <Image src={common} />
                    </div>
                  </div>
                  <div className="text-holder">
                    <div className="text-area">
                      <div className="text-1">
                        <div className="title">
                          <h3>How to Fundraise</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          Let your imagination run wild and create your very own
                          fundraising event and appeal Set the date, let us know
                          how much you hope to raise, and what you're upto.
                        </p>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>Here are some ideas and inspiration</h3>
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
                              <p>
                                A Sponsored Stop - give up a guilty pleasure and
                                see how long you can last
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Grow a Mo (moustache!) for a month, usually done
                                in November and called Movember
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Take part in an organised fun run, marathon or
                                bike ride in your local area
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Organise a Golf Day </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Encourage your local school to hold a 'dress
                                down' day to raise funds for our children's
                                project at Kenyatta hospital{" "}
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Do good deeds for donations. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <p>
                          We are very enthusiastic about fundraising for Cancer.
                        </p>
                        <p>
                          Get in touch with our fundraising manager,
                          <span className="underline">cindy@farajacancersupport.org</span> on what you would like
                          to do in your fundraising event, the date you would
                          like to do it on, and the goal amount you would hope
                          to raise.
                        </p>
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

export default Fundraise;
