import Link from "next/link";
import Image from "next/image";

import { FaRibbon } from "react-icons/fa";
import BreadCrumb from "../../../components/atoms/Breadcrumb";
import common from "../../../public/common.jpg";
import shape from "../../../public/shape.png";
import DonateSidebar from "../../../components/shared";


const ProstatePage = () => {
  return (
    <>
      <BreadCrumb title={"Prostate"} />
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
                          <h3>Prostate Cancer</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          The prostate gland is found only in males and it secretes 
                          fluid that protects sperm. Prostate cancer, therefore, 
                          is cells growing out of control in the prostate gland. 
                          The gland is found below the bladder and in front of the 
                          rectum. Some prostate cancers grow and spread quickly, 
                          but most grow slowly. That is why it mostly affects 
                          older men (40 years and above).
                        </p>
                        <p>
                          There are different types of prostate cancers, however, 
                          almost all of them are adenocarcinomas. These are cancers 
                          that develop from the gland cell.
                        </p>
                        <p>
                          Globally, prostate cancer ranks as the second most frequently 
                          diagnosed cancer among men, with the highest mortality rates 
                          being in Asia and Africa. Here in Kenya, this is the most 
                          common male cancer. According to the latest World Health 
                          Organization (WHO) data published in 2018 mortality rates 
                          in Kenya reached 0.86% of total deaths. This means that
                          40 people per 100,000 die of prostate cancer. Making Kenya 
                          number 26 in the world.
                        </p>
                        <p>
                          This high mortality rate would be greatly reduced if men 
                          would go for screening which remains the key strategy 
                          for early detection. However, lack of education, 
                          awareness and negative beliefs have been barriers 
                          leading to low screening rates.
                        </p>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>
                            At the early stages of prostate cancer, 
                            most men will not experience any symptoms. 
                            The symptoms however include:
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
                              <p>Frequent urination especially at night</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Frequent urination especially at night</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>Frequent urination especially at night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>
                            The risk factors of getting prostate cancer are:
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
                                Having a family history – a father or a brother 
                                diagnosed with prostate cancer, particularly 
                                if it is at a relatively early age, increases the risk.</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                                Having a family history of breast and ovarian cancer 
                                may also be associated with an inherited risk 
                                (BRCA gene mutation) of developing prostate cancer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>
                            You can, however, reduce the risk of getting prostate cancer once you:
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
                              Get screened early. The cancer is easier to treat if detected earlier.</p>
                            </div>
                          </div>
                          <div className="single-text">
                            <div className="icon">
                              <FaRibbon />
                            </div>
                            <div className="text">
                              <p>
                              Choose to eat a healthy diet full of vegetables and fruits rather than over the counter supplements.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-1">
                        <div className="title">
                          <h3>HOW DO YOU KNOW IF YOU HAVE PROSTATE CANCER?</h3>
                          <div className="title-shape">
                            <Image src={shape} />
                          </div>
                        </div>
                        <p>
                          There is no way of knowing if you have prostate cancer 
                          unless you visit your doctor. The prostate is not an 
                          organ that you can check yourself. You may want to 
                          speak with your doctor if you are over 50 
                          (or over 45 if you have a family history of prostate cancer) 
                          or are a black man, even if you not present with any symptoms. 
                          Your doctor can give you more information or recommend 
                          further tests if necessary.
                        </p>
                        <p>
                          Faraja Cancer Support Trust offers a wide variety of sessions 
                          to help patients during this difficult journey. We have a 
                          prostate cancer support group which equips patients and 
                          caregivers with the knowledge of combating cancer. Also, 
                          interacting with other people tends to encourage the 
                          patients and caregivers as they feel that they are not 
                          alone in this journey. Visit Faraja for more information.
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
                          1. Ruth Gathoni Mbugua, Sherry Oluchina & Simon Karanja (2021). 
                          Prostate cancer awareness and screening among men in a rural 
                          community in Kenya: a cross-sectional study. African Journal 
                          of Urology. https://afju.springeropen.com/articles/10.1186/s12301-020-00108-8#citeas
                        </p>
                        <p>
                          2. https://www.mayoclinic.org/diseases-conditions/prostate-cancer/symptoms-causes/syc-2 
                          https://prostatecanceruk.org/prostate-information/about-prostate-cancer/prostate-cancer-symptoms0353087
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

export default ProstatePage;
