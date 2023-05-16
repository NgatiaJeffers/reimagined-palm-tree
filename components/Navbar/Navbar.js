import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import MenuItems from "./MenuItems";
import { MENU_LIST } from "./MenuList";
import logo from "../../public/logo.png";
import HamburgerMenu from "./HamburgerMenu";

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

  useEffect(() => {
    const currentRoute = router.pathname;

    // Set the activeRoute state to the current route.
    setActiveRoute(currentRoute);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            {/* <ul className="navbar-nav ms-auto d-lg-inline-flex">
                <button type="button" id="sidebarCollapse" class="btn btn-primary">
                  <i class="fa fa-bars"></i>
                  <span class="sr-only">Toggle Menu</span>
              </button>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLayout;
