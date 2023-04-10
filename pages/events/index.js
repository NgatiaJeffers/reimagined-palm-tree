import React from 'react';
import Link from "next/link";
import Image from "next/image";

import BreadCrumb from '../../components/atoms/Breadcrumb';

const EventsPage = () => {
  return (
    <>
      <BreadCrumb title={"Upcoming Events"} />
      <section className='events-page'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-4 col-lg-6 col-md-6'>
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
                                    <Link href={"/"}>
                                        <a>Faraja</a>
                                    </Link>
                                </p>
                            </div>
                            <div className='title'>
                                <h2>
                                    <Link href={"/"}>
                                        <a>Be Bold Go Gold</a>
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
                <div className='col-xl-4 col-lg-6 col-md-6'>
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
                                    <Link href={"/"}>
                                        <a>Faraja</a>
                                    </Link>
                                </p>
                            </div>
                            <div className='title'>
                                <h2>
                                    <Link href={"/"}>
                                        <a>Be Bold Go Gold</a>
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
                <div className='col-xl-4 col-lg-6 col-md-6'>
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
                                    <Link href={"/"}>
                                        <a>Faraja</a>
                                    </Link>
                                </p>
                            </div>
                            <div className='title'>
                                <h2>
                                    <Link href={"/"}>
                                        <a>Be Bold Go Gold</a>
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
            </div>
        </div>
      </section>
    </>
  )
}

export default EventsPage