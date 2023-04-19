import React, { Fragment } from "react";
import Link from "next/link";
import BreadCrumb from "../../components/atoms/Breadcrumb";

const ContactUs = () => {
    return (
        <Fragment>
            <BreadCrumb title={"Contact Us"} />
            <section className="blog-area">
                <div className="container">
                    <div className="blog-title text-center">
                        <div className="sub-title">
                            <div className="inner text-center">
                                <h3>Say hi!</h3>
                            </div>
                        </div>
                        <h2>Get In Touch</h2>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactUs;