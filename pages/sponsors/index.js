import React, { Fragment } from "react";

import { urlFor } from "../../lib/sanity";

// API CALLS
import { fetchSponsors } from "../../util/fetchSponsors";
import BreadCrumb from "../../components/atoms/Breadcrumb";

const index = ({ sponsors }) => {
  console.log(sponsors);
  return (
    <Fragment>
    <BreadCrumb title={"Sponsors & Supporters"} />
      <section className="wide-tb-100">
        <div className="container">
          <div className="px-lg-5">
            <div className="row">
              {sponsors?.map((item) => {
                const { _id, name, slug, image } = item;
                return (
                  <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={_id}>
                    <div className="bg-white rounded shadow-sm">
                      <img
                        src={urlFor(image?.asset).url()}
                        alt=""
                        className="img-fluid card-img-top"
                      />
                      <div className="p-4">
                        <h5>
                          {" "}
                          <a href="#" className="text-dark">
                            {name}
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default index;

// Backend call for server side data
export const getStaticProps = async () => {
  const sponsors = await fetchSponsors();

  return {
    props: {
      sponsors,
    },
  };
};
