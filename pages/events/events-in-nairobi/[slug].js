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
import nature from "../../../public/nature1.jpg";
import shape from "../../../public/shape.png";
import program from "../../../public/program-shape.png";
import sponsor1 from "../../../public/sponsors/VCB.png"
import sponsor2 from "../../../public/sponsors/safaricom-logo.png";
import sponsor3 from "../../../public/sponsors/Fitness-with-David-Website-Logo.png";
import sponsor4 from "../../../public/sponsors/git_green_bg.png";

// API CALLS
import { fetchEvents } from "../../../util/fetchEvents";
import { fetchEvent } from "../../../util/fetchEvent";
import { rgbDataURL } from "../../../util/util";


const Event = (props) => {
    const { isFallback } = useRouter();
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
                        <h3>{eventData?.eventDay}</h3>
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
                        <h3>{eventData?.eventDay}</h3>
                      </div>
                    </li>
                  </ul>
                  <div className="bottom-box">
                    <div className="btns">
                      <Link href={"/"}>
                        <a className="btn-one">
                          <span className="txt">
                            <AiFillCheckCircle className="check" />
                            join this event
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="events-details-box">
                <p>{eventData?.eventDetails.join(" ")}</p>
              </div>
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
                                src={urlFor(eventData?.sponsorImages[0]?.asset).url()} 
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
                                        src={urlFor(eventData?.sponsorImages[1]?.image?.asset).url()} 
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
                                    src={urlFor(eventData?.sponsorImages[2]?.image?.asset).url()} 
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
                                <Image 
                                    src={sponsor4}
                                    width={175}
                                    height={55}
                                />
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
