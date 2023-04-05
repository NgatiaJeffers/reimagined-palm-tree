import React from "react";

const BreadCrumb = ({ title }) => {
  return (
    <section className="breadcrumb-area page-breadcrumb">
      <div className="container">
        <div className="about-title text-center">
          <div className="sub-title"></div>
          <h2 className="breadcrumb-title">{title}</h2>
          <div className="border-box"></div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
