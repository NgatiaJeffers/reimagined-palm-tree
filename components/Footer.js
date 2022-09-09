import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faMailchimp } from "@fortawesome/free-brands-svg-icons";

import logo from "../public/logo.png"
import challenge from "../public/challenge.jpg"
import ride from "../public/ride.jpg"


const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <a>
                                        <Image src={logo} alt="Faraja Logo"/>
                                    </a>
                                </div>
                                <h3> Did you know? </h3>
                                <p className="address_text">Faraja means &apos;Comfort&apos; in Swahili and was founded in 2010 by Shaira Adamali.</p>
                                <p className="address_text">Our Main Objective is to provide a safe haven for patients and their carers by providing emotional, practical and healing support.</p>
                                <div className="social_links">
                                    <ul>
                                        <li>
                                            <a >
                                            <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </li>
                                        <li>
                                            <a >
                                            <FontAwesomeIcon icon={faFacebook} />
                                            </a>
                                        </li>
                                        <li>
                                            <a >
                                            <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </li>
                                        <li>
                                            <a >
                                            <FontAwesomeIcon icon={faMailchimp} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Quick Links
                                </h3>
                                <ul className="links">
                                    <li><a >About Us</a></li>
                                    <li><a >Gallery</a></li>
                                    <li><a >Testimonials</a></li>
                                    <li><a >Latest News</a></li>
                                    <li><a >Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Contacts
                                </h3>
                                <div className="contacts">
                                    <p>
                                        Nairobi: 0748 811 909 <br/>
                                        Eldoret: 0746 963 107 <br/>
                                        info@farajacancersupport.org
                                        P. O. Box 00623-00800
                                        Nairobi, Kenya.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Top News
                                </h3>
                                <ul className="news_links">
                                    <li>
                                        <div className="thumb">
                                            <a >
                                                <Image src={ride} alt="Faraja Ride"/>
                                            </a>
                                        </div>
                                        <div className="info">
                                            <a>
                                                <h4>School for African
                                                    Children
                                                </h4>
                                            </a>
                                            <span>Jun 12, 2019</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <a >
                                                <Image src={challenge} alt="Faraja Challenge"/>
                                            </a>
                                        </div>
                                        <div className="info">
                                            <a >
                                                <h4>School for African
                                                    Children
                                                </h4>
                                            </a>
                                            <span>Jun 12, 2019</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="row">
                        <div className="bordered_1px"></div>
                        <div className="col-xl-12">
                            <div className="copy_right text-left">
                                <p>
                                    Copyright &copy; {getCurrentYear()} Faraja Cancer Support. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;