import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
import Image from "next/image";
import { Navbar, Button, Text, Link, Card, Spacer, Radio, useTheme } from "@nextui-org/react";

import logo from "../public/assets/images/logo.png";

const NavbarLayout = () => {
    const [ scrollPosition, setScrollPosition ] = useState(0);

    const {isDark} = useTheme();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    const handleScroll = () => {
        // const header = document.querySelector("#sticky-header");
        // const position = window.pageYOffset;

        // if (position < 400) {
        //     header.classList.remove("sticky-bar");
        // }
        // if (position > 401) {
        //     header.classList.add("sticky-bar");
        // }

        // setScrollPosition(position);
        
    };
    const collapseItems = [
        "Home",
        "About",
        "Therapy",
        "Events",
        "News & Media",
        "Gallery",
        "Support Us",
        "Contact",
    ]

    return (
        <>
            <Navbar isBordered variant="sticky">
             <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                css={{
                    "@xs": {
                    w: "12%",
                    },
                }}>
                <Image src={logo} height="30" width={"70"}/>
                </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight">
                <Navbar.Link isActive href="">Home</Navbar.Link>
                <Navbar.Link href="">About</Navbar.Link>
                <Navbar.Link href="">Therapy</Navbar.Link>
                <Navbar.Link href="">Events</Navbar.Link>
                <Navbar.Link href="">News & Media</Navbar.Link>
                <Navbar.Link href="">Gallery</Navbar.Link>
                <Navbar.Link href="">Support Us</Navbar.Link>
                <Navbar.Link href="">Contact</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat as={Link} color={"warning"} href="#">
                        Make a Donation
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse disableAnimation={true}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
        </Navbar>
        </>
        
    )

}

export default NavbarLayout;