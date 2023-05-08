import Link from "next/link";
import Image from "next/image";

import { FaRibbon } from "react-icons/fa";
import BreadCrumb from "../../../components/atoms/Breadcrumb";
import common from "../../../public/common.jpg";
import shape from "../../../public/shape.png";
import DonateSidebar from "../../../components/shared/DonateSidebar";

const BreastPage = () => {
  return (
    <>
      <BreadCrumb title={"Breast"} />
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
                          <h3>Breast Cancer</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          Breast cancer is a disease in which cells in the
                          breast grow out of control. A breast is made up of
                          three main parts which are:
                        </p>
                        <div className="featured-text">
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Lobules which are the glands that produce milk.
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Ducts which are tubes that carry milk to the
                                nipple.
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Lastly, the connective tissue, which consists of
                                fibrous and fatty tissues. The connective tissue
                                surrounds and holds everything together.
                              </p>
                            </div>
                          </div>
                        </div>
                        <p>
                          Most breast cancers begin in the ducts or lobules.
                          Moreover, breast cancer can spread outside the breast
                          to other parts of the body. At this point, it is said
                          that the cancer has metastasized. It should be noted
                          that breast cancer affects both men and women but is
                          more common in women.
                        </p>
                        <p>
                          According to studies and reports, there is an
                          estimation of 2.1 million new cases being diagnosed
                          each year, representing 24.2% of all cancer diagnoses
                          among women. This therefore means that 1 out of 4
                          cancer patients is diagnosed with breast cancer. Here
                          in Kenya, breast cancer is the most commonly diagnosed
                          cancer with an annual incidence of 6,000 new cases
                          (16%) and 2,500 cancer-related deaths (11%) making it
                          the 2nd cause of cancer death in Kenya.
                        </p>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>The risk factors of breast cancer are:</h3>
                          <div className="title-shape-1">
                            <Image src={shape} />
                          </div>
                        </div>
                        <div className="featured-text">
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Age - Most breast cancer in women occurs from
                                the age of 50 or older.
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Not being physically active. - Women who are not
                                physically active have a higher chance of risk
                                of getting breast cancer. So get out there and
                                exercise! It is recommended that a person should
                                do 30 minutes of moderate exercise every day.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>What are the symptoms of Breast Cancer?</h3>
                          <div className="title-shape-1">
                            <Image src={shape} />
                          </div>
                        </div>
                        <div className="featured-text">
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>New lump in the breast or armpit.</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Thickening or swelling of the breast.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <p>
                          At Faraja we offer care for our patients such as our
                          popular breast cancer support group. The importance of
                          this support group is that you are educated on how to
                          navigate through this new phase and also have the
                          opportunity to interact with people who are on the
                          same journey as you. Join Faraja Cancer Support Trust
                          to enjoy all the services we offer and let us support
                          your on this journey.
                        </p>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>REFERENCES</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          1. Centres for Disease Control and Prevention: What is
                          Breast Cancer Screening? Available at
                          https://www.cdc.gov/cancer/breast/basic_info/screening.html
                        </p>
                        <p>
                          2. Republic of Kenya, Ministry of Health: CS Health
                          Kenya inaugurates board to fight cancer menace. July
                          31, 2019. Available at
                          https://www.health.go.ke/cs-health-kenya-inaugurates-board-to-fight-cancer-menace
                        </p>
                        <p>
                          3.
                          https://www.cancerresearchuk.org/about-cancer/breast-cancer/treatment
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
    </>
  );
};

export default BreastPage;
