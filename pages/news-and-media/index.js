import React, { Fragment } from "react";
import Link from "next/link";
import BreadCrumb from "../../components/atoms/Breadcrumb";

const NewsAndMedia = () => {
    return (
        <Fragment>
            <BreadCrumb title={"News and Media"} />
            <section className="blog-area">
                <div className="container">
                    <div className="blog-title text-center">
                        <div className="sub-title">
                            <div className="inner text-center">
                                <h3>Get Informed</h3>
                            </div>
                        </div>
                        <h2>News and Media</h2>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NewsAndMedia;