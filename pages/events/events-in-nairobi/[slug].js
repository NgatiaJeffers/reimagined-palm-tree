import Link from "next/link";
import Image from "next/image";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

import BreadCrumb from "../../../components/atoms/Breadcrumb";
import nature from "../../../public/nature1.jpg";
import shape from "../../../public/shape.png";
import DonateSidebar from "../../../components/shared";

const EventsInNairobi = () => {
    return (
        <>
            <BreadCrumb title={"Event Details"} />
            <section className="events-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="events-details-content">
                                <div className="events-img-box">
                                   <Image src={nature} />
                                   <div className="tags">
                                    <h6>Childhood Cancer Awareness</h6>
                                   </div>
                                </div>
                                <div className="events-details-text-box">
                                    <h2>Be Bold Go Gold for childhood cancer</h2>
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
                                                <h3>September 24th, 2022 07:00am</h3>
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
                                                <h3>At the Karura Forest - Saturday</h3>
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
                        </div>
                        <DonateSidebar />
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventsInNairobi;