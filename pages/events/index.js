import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import TruncatedParagraph from "../../components/atoms/TruncatedText";
import { getDayAndMonth } from "../../util/util";
import { urlFor } from "../../lib/sanity";

// API CALLS
import { fetchEvents } from "../../util/fetchEvents";

const EventsPage = (props) => {
  const { events } = props;

  events?.sort((a, b) => {
    const dateA = new Date(a.dateCreated);
    const dateB = new Date(b.dateCreated);
    return dateA - dateB;
  });

  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event?.eventIn?.slug?.current]) {
      acc[event?.eventIn?.slug?.current] = [];
    }
    acc[event?.eventIn?.slug?.current].push(event);
    return acc;
  }, {});

  return (
    <Fragment>
      <BreadCrumb title={"Upcoming Events"} />
      <section className="events-page">
        <div className="container">
          {Object.entries(groupedEvents)?.map(([slug, events]) => (
            <div
              className="row row-cols-1 row-cols-md-2 row-cols-sm-1"
              key={slug}
            >
              <div className="col col-xl-12 col-lg-12 col-md-12">
                <div className="title">
                  <h2>
                    {slug
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h2>
                </div>
              </div>
              {events?.map((item) => {
                const { _id, image, title, slug, eventLocation, eventDate
                } = item;
                return (
                  <div className="col mb-5" key={_id}>
                    <div className="event-wrap">
                      <div className="img-wrap">
                        <a>
                          <Image 
                            src={urlFor(image?.asset).url()}
                            objectFit="cover"
                            layout="fill"
                            />
                        </a>
                      </div>
                      <div className="content-wrap">
                        <div className="date-wrap d-lg-flex align-items-end">
                          <div className="date-box">
                            <span>{eventDate}</span>
                          </div>
                          <div className="event-details">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>{" "}
                              09:00 Am
                            </div>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-map-pin"
                              >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>{" "}
                              {eventLocation}
                            </div>
                          </div>
                        </div>
                        <h3>
                          <Link
                            as={`/events/${slug?.current}`}
                            href={"/events/[slug]"}
                          >
                            <a>{title}</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="text-md-right text-right read-more-wrap">
                        <Link
                          as={`/events/${slug?.current}`}
                          href={"/events/[slug]"}
                        >
                          <a className="read-more-line">
                            <span>Read More</span></a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default EventsPage;

// Backend call for server side data
export const getServerSideProps = async () => {
  const events = await fetchEvents();

  return {
    props: {
      events,
    },
  };
};
