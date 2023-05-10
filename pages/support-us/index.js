import React, { Fragment } from "react";
import Link from "next/link";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import Accordion from "../../components/atoms/Accordion"
;
const SupportUsPage = () => {
  return (
    <Fragment>
      <BreadCrumb title={"Support Us"} />
      <section className="support-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div className="content-box">
                  <h2 className="heading-title">Become a part of the <span className="underline">community</span></h2>
                  <p>
                    By supporting Faraja you will become a part of the 
                    community that is working hard to fight the major 
                    cancer issues we are facing here in Kenya. 
                    As we rely entirely on voluntary donations 
                    and support, so by getting involved you will 
                    make a huge difference.
                  </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <h2 className="sub-heading">The different ways you can get involved</h2>
            </div>
          </div>
          <div className="row">
          <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div className="content-box">
                <Accordion panels={panels} />
              </div>
            </div>
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div className="content-box">
                <Accordion panels={panels} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SupportUsPage;

const panels = [
  {
    label: "Become a monthly regular giver",
    content: "Just KSH 500 a month could help to provide paint, paper and brushes towards our Art Therapy classes for children with cancer."
  }
]
