import React from "react";
import Image from "next/image";

import image7 from "../../../public/Team/Trustees/ndegwa.jpg";
import image8 from "../../../public/Team/Trustees/Mathew.jpeg";
import image9 from "../../../public/Team/Trustees/manu.jpg";

import { urlFor } from "../../../lib/sanity";

const MeetTheTean = ({ staffs, trustees }) => {
  const sortedTrustees = trustees?.sort((a, b) => {
    const dateA = new Date(a._createdAt);
    const dateB = new Date(b._createdAt);
    return dateA - dateB;
  });

  return (
    <section className="wide-tb-100">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-6">
            <h1 className="heading-main">Trustees</h1>
            <div className="content meet-the-team">
              <p>
                Our team of experienced professionals will work closely with you,
                providing the support and expertise to deliver the best possible
                service.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {sortedTrustees?.map((item) => {
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
