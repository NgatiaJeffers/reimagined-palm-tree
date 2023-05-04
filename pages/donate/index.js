import React, { Fragment } from "react";
import Link from "next/link";
import BreadCrumb from "../../components/atoms/Breadcrumb";
import MultiPageForm from "../../components/Form/Donate";

const DonatePage = () => {
  return (
    <Fragment>
    <BreadCrumb title={"Make a Donation"} />
    <section className="donate-area"></section>
    <section>
      <MultiPageForm />
    </section>
</Fragment>
  ) 
}

export default DonatePage 