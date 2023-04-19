import React, { Fragment } from "react";
import Link from "next/link";
import BreadCrumb from "../../../components/atoms/Breadcrumb";

const FarajaVideos = () => {
    return (
        <Fragment>
            <BreadCrumb title={"Faraja Videos"} />
            <section className="blog-area">
                <div className="container">
                    <div className="blog-title text-center">
                        <div className="sub-title">
                            <div className="inner text-center">
                                <h3>Catch a glance with us</h3>
                            </div>
                        </div>
                        <h2>Faraja Videos</h2>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default FarajaVideos;