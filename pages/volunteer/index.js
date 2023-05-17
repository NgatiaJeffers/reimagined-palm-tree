import React, { Fragment } from "react";
import Image from "next/image";
import { FaRibbon } from "react-icons/fa";

import shape from "../../public/shape.png";
import DonateSidebar from "../../components/shared/DonateSidebar";

const Volunteer = () => {
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
                          <h3>Volunteers</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          Volunteers are very important to Faraja. We appreciate
                          each and every volunteer's assistance with the highest
                          gratitude.
                        </p>
                        <p>
                          Reach out to us at{" "}
                          <a href="mailto:info@farajacancersupport.org">
                            <span className="underline">
                              info@farajacancersupport.org
                            </span>
                          </a>{" "}
                          expressing your interest in volunteering and also
                          elaborating on some of the skills you possess that
                          would be beneficial to the course and we will get back
                          to you with various volunteering opportunities.
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

export default Volunteer;
