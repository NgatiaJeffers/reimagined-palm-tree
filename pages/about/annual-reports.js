import Link from "next/link";
import Image from "next/image";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

import report from "../../public/svgs/report.svg";

const AnnualReports = () => {
  return (
    <>
      <section className="breadcrumb-area page-breadcrumb">
        <div className="container">
          <div className="about-title text-center">
            <div className="sub-title">
            </div>
            <h2>Annual Reports</h2>
          </div>
        </div>
      </section>
      <section className="annual-reports-section">
        <div className="container">
          <div className="row">
            <div className="col annual-report-area">
              <div className="post-details-1">
                <h1 className="text-left">Annual Reports</h1>
                <p>
                  Our annual reports show how, with your support, we have
                  achieved our strategic objectives of giving hope, help and
                  life to cancer patients and their caregivers.
                </p>
                <p>
                  Our accounts are audited by RSM Eastern Africa and reflect
                  where our income comes from and most importantly how we have
                  spent it.
                </p>
                <p>
                  Our reports are published after every financial year, that is,
                  after May each year. If you have any questions about our
                  financial reports please email info@farajacancersupport.org
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section-padddign timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-lg-6">
              <div className="section_heading text-left">
                <h3>Our Annual Reports</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-12">
              <div className="timeline-area">
                {/* Timeline Content */}
                <div className="timeline-box">
                  <div className="timeline-date">
                    <p>2023</p>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-lg-4 col-md-6">
                      <div className="timeline-content">
                        <div className="timeline-icon">
                          <AiOutlineBarChart className="chart-icon"/>
                        </div>
                        <div className="timeline-text">
                            <button className="ripple-effect">View</button>
                          <p>Faraja Financial Report 2023 <BiCalendar /></p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-area">
                {/* Timeline Content */}
                <div className="timeline-box">
                  <div className="timeline-date">
                    <p>2022</p>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-lg-4 col-md-6">
                      <div className="timeline-content">
                        <div className="timeline-icon">
                          <AiOutlineBarChart className="chart-icon"/>
                        </div>
                        <div className="timeline-text">
                            <button className="ripple-effect">View</button>
                          <p>Faraja Financial Report 2022 <BiCalendar /></p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-area">
                {/* Timeline Content */}
                <div className="timeline-box">
                  <div className="timeline-date">
                    <p>2021</p>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-lg-4 col-md-6">
                      <div className="timeline-content">
                        <div className="timeline-icon">
                          <AiOutlineBarChart className="chart-icon"/>
                        </div>
                        <div className="timeline-text">
                            <button className="ripple-effect">View</button>
                          <p>Faraja Financial Report 2021 <BiCalendar /></p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnnualReports;
