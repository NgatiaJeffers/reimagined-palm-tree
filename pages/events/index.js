import React from "react";
import Link from "next/link";
import Image from "next/image";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import TruncatedParagraph from "../../components/atoms/TruncatedText";
import { getDayAndMonth } from "../../util/util";

// API CALLS
import { fetchEvents } from "../../util/fetchEvents";

const EventsPage = (props) => {
  const { events } = props;

  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event?.eventIn?.slug?.current]) {
      acc[event?.eventIn?.slug?.current] = [];
    }
    acc[event?.eventIn?.slug?.current].push(event);
    return acc;
  }, {});

  return (
    <>
      <BreadCrumb title={"Upcoming Events"} />
      <section className="events-page">
        <div className="container">
          {Object.entries(groupedEvents)?.map(([slug, events]) => (
            <div className="row" key={slug}>
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
              {events?.map((item) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={item?._id}>
                  <div className="event-card">
                    <div className="card-content">
                      <div className="date-box">
                        <div className="left">
                          <h2>{item?.eventDate}</h2>
                        </div>
                      </div>
                      <div className="meta-info">
                        <p>
                          Organized By:
                          <Link href={"/"}>
                            <a>{item?.organizedBy?.name}</a>
                          </Link>
                        </p>
                      </div>
                      <div className="title">
                        <h2>
                          <Link
                            as={`/events/${item?.slug?.current}`}
                            href={"/events/[slug]"}
                          >
                            <a>{item?.title}</a>
                          </Link>
                        </h2>
                      </div>
                      <div className="inner-text">
                        <p>
                          <TruncatedParagraph
                            text={item?.eventDetails.join(" ")}
                            limit={200}
                          />
                        </p>
                      </div>
                      <div className="border-box"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
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
