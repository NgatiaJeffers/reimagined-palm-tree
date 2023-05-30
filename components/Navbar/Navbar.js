import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";
import { MdEventNote } from "react-icons/md";
import { FcDonate } from "react-icons/fc";

import MenuItems from "./MenuItems";
import { MENU_LIST } from "./MenuList";
import logo from "../../public/logo.png";


const NavbarLayout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [activeRoute, setActiveRoute] = useState(null);

  const router = useRouter();

  const toggleOpen = () => {
    if (typeof document !== "undefined") {
      setIsActive(!isActive);
    }
  };

  // useEffect(() => {




  useEffect(() => {
    const currentRoute = router.pathname;

    // Set the activeRoute state to the current route.
    setActiveRoute(currentRoute);

    window.addEventListener("scroll", handleScroll, { passive: true });

    const megaMenus = document.querySelectorAll('.navbar .dropdown-menu');

    const handleDocumentClick = (e) => {
      const target = e.target;
      const isInsideMenu = target.closest('.navbar .dropdown-menu');
      const isOpenMenu = target.classList.contains('show') && target.classList.contains('dropdown-toggle');

      if (!isInsideMenu && !isOpenMenu) {
        megaMenus.forEach((megaMenu) => {
          const menuToggle = megaMenu.querySelector('.dropdown-toggle');
          if (menuToggle) {
            menuToggle.classList.remove('show');
          }
        });
      }
    };

    const handleDocumentReady = () => {
      // Get the mobile toggle button and the navbar collapse element
      const mobileToggleButton = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');

      // Auto-close mobile menu when a link is clicked
      document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          if (navbarCollapse.classList.contains('show')) {
            mobileToggleButton.click();
          }
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDocumentReady);
    } else {
      handleDocumentReady();
    }

    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('DOMContentLoaded', handleDocumentReady);
    };
  }, [scrollPosition, router.pathname]);

  const handleScroll = () => {
    const header = document.querySelector("#sticky-header");
    const position = window.pageYOffset;

    if (position < 100) {
      header.classList.remove("is-active");
    }
    if (position > 101) {
      header.classList.add("is-active");
    }

    setScrollPosition(position);
  };

  return (
    <>
      <nav
        id="sticky-header"
        className="navbar navbar-expand-lg navbar-light p-3"
      >
        <div className="container">
          <Link href={"/"}>
            <a className="navbar-brand">
              <Image src={logo} height="60" width={"120"} alt="Logo" />
            </a>
          </Link>
          <button
            onClick={toggleOpen}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </button>

          <div
            className="nav-items collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto ">
              {MENU_LIST.map((menu, idx) => {
                // Prop drilling
                return (
                  <MenuItems
                    activeRoute={activeRoute}
                    setActiveRoute={setActiveRoute}
                    items={menu}
                    key={idx}
                  />
                );
              })}
            </ul>
            <ul className="navbar-nav ms-auto d-lg-inline-flex">
              <div className="row justify-content-center">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="btn-group support-us-dropdown">
                    <button
                      id="navbarDropdown"
                      type="button"
                      className="btn-donate dropdown-toggle text-start"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      <AiFillHeart className="icon" />
                      Support Us
                    </button>
                      <div
                        className="dropdown-menu dropdown-menu-end animate slideIn"
                        aria-labelledby="navbarDropdown"
                      >
                        <Link href={"/donate"}>
                          <a className="dropdown-item color-1" href="#">
                            <FcDonate className="icon" />
                            Donate
                          </a>
                        </Link>
                        <Link href={"/fundraise"}>
                          <a className="dropdown-item color-2" href="#">
                            <GiReceiveMoney className="icon" />
                            Fundraise
                          </a>
                        </Link>
                        <Link href={"/volunteer"}>
                          <a className="dropdown-item color-3" href="#">
                            <TbHeartHandshake className="icon" />
                            Volunteer
                          </a>
                        </Link>
                        <Link href={"/events"}>
                          <a className="dropdown-item color-4" href="#">
                            <MdEventNote className="icon" />
                            Find Event
                          </a>
                        </Link>
                        <Link href={"/in-kind-donation"}>
                          <a className="dropdown-item color-5" href="#">
                            <BiDonateHeart className="icon" />
                            In Kind Donation
                          </a>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLayout;
