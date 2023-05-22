import React, { Fragment } from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import facebook from "../../public/Social-media/facebook.png";
import instagram from "../../public/Social-media/instagram.png";
import linkedin from "../../public/Social-media/linkedin.png";
import tiktok from "../../public/Social-media/tiktok.png";
import twitter from "../../public/Social-media/twitter.png";
import whatsapp from "../../public/Social-media/whatsapp.png";
import youtube from "../../public/Social-media/youtube.png";
import Image from "next/image";

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
                  Please reach out to us on{" "}
                  <a href="mailto:info@farajacancersupport.org">
                    <span className="underline">
                      info@farajacancersupport.org
                    </span>
                  </a>{" "}
                  with any questions or comments you may have and we will be
                  happy to assist.
                </p>
              </div>
              <div className="google-maps">
                <iframe
                  height="400"
                  src="https://www.google.co.ke/maps/ms?msa=0&amp;msid=208305355725789246003.0004fd349b53d0606de69&amp;hl=en&amp;ie=UTF8&amp;t=m&amp;ll=-1.262714,36.812455&amp;spn=0,0&amp;output=embed"
                ></iframe>
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
                        Shivachi Road, Parklands P. O. Box 39173, 00800 Nairobi,
                        Kenya.
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
                        Nairobi: 0748 811 909, <br></br>Eldoret: 0746 963 107
                        <br></br>
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
                        <a href="mailto:info@farajacancersupport.org">
                          info@farajacancersupport.org
                        </a>
                      </p>
                    </li>
                    <li>
                      <div className="top">
                        <div className="icon">
                          <IoShareSocialSharp className="location" />
                        </div>
                        <div className="title">
                          <h3>Socials</h3>
                        </div>
                      </div>
                      <div className="row social-area">
                        <div className="col-md-6 box-1">
                          <ul className="sidebar-socials">
                            <li>
                              <a>
                                <Image src={facebook} height={30} width={30} />
                                <span className="icon-name">Facebook</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <Image src={twitter} height={30} width={30} />
                                <span className="icon-name">Twitter</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <Image src={youtube} height={30} width={30} />
                                <span className="icon-name">YouTube</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <Image src={linkedin} height={30} width={30} />
                                <span className="icon-name">Linkedin</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="sidebar-socials">
                            <li>
                              <a>
                                <Image src={instagram} height={30} width={30} />
                                <span className="icon-name">Instagram</span>
                              </a>
                            </li>

                            <li>
                              <a>
                                <Image src={tiktok} height={30} width={30} />
                                <span className="icon-name">TikTok</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <Image src={whatsapp} height={30} width={30} />
                                <span className="icon-name">Whatsapp</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
