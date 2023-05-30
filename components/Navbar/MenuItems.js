import { useState, useEffect } from "react";
import Link from "next/link";

import Dropdown from "./Dropdown";
import { useRouter } from "next/router";

const MenuItems = ({ activeRoute, setActiveRoute, items }) => {
  const router = useRouter();
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = (e) => {
      e.stopPropagation();
    };

    const sectionElement = document.querySelector('.dropdown-menu');
    sectionElement.addEventListener('scroll', handleScroll);

    return () => {
      sectionElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropDownSelect = (route) => {
    setActiveRoute(route);
    router.push(route);
    setActiveSubMenu(route);
  };

  const { subMenu, title, url } = items;

  return (
    <li className="onMobile nav-item dropdown position-static">
      {subMenu ? (
        <>
          <a
            className={`nav-link dropdown-toggle ${
              activeRoute === activeSubMenu ? "active" : ""
            }`}
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
          >
            {title}
          </a>
          <Dropdown
            subMenus={subMenu}
            handleDropDownSelect={handleDropDownSelect}
          />
        </>
      ) : (
        <Link href={url}>
          <a className={`nav-link ${activeRoute === url ? "active" : ""}`}>
            {title}
          </a>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;