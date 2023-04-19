import React, { Fragment } from "react";
import Link from "next/link";
import BreadCrumb from "../../../components/atoms/Breadcrumb";

const FarajaMedicalSupportFund = () => {
  return (
    <Fragment>
    <BreadCrumb title={"(FMSF)"} />
    <section className="blog-area">
        <div className="container">
            <div className="blog-title text-center">
                <div className="sub-title">
                    <div className="inner text-center">
                        <h3>Giving hope and a real chance of recovery</h3>
                    </div>
                </div>
                <h2>The faraja Medical Support Fund</h2>
            </div>
        </div>
    </section>
</Fragment>
  )
}

export default FarajaMedicalSupportFund