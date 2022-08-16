import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebook, faTwitter, faMailchimp } from "@fortawesome/free-brands-svg-icons";

import logo from "../public/assets/images/logo.png"
import challenge from "../public/assets/images/challenge.jpg"
import ride from "../public/assets/images/ride.jpg"

const Navbar = () => {
    const [ scrollPosition, setScrollPosition ] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    const handleScroll = () => {
        const header = document.querySelector("#sticky-header");
        const position = window.pageYOffset;

        if (position > 400) {
            header.classList.remove("sticky");
        }
        if (position < 401) {
            header.classList.add("sticky");
        }

        setScrollPosition(position);
    };


    return (
        <header>
            <div className="header-area">
                <div className="header-top-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-md-12 col-lg-8">
                                <div className="short-contact-list">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faPhone}/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faMailchimp}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-lg-4">
                                <div className="social-media-links d-none d-lg-block">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faYoutube}/>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3">
                                <div className="logo">
                                    <a href="#">
                                        <Image 
                                            src={logo} 
                                            alt="Faraja Logo"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-9 xol-lg-9">
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">About
                                                    <FontAwesomeIcon 
                                                        icon={faAngleDown} 
                                                        className="dropdown-icon"    
                                                    />
                                                </a>
                                                <ul className="submenu">
                                                    <li><a href="#">Our Work with children</a></li>
                                                    <li><a href="#">Annual Reports</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">About
                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                </a>
                                                <ul className="submenu">
                                                    <li><a href="#">Our Work with children</a></li>
                                                    <li><a href="#">Annual Reports</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="donate-button">
                                        <div className="donate-btn d-none d-lg-block">
                                            <a data-scroll-nav="1" href="#">Make a Donate</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Navbar;