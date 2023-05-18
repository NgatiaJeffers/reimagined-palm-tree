import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon from "../../../public/hand.png";

const DonateSidebar = () => {
  return (
    <div className="col-xl-4">
      <div className="sidebar-content-box">
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
            <Link href={"/donate"}>
              <a className="btn-donate">Make a Donation</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSidebar;
