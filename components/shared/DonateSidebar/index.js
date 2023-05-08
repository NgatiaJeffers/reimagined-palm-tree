import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon from "../../public/hand.png";

const DonateSidebar = () => {
  return (
    <div className="col-xl-4">
      <div className="sidebar-content-box">
        <div className="tags-area">
          <div className="tags">
            <div className="title">
              <h3>Tags</h3>
            </div>
            <div className="tagcloud">
              <Link href={"/"}>
                <a>Prostate</a>
              </Link>
              <Link href={"/"}>
                <a>Breast</a>
              </Link>
              <Link href={"/"}>
                <a>Colon</a>
              </Link>
              <Link href={"/"}>
                <a>Childhood</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="sidebar-donate-box">
          <div className="icon">
            <Image src={icon} />
          </div>
          <p>Small Donation Bigger Impact</p>
          <h2>
            Faraja Cancer
            <br />
            Support Trust
          </h2>
          <div className="btn-box">
            <Link href={"/"}>
              <a className="btn-donate">Make a Donation</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSidebar;