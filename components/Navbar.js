import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../public/assets/images/logo.png";

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

        if (position < 400) {
            header.classList.remove("sticky-bar");
        }
        if (position > 401) {
            header.classList.add("sticky-bar");
        }

        setScrollPosition(position);
    };

    return (
        <div className="header-area">
            <div id="sticky-header" className="main-header">
                <div className="header-bottom">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="#">
                                        <Image src={logo} alt="Faraja Logo"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                    {/* MAin Menu */}
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Therapy</a></li>
                                                <li><a href="#">Events</a></li>
                                                <li><a href="#">News & Media</a>
                                                    <ul className="submenu">
                                                        <li><a href="#">News</a></li>
                                                        <li><a href="#">Media Details</a></li>
                                                        <li><a href="#">Blog</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Gallery</a></li>
                                                <li><a href="#">Support Us</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* Donate Button */}
                                    <div className="header-right-btn d-none d-lg-block ml-20">
                                        <a href="#"
                                        className="highlight-button btn btn-large button xs-margin-bottom-five"
                                        data-abc="true">Make a Donation</a>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile Meni */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;