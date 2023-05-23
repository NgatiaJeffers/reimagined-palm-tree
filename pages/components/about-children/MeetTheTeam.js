import React from "react";
import Image from "next/image";

import image7 from "../../../public/Team/Trustees/ndegwa.jpg";
import image8 from "../../../public/Team/Trustees/Mathew.jpeg";
import image9 from "../../../public/Team/Trustees/manu.jpg";

import { urlFor } from "../../../lib/sanity";

const MeetTheTean = ({ staffs, trustees }) => {
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
                  <div className="name-section">
                    <h4>{name}</h4>
                  </div>
                  <div className="title-section">
                    <h5>{title}</h5>
                  </div>
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
          {trustees?.map((item) => {
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
                  <div className="name-section">
                    <h4>{name}</h4>
                  </div>
                  <div className="title-section">
                    <h5>{title}</h5>
                  </div>
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
      </div>
    </section>
  );
};

export default MeetTheTean;
