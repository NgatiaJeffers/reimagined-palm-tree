import Link from "next/link";
import Image from "next/image";

import { FaRibbon } from "react-icons/fa";
import BreadCrumb from "../../../components/atoms/Breadcrumb";
import common from "../../../public/common.jpg";
import shape from "../../../public/shape.png";
import DonateSidebar from "../../../components/shared/DonateSidebar";

const ColonPage = () => {
  return (
    <>
      <BreadCrumb title={"Colon"} />
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
                          <h3>Colon Cancer</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          Colon cancer is a type of cancer that begins in the
                          large intestine (colon). Though colon cancer can
                          affect someone at any age, it typically affects older
                          adults. This type of cancer begins as small,
                          noncancerous (benign) clumps of cells called polyps
                          that form on the inside of the colon and over time
                          some of these polyps can become cancerous. For this
                          reason, it is important to regularly go for screening
                          tests for early detection and remove the polyps before
                          they turn into cancer.
                        </p>
                        <p>
                          Colon cancer is at times called colorectal cancer
                          (CRC) which is a term that combines colon cancer and
                          rectal cancer (begins in the rectum). Colorectal
                          cancer (CRC) is the third most common cancer worldwide
                          and the second leading cause of cancer death globally.
                        </p>
                        <p>
                          According to Globocan data, there were 1,354 estimated
                          new cases and 937 deaths from colorectal cancer in
                          2018 in Kenya. There is a high probability that there
                          were more cases and deaths that were not reported or
                          even diagnosed. In an earlier Kenyan study, mortality
                          was worse for men. Moreover, colorectal cancer is
                          stable and decreasing in other developed countries
                          whilst unfortunately increasing here in Africa. This
                          is probably as a result of the introduction of a
                          "Western diet" which has led to an increase in obesity
                          cases as well as a higher intake of tobacco and
                          alcohol.
                        </p>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>What are the risk factors for colon cancer?</h3>
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
                                Older age - Though colon cancer can be diagnosed
                                at any age, it is most common in people older
                                than 50
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Family history of colon cancer - One is more
                                likely to develop colon cancer if he/she has a
                                blood relative who has had the disease. If more
                                than one family member has colon cancer or
                                rectal cancer, the risk is even greater.
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Diabetes - People with diabetes have an
                                increased risk of colon cancer.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>
                            What can you do to reduce your risk of getting colon
                            cancer? With these risk factors, the best thing is
                            to adopt a healthy lifestyle
                          </h3>
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
                                Eat a variety of fruits, vegetables and whole
                                grains - Fruits, vegetables and whole grains
                                contain vitamins, minerals, fiber and
                                antioxidants, that may play a role in cancer
                                prevention.
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Exercise most days of the week - Try to get at
                                least 30 minutes of exercise on most days. Brisk
                                walking is an excellent example.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>Signs and symptoms of colon cancer are:</h3>
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
                                Persistent abdominal discomforts, such as
                                cramps, gas or pain
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Unexplained weight loss</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <p>
                          If you are experiencing either of these signs and
                          symptoms for more than 2 weeks, it is recommended that
                          you visit your doctor for a check-up.
                        </p>
                        <p>
                          Faraja Cancer Support Trust offers sessions such as
                          nutrition to advise our patients on what to eat and
                          what not to eat. Also, there are Zumba classes which
                          are not only fun but also a fantastic form of
                          exercise. Therefore, join us to enjoy these free
                          complementary services and let us support you and your
                          loved ones on this journey.
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
                          1. Katsidzira L, Gangaidzo I, Thomson S, Rusakaniko S,
                          Matenga J, Ramesar R. The shifting epidemiology of
                          colorectal cancer in sub-Saharan Africa. Lancet
                          Gastroenterol Hepatol. 2017; 2:377–383.
                        </p>
                        <p>
                          2. Mayo Clinic. Colon cancer. Available at
                          https://www.mayoclinic.org/diseases-conditions/colon-cancer/symptoms-causes/syc-20353669
                        </p>
                        <p>
                          3. Saidi H, Nyaim EO, Githaiga JW, et al. Colorectal
                          cancer surgery trends in Kenya, 1993-2005. World J of
                          Surg, 2008; 32:217-223
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

export default ColonPage;
