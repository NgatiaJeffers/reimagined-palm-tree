import React from "react";
import Image from "next/image";

import image7 from "../../../public/Team/Trustees/ndegwa.jpg";
import image8 from "../../../public/Team/Trustees/Mathew.jpeg";
import image9 from "../../../public/Team/Trustees/manu.jpg";

import { urlFor } from "../../../lib/sanity";

const MeetTheTean = ({ staffs }) => {
  return (
    <section className="wide-tb-100">
      <div className="container">
        <h1 className="heading-main">Our Team</h1>
        <div className="row">
          {staffs?.map((item) => {
            const { _id, name, title, bio, image } = item;
            return (
              <div className="col-12 col-lg-3 col-sm-6" key={_id}>
                <div className="team-section-wrap">
                  <div className="img green">
                    <Image
                      src={urlFor(image?.asset).url()}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h4>{name}</h4>
                  <h5>{title}</h5>
                  <div className="bio">
                    {bio.map((text, index) => (
                      <p key={index}>{text.text}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <h1 className="heading-main">Trustees</h1>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image7} />
              </div>
              <h4>Andrew Ndegwa</h4>
              <h5>Trustee</h5>
              <div className="bio">
                <p>
                  Andrew is an executive director of First Chartered Securities
                  Limited (FCS), a Nairobi based investment holding company, as
                  well as a non-executive board member of a number of public and
                  private companies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image8} />
              </div>
              <h4>Mathew Ward</h4>
              <h5>Trustee</h5>
              <div className="bio">
                <p>
                  Matthew is a co-founder of Levanter and is a trusted growth
                  and reputation advisor to our clients in financial services,
                  fintech, ICT and supply chain.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <div className="team-section-wrap">
              <div className="img green">
                <Image src={image9} />
              </div>
              <h4>Manu Chandaria</h4>
              <h5>Trustee</h5>
              <div className="bio">
                <p>
                  Manu is engaged in work within the framework of a joint Indian
                  family with business interests in more than seventy countries.
                  He sits as Chairman on a number of boards in the
                  manufacturing, insurance and higher education sectors in East
                  Africa. He is a leading industrialist and a Philanthropist in
                  Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTean;
