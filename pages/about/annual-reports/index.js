import Link from "next/link";
import Image from "next/image";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

import report from "../../../public/svgs/report.svg";
import BreadCrumb from "../../../components/atoms/Breadcrumb";

const AnnualReports = () => {
  return (
    <>
      <BreadCrumb title={"Annual Reports"} />
      <section className="support-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-6 col-md-12">
              <div className="content-box annual-reports">
                <h2 className="heading-title">
                  Our <span className="underline">Annual Reports</span>
                </h2>
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
            <div className="col-xl-6 col-12 col-lg-6 col-md-12 timeline-column">
              <div className="timeline-area">
                {/* Timeline Content */}
                <div className="timeline-box">
                  <div className="timeline-date">
                    <p>2023</p>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-lg-12 col-md-12">
                      <div className="timeline-content">
                        <div className="timeline-icon">
                          <AiOutlineBarChart className="chart-icon" />
                        </div>
                        <div className="timeline-text">
                          <button className="ripple-effect">View</button>
                          <p>
                            Faraja Financial Report 2023 <BiCalendar />
                          </p>
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
                    <div className="col col-12 col-lg-12 col-md-12">
                      <div className="timeline-content">
                        <div className="timeline-icon">
                          <AiOutlineBarChart className="chart-icon" />
                        </div>
                        <div className="timeline-text">
                          <button className="ripple-effect">View</button>
                          <p>
                            Faraja Financial Report 2022 <BiCalendar />
                          </p>
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
                    <div className="col col-12 col-lg-12 col-md-12">
                      <div className="timeline-content">
                        <div className="timeline-icon">
                          <AiOutlineBarChart className="chart-icon" />
                        </div>
                        <div className="timeline-text">
                          <button className="ripple-effect">View</button>
                          <p>
                            Faraja Financial Report 2021 <BiCalendar />
                          </p>
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
