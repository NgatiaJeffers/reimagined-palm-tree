import React, { Fragment } from "react";
import Link from "next/link";
import BreadCrumb from "../../components/atoms/Breadcrumb";

const SupportUsPage = () => {
  return (
    <Fragment>
      <BreadCrumb title={"Support Us"} />
      <section className="blog-area">
        <div className="container">
          <div className="blog-title text-center">
            <div className="sub-title">
              <div className="inner text-center">
                <h3>Become a part of the community</h3>
              </div>
            </div>
            <h2>Support Us</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SupportUsPage;
