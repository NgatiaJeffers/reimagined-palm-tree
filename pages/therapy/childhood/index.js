import Link from "next/link";
import Image from "next/image";

import { FaRibbon } from "react-icons/fa";
import BreadCrumb from "../../../components/atoms/Breadcrumb";
import common from "../../../public/common.jpg";
import shape from "../../../public/shape.png";
import DonateSidebar from "../../../components/shared";

const ChildhoodPage = () => {
  return (
    <>
      <BreadCrumb title={"Childhood Cancer"} />
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
                          <h3>Childhood Cancer</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                        The cancer ribbon symbolising childhood cancer awareness is golden in solidarity with children who are going through cancer treatment
                        </p>
                        <p>
                        Here is some information about childhood cancer that can help you learn more about the cancer scene in Kenya and what Faraja Cancer Support is doing to help ease the burden.
                        </p>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>Top line statistics</h3>
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
                              Globally, the leading types of childhood cancers are leukaemia and brain tumours.
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                              In Sub-Saharan Africa, the most common types are non-Hodgkin lymphoma, kidney cancer and bone marrow cancer.
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                              In Kenya the most common type of childhood cancer is leukaemia followed by retinoblastoma (eye cancer) and Wilms Tumour (kidney cancer).
                              </p>
                            </div>
                            <p>Sadly, only 20% of children with cancer in Kenya survive compared to the 80% who survive in developed countries. This can be attributed to the high cost of medicine, lack of proper community awareness, late diagnosis as well as the lack of specialized training.</p>
                            <p>Faraja is actively involved in the support of children with cancer in Kenya through our crafts for cure program. Our art and music therapy began in 2015 and involves us visiting the children at paediatric oncology ward at the Kenyatta National Hospital. We started with about 50 children in one ward and now see about 400 children every week from 7 different wards. In 2019, we begun visiting the children at the paediatric ward at the Moi Teaching and Referral Hospital in Eldoret. We also give the children milk and fruit to not only supplement their diet but also give them a sweet treat, especially for those who may not receive regular visitors.</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>
                          Common signs of childhood cancer
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
                              Headaches
                              </p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                              Nausea
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>Children tend to present with different types of cancers to adults. The most prevalent cancers in children are:

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
                              Leukemia
                              </p>
                              <p>This is a malignant disorder of the white blood cells that is caused by an abnormal differentiation of cells in the bone marrow. The accumulation of these cells causes other blood cells to be suppressed, resulting in bone marrow failure.</p>
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

export default ChildhoodPage;
