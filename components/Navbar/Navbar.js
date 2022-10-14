import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.png";
import Button from "../atoms/Button";

const NavbarLayout = () => {
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const toggleOpen = () => {
      if (typeof document !== 'undefined') {
        setIsActive(!isActive);
      }
    }

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
            header.classList.remove("is-active");
        }
        if (position > 401) {
            header.classList.add("is-active");
        }

        setScrollPosition(position);
        
    };

    return (
        <>
          <nav id="sticky-header" className="navbar navbar-expand-lg navbar-light p-3">
            <div className="container">
              <Link href={"/"}>
                <a className="navbar-brand">
                  <Image src={logo} height="60" width={"110"}/>
                </a>
              </Link>
              <button onClick={toggleOpen} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
              </button>
          
              <div className="nav-items collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" data-bs-trigger="hover focus">
                      <li><a className="dropdown-item" href="#">Our work with children</a></li>
                      <li><a className="dropdown-item" href="#">Annual reports</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Therapy
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <span className="dropdown-title">Cancer Awareness</span>
                        <li><a className="dropdown-item" href="#">Prostate</a></li>
                        <li><a className="dropdown-item" href="#">Colon</a></li>
                        <li><a className="dropdown-item" href="#">Breast</a></li>
                        <li><a className="dropdown-item" href="#">Childhood</a></li>
                    </ul>
                  </li> 
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Events
                    </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Events in Nairobi</a></li>
                        <li><a className="dropdown-item" href="#">Evenst in Eldoret</a></li>
                      </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">Testimonials</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      News & Media
                    </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Updates on Faraja Support Trust</a></li>
                        <li><a className="dropdown-item" href="#">Evenst in Eldoret</a></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Gallery
                    </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Faraja videos</a></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Support us
                    </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">The Faraja Medical Support Fund (FMSF)</a></li>
                      </ul>
                  </li> 
                </ul>
                <ul className="navbar-nav ms-auto d-lg-inline-flex">
                    <Button as="a" href="#" filled secondary >Donate</Button>
                </ul>
              </div>
            </div>
          </nav>
        </>
        
    )

}

export default NavbarLayout;