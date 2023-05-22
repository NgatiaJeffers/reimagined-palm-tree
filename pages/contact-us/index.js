import React, { Fragment } from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

import BreadCrumb from "../../components/atoms/Breadcrumb";

const ContactUs = () => {
  return (
    <Fragment>
      <BreadCrumb title={"Contact Us"} />
      <section className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="contact-title">
                <div className="sub-title">
                  <div className="inner">
                    <h3>Faraja would love to hear from you.!</h3>
                  </div>
                </div>
                <h2>Get In Touch</h2>
                <p>
                  Please reach out to us on info@farajacancersupport.org with
                  any questions or comments you may have and we will be happy to
                  assist.
                </p>
              </div>
              <div className="google-maps">
              <iframe height="400"
                src="https://www.google.co.ke/maps/ms?msa=0&amp;msid=208305355725789246003.0004fd349b53d0606de69&amp;hl=en&amp;ie=UTF8&amp;t=m&amp;ll=-1.262714,36.812455&amp;spn=0,0&amp;output=embed"></iframe>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="contact-sidebar-box">
                <div className="contact-info-sidebar">
                  <ul>
                    <li>
                      <div className="top">
                        <div className="icon">
                          <GoLocation className="location" />
                        </div>
                        <div className="title">
                          <h3>Visit Office</h3>
                        </div>
                      </div>
                      <p>
                        Shivachi Road, Parklands
                       
                        P. O. Box 39173, 00800 Nairobi, Kenya.
                      </p>
                    </li>
                    <li>
                      <div className="top">
                        <div className="icon">
                          <BiPhoneCall className="location" />
                        </div>
                        <div className="title">
                          <h3>Phone</h3>
                        </div>
                      </div>
                      <p>
                      Nairobi: 0748 811 909, <br></br>Eldoret: 0746 963 107<br></br>
                      </p>
                    </li>
                    <li>
                      <div className="top">
                        <div className="icon">
                          <MdAlternateEmail className="location" />
                        </div>
                        <div className="title">
                          <h3>Email</h3>
                        </div>
                      </div>
                      <p>
                        <a href="mailto:info@farajacancersupport.org">info@farajacancersupport.org</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactUs;
