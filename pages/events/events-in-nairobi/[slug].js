import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { urlFor } from "../../../lib/sanity";

import BreadCrumb from "../../../components/atoms/Breadcrumb";
import DonateSidebar from "../../../components/shared";
import shape from "../../../public/shape.png";

// API CALLS
import { fetchEvents } from "../../../util/fetchEvents";
import { fetchEvent } from "../../../util/fetchEvent";
import { isNullUndefined, rgbDataURL } from "../../../util/util";
import EventSponsors from "../eventSponsors";
import BeBoldGoGoldForm from "../../../components/Form/BeBoldGoBold/BeBoldGoGold";


const Event = (props) => {
    const { isFallback } = useRouter();
    const [showRegistartionForm, setShowRegistrationForm] = useState(false);
    const { eventData } = props
    console.log(eventData)
    
  return (
    <>
      <BreadCrumb title={"Event Details"} />
      <section className="events-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="events-details-content">
                <div className="events-img-box">
                  <Image 
                    src={urlFor(eventData?.image?.asset).url()} 
                    layout="fill"
                    objectFit="cover"
                    blurDataURL={rgbDataURL(237, 181, 6)}
                    placeholder="blur"
                  />
                  <div className="tags">
                    <h6>Childhood Cancer Awareness</h6>
                  </div>
                </div>
                <div className="events-details-text-box">
                  <h2>{eventData?.title}</h2>
                  <ul className="events-info">
                    <li>
                      <div className="icon">
                        <BsCalendar2CheckFill className="calendar-icon" />
                        <div className="overlay-icon">
                          <Image src={shape} />
                        </div>
                      </div>
                      <div className="text">
                        <p>Event Date</p>
                        <h3>{eventData?.eventDate}</h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <MdLocationOn className="calendar-icon" />
                        <div className="overlay-icon">
                          <Image src={shape} />
                        </div>
                      </div>
                      <div className="text">
                        <p>Event Location</p>
                        <h3>{eventData?.eventLocation}</h3>
                      </div>
                    </li>
                  </ul>
                  <div className="bottom-box">
                    <div className="btns">
                        <a className="btn-one" onClick={() => setShowRegistrationForm(true)}>
                          <span className="txt">
                            <AiFillCheckCircle className="check" />
                            join this event
                          </span>
                        </a>
                    </div>
                  </div>
                  <div className="form-area">
                    {showRegistartionForm && <BeBoldGoGoldForm />}
                  </div>
                </div>
              </div>
              <div className="events-details-box">
                <p>{eventData?.eventDetails.join(" ")}</p>
              </div>
              {!isNullUndefined(eventData?.sponsorImages) && (<EventSponsors sponsors={eventData} />)}
            </div>
            <DonateSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;

// Backend calls for static side data
export const getStaticPaths = async () => {
    try {
        // Fetch the slugs for all events/all events
        const events = await fetchEvents();

        // Map the slugs to the format expected by Next.js
        const paths = events.map(item => ({
            params: { slug: item?.slug?.current}
        }))
        
        // Return the paths for pre-generation
        return {
            paths,
            fallback: false // or 'blocking; or 'true' depending on use case
        }
    } catch (err) {
        return {
            paths: [],
            fallback: false,
        }
    }
}

export const getStaticProps = async (ctx) => {
    try {
        const { slug } = ctx.params || {}
        const eventData = await fetchEvent(slug)

        if(!eventData) throw new Error("No event data found") // This will cause a 404 for this slug

        return {
            props: {
                eventData,
                slug,
            },
            revalidate: 5 // determines how long till the cached static file in invlidated
        }
    } catch (err) {
        return {
            notFound: true,
            revalidate: 5 // determines how long till the cached static file in invlidated
        }
    }
}
