import React from "react";
import Image from "next/image";

import shape from "../../../public/shape2.png";
import image from "../../../public/Team/Trustees/Dr-Noelle.jpg";
import image1 from "../../../public/Team/Trustees/Hasheem.jpg";
import image2 from "../../../public/Team/Trustees/Harriet.jpg";
import image3 from "../../../public/Team/Trustees/Shaira.jpg";
import image4 from "../../../public/Team/Trustees/Sonal.png";
import image5 from "../../../public/Team/Trustees/Akberali.jpg";
import image6 from "../../../public/Team/Trustees/hollas.jpg";
import image7 from "../../../public/Team/Trustees/ndegwa.jpg";
import image8 from "../../../public/Team/Trustees/Mathew.jpeg";
import image9 from "../../../public/Team/Trustees/manu.jpg";

const MeetTheTean = () => {
  return (
    <section className="wide-tb-100">
      <div className="container">
        <h1 className="heading-main">Our Trustees</h1>
        <div className="row">
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image} />
              </div>
              <h4>Dr Noelle Orata</h4>
              <h5>Trustee</h5>
              <div className="more-info">
              <p>
                  Dr. Noelle Orata, a practicing consultant Pathologist and
                  health systems specialist with over 10 years uninterrupted
                  clinical and medical management practice.
                </p>

              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image1} />
              </div>
              <h4>Hasheem Maloo</h4>
              <h5>Trustee</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image2} />
              </div>
              <h4>Harriet Wanjohi</h4>
              <h5>Trustee</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image3} />
              </div>
              <h4>Shaira Adamali</h4>
              <h5>Founding Trustee</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image4} />
              </div>
              <h4>Sonal Tejpar</h4>
              <h5>Trustee</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image5} />
              </div>
              <h4>Akbermoawalla - UK Trustee</h4>
              <h5>Trustee</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image6} />
              </div>
              <h4>Andrew Hollas</h4>
              <h5>Board Chair</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image7} />
              </div>
              <h4>Andrew Ndegwa</h4>
              <h5>Trustee</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image8} />
              </div>
              <h4>Mathew Ward</h4>
              <h5>Trustee</h5>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image9} />
              </div>
              <h4>Manu Chandaria</h4>
              <h5>Trustee</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTean;
