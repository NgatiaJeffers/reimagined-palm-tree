import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

import granular from "../../public/sponsors/git_green_bg.png";
import program from "../../public/program-shape.png";
import { rgbDataURL } from "../../util/util";

const EventSponsors = (props) => {
  const {sponsors} = props;

  return (
    <React.Fragment>
      <div className="events-sponsor-details">
        <div className="title">
          <h3>THE BE BOLD GO GOLD WALK/RUN IS PROUDLY SPONSORED BY</h3>
          <div className="shape">
            <Image src={program} />
          </div>
        </div>
        <div className="sponsors-img-box">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12">
              <div className="sponsor1">
                <Image
                  src={urlFor(sponsors?.sponsorImages[0]?.asset).url()}
                  width={742}
                  height={523}
                  // layout="fill"
                  // objectFit="cover"
                  blurDataURL={rgbDataURL(237, 181, 6)}
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="partnership-title">
                <p>
                  <em>In partnership with:</em>
                </p>
              </div>
              <div className="sponsor2">
                <Image
                  src={urlFor(sponsors?.sponsorImages[1]?.image?.asset).url()}
                  width={362}
                  height={121}
                  // layout="fill"
                  // objectFit="cover"
                  blurDataURL={rgbDataURL(237, 181, 6)}
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="sponsor3">
                <Image
                  src={urlFor(sponsors?.sponsorImages[2]?.image?.asset).url()}
                  width={192}
                  height={83}
                  // layout="fill"
                  // objectFit="cover"
                  blurDataURL={rgbDataURL(237, 181, 6)}
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="col col-md-12">
              <div className="powered-title">
                <p>
                  <em>Powered By:</em>
                </p>
              </div>
              <div className="sponsor4">
                <Image src={granular} width={175} height={55} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventSponsors;
