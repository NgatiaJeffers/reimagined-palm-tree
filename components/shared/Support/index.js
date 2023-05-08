import React, { Fragment } from 'react';
import Link from "next/link";

const Support = () => {
  return (
    <Fragment>
        <section className="section">
            <div className='container'>
                <div className='row'>
                    <div className='col col-xl-12 col-md-12 d-flex justify-content-center'>
                        <div className='section-content text-center'>
                            <div className='title'>
                                <h2>Want to get involved?</h2>
                            </div>
                            <div className='content'>
                                <p>
                                    The greatest gift you can give someone is your time 
                                    because when you give your time, you are giving a 
                                    portion of your life that you will never get back.
                                </p>
                            </div>
                            <div className='section-btn'>
                                <Link href={"/"}>
                                    <a className="btn-main">Become a Volunteer</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="card-wrapper">
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-md-4 col-sm-12'>
                        <div className='section-card'>
                            <div className='card-bg-wrap'></div>
                            <div className='card-content'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </Fragment>
  )
}

export default Support;