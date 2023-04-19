import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import MenuItems from './MenuItems';
import { MENU_LIST } from "./MenuList";
import logo from "../../public/logo.png";

const NavbarLayout = () => {
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);

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
                  <Image src={logo} height="60" width={"120"} alt="Logo"/>
                </a>
              </Link>
              <button onClick={toggleOpen} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
              </button>
          
              <div className="nav-items collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                  {MENU_LIST.map((menu, idx) => {
                    // Prop drilling
                    return <MenuItems items={menu} key={idx} />;
                  })}
                </ul>
                <ul className="navbar-nav ms-auto d-lg-inline-flex">
                  <Link href={"/donate"}>
                    <a className="btn-donate">Make a Donation</a>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </>
        
    )

}

export default NavbarLayout;