import Link from "next/link";
import Image from "next/image";

import report from "../../public/svgs/report.svg";

const AnnualReports = () => {
    return (
        <section className="section-padding section-color">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 annual-report-area">
                        <div className="post-details-1">
                            <h1 className="text-left">Annual Reports</h1>
                            <p>
                                Our annual reports show how, with your support, we have
                                achieved our strategic objectives of giving hope, help and
                                life to cancer patients and their caregivers.
                            </p>
                            <p>
                                Our accounts are audited by RSM Eastern Africa and reflect
                                where our income comes from and most importantly how we
                                have spent it.
                            </p>
                            <p>
                                Our reports are published after every financial year, that
                                is, after May each year. If you have any questions about
                                our financial reports please email
                                info@farajacancersupport.org
                            </p>  
                        </div>
                    </div>
                    <div className="col col-md-6 d-flex justify-content-center">
                        <div className="single-post text-center" style={{ width: "250px" }}>
                            <Image src={report} alt='Calendar Report' fill style={{ objectFit: "contain" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnnualReports;