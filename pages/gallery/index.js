import React, { Fragment } from "react";
import Link from "next/link";
import BreadCrumb from "../../components/atoms/Breadcrumb";

const GalleryPage = () => {
    return (
        <Fragment>
            <BreadCrumb title={"Gallery"} />
            <section className="blog-area">
                <div className="container">
                    <div className="blog-title text-center">
                        <div className="sub-title">
                            <div className="inner text-center">
                                <h3>Catch a glance with us</h3>
                            </div>
                        </div>
                        <h2>Faraja Gallery</h2>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default GalleryPage;