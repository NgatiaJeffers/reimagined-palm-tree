import React, { Fragment } from "react";
import Image from "next/image";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import common from "../../public/common.jpg";
import shape from "../../public/shape.png";
import DonateSidebar from "../../components/shared/DonateSidebar";

const FarajaMedicalSupportFund = () => {
  return (
    <Fragment>
      <BreadCrumb title={"The Faraja Medical Support Fund (FMSF)"} />
      <section className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="details-content">
                <div className="custom-blog">
                  <div className="img-holder">
                    <div className="img-box">
                      <Image src={common} />
                    </div>
                  </div>
                  <div className="text-holder">
                    <div className="text-area">
                      <div className="text-1">
                        <div className="title">
                          <h3>Giving hope and a real chance of recovery</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                            At inception, Faraja’s main mandate was to provide information
                            and complementary therapies to support patients as they went
                            through their chemotherapy and radiotherapy treatments.
                            However, with an increased cancer burden in Kenya, there has
                            been a higher demand for financial assistance for patients.
                            This is largely due to the reasons below:
                        </p>
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item">
                                Cancer treatment is hugely expensive. A good number of
                                people affected by cancer can’t afford their treatment. This
                                leads to them not taking treatment.{" "}
                            </li>
                            <li className="list-group-item">
                                During a conference for East Africa Insurance that was held
                                in February of 2017, it was revealed that only 12% of
                                Kenyans have medical insurance. This translates to about
                                480,000 Kenyans who have insurance coverage out of the
                                country’s over 45 million people population. Not everyone is
                                able to pay for the NHIF and although NHIF has come in
                                handy, it is not fully covering for the treatment.{" "}
                            </li>
                        </ol>
                        <p>
                            For these reasons, Faraja Cancer Support Trust launched the
                            Faraja Medical Support Fund (FMSF) on 12th November 2016 with
                            the aim of developing an effective system which will enable
                            disadvantaged adults and children with cancer to obtain the
                            right treatment at the right time. This brings hope and a real
                            chance of recovery. The mission is to galvanize the support
                            from various groups with the vision and capacity to come
                            together and make a meaningful and long-lasting impact by
                            making sizable donations to the fund.
                        </p>
                        <p>
                            The treatment that Faraja funds is provided at private and
                            government institutions in Nairobi. Faraja aims to raise Kshs
                            100,000,000 (US$1,000,000). A corpus of funds that, when
                            invested, will ensure up to 50 patients receive treatment
                            every year. The fund will cover medical costs such as surgery,
                            brachytherapy, chemotherapy, radiation and hormonal therapy.
                            To qualify for a grant, individuals will submit an application
                            form which will be vetted monthly by members of an expert
                            panel.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DonateSidebar />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FarajaMedicalSupportFund;
