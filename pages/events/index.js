import React from 'react';
import Link from "next/link";
import Image from "next/image";

import BreadCrumb from '../../components/atoms/Breadcrumb';

// API CALLS
import { fetchEvents } from '../../util/fetchEvents';

const EventsPage = (props) => {
    const { events } = props;
    console.log(events)
  return (
    <>
      <BreadCrumb title={"Upcoming Events"} />
      <section className='events-page'>
        <div className='container'>
            <div className='row'>
                {events?.map((item) => (
                <div className='col-xl-4 col-lg-6 col-md-6' key={item?._id}>
                    <div className='event-card'>
                        <div className='card-content'>
                            <div className='date-box'>
                                <div className='left'>
                                    <h2>25</h2>
                                </div>
                                <div className='right'>
                                    <h3>May</h3>
                                </div>
                            </div>
                            <div className='meta-info'>
                                <p>Organized By:
                                    <Link
                                        href={"/"}>
                                        <a>Faraja</a>
                                    </Link>
                                </p>
                            </div>
                            <div className='title'>
                                <h2>
                                    <Link
                                        as={`/events/events-in-nairobi/${item?.slug.current}`}
                                     href={"/events/events-in-nairobi/[slug]"}>
                                        <a>{item?.title}</a>
                                    </Link>
                                </h2>
                            </div>
                            <div className='inner-text'>
                                <p>This year we plan to BE BOLD and GO GOLD for childhood cancer by organizing a fundraising run/walk on Saturday 24th September 2022 at the Karura Forest.</p>
                            </div>
                            <div className='border-box'></div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default EventsPage

// Backend call for server side data
export const getServerSideProps = async () => {
    const events = await fetchEvents();

    return {
        props: {
            events
        }
    }
}