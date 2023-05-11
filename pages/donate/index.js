import React, { Fragment } from "react";
import Image from "next/image";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import DonateForm from "../../components/Form/DonateForm";

import mpesa from "../../public/mpesa.png"

const DonatePage = () => {
  return (
    <Fragment>
      <BreadCrumb title={"Make a Donation"} />
      <section className="wide-tb-100 donate-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h1 className="heading-main">
                Make a <span className="underline">Donation</span>
              </h1>
              <p>
                With over 40,000 new cases diagnosed annually, finding a safe
                haven for cancer patients and their carers is very important.
                That is why Faraja Cancer Support Trust offers services to
                complement medical treatment through our free complementary
                therapies, support group meetings and financial assistance. We
                have a place, a safe haven for cancer patients to access our
                free services which has enabled us to make a positive influence
                in the journey of over 2000 cancer patients. We are sustainable
                and are here for a long time. The bottom line is we bring help,
                hope and life.
              </p>
              <p>
                By supporting Faraja you will become a part of the community
                that is working hard to fight the major cancer issues we are
                facing here in Kenya. As we rely entirely on voluntary donations
                and support, so by getting involved you will make a huge
                difference. It is only together that we can help fight cancer.
              </p>
              <div className="donation-wrap">
                <Image 
                  src={mpesa}
                  width={100}
                  height={70}
                />
                <p>
                  Use our secure M-pesa payment gateway to donate through our
                  paybill 509700. You will receive a pop up on your phone to
                  confirm your donation. Enter your pin and then click ok.
                </p>
                <DonateForm />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="more-donate-info"></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DonatePage;
