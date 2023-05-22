import React, { Fragment } from "react";
import Link from "next/link";

const Support = () => {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-md-12 d-flex justify-content-center">
              <div className="section-content text-center">
                <div className="title">
                  <h2>Want to get involved?</h2>
                </div>
                <div className="content">
                  <p>
                    The greatest gift you can give someone is your time because
                    when you give your time, you are giving a portion of your
                    life that you will never get back.
                  </p>
                </div>
                <div className="section-btn">
                  <Link href={"/volunteer"}>
                    <a className="btn-main">Become a Volunteer</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-wrapper">
        <div className="container">
          <div className="row">
            <div className="card-group">
              <div className="card">
                <div className="card-body">
                <div className="card-border"></div>
                  <h3 className="card-title">GIVE</h3>
                    <p className="card-text">
                        The greatest gift you can give someone is your time, 
                        because when you give your time, you are giving a 
                        portion of your life that you will never get back.
                    </p>
                    <div className="section-btn">
                        <Link href={"/donate"}>
                            <a className="btn-main">Donate Now</a>
                        </Link>
                    </div>
                </div>
              </div>
              <div className="card bg-blue">
                <div className="card-body">
                <div className="card-border"></div>
                  <h3 className="card-title">SPONSOR</h3>
                  <p className="card-text">
                        The greatest gift you can give someone is your time, 
                        because when you give your time, you are giving a 
                        portion of your life that you will never get back.
                    </p>
                    <div className="section-btn">
                        <Link href={"/donate"}>
                            <a className="btn-main">Sponsor Now</a>
                        </Link>
                    </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                <div className="card-border"></div>
                  <h3 className="card-title">TRUST</h3>
                  <p className="card-text">
                        The greatest gift you can give someone is your time, 
                        because when you give your time, you are giving a 
                        portion of your life that you will never get back.
                    </p>
                    <div className="section-btn">
                        <Link href={"/in-kind-donation"}>
                            <a className="btn-main">Check Out</a>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Support;
