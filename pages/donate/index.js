import React, { Fragment } from "react";
import Image from "next/image";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import DonateForm from "../../components/Form/DonateForm";

import mpesa from "../../public/Mpesa.png";
import amazon from "../../public/smile-amazon.png";
import Link from "next/link";

const DonatePage = () => {
  return (
    <Fragment>
      <BreadCrumb title={"Make a Donation"} />
      <section className="wide-tb-100 donate-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h1 className="heading-main">
                Make a <span className="underline">Donation</span>
              </h1>
              <p>
                With over 40,000 new cases diagnosed annually, finding a safe
                haven for cancer patients and their carers is very important.
                That is why Faraja Cancer Support Trust offers services to
                complement medical treatment through our free complementary
                therapies, support group meetings and financial assistance. We
                have a place, a safe haven for cancer patients to access our
                free services which has enabled us to make a positive influence
                in the journey of over 2000 cancer patients. We are sustainable
                and are here for a long time. The bottom line is we bring help,
                hope and life.
              </p>
              <p>
                By supporting Faraja you will become a part of the community
                that is working hard to fight the major cancer issues we are
                facing here in Kenya. As we rely entirely on voluntary donations
                and support, so by getting involved you will make a huge
                difference. It is only together that we can help fight cancer.
              </p>
              <div className="donation-wrap">
                <Image src={mpesa} width={100} height={70} />
                <p>
                  Use our secure M-pesa payment gateway to donate through our
                  paybill 509700. You will receive a pop up on your phone to
                  confirm your donation. Enter your pin and then click ok.
                </p>
                <DonateForm />
              </div>
              <div className="row amazon-donate-card d-lg-flex align-items-center top-broken-grid m-0">
                <div className="col-md-4 amazon-img">
                  <Image src={amazon} />
                </div>
                <div className="col-md-8 text">
                  {/* <div className="d-md-flex align-items-center"> */}
                    <p>
                      This Year, you can do your Amazon Christmas shopping and
                      support Faraja Cancer Support Trust at an extra cost to
                      you.
                    </p>
                    <ol className="list-group list-group-numbered">
                      <li className="list-group-item">
                        Simply go to <Link href={""}><a className="underline">smile.amazon.co.uk</a></Link>
                        on your web browser or activate AmazonSmile on your
                        Amazon app (look in 'settings').
                      </li>
                      <li className="list-group-item">
                        Then you select Faraja Cancer Support Trust UK from the
                        list of charities... and get shoppings.
                      </li>
                    </ol>
                    <p>
                      100% of money raised in the U.K. goes to Faraja Cancer
                      Support Trust Kenya. It provides vital funding for the
                      Trust's free complementary therapies, support groups and
                      financial assistance for cancer treatments.
                    </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="more-donate-info">
                <div className="card-big-shadow">
                  <div className="card">
                    <div className="content">
                      <h3>CREDIT / DEBIT CARD DONATION</h3>
                      <p>
                        If you would like to pay by credit/debit card please
                        click the button below.
                      </p>
                      <Link
                        href={
                          "https://www.globalgiving.org/projects/farajacancersupportfund/"
                        }
                      >
                        <a className="btn-donate">DONATE VIA GLOBAL GIVING</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-big-shadow">
                  <div className="card">
                    <div className="content">
                      <h3>CHEQUE OR BANK TRANSFER</h3>
                      <p>
                        You can send cheques or money orders payable to{" "}
                        <span className="underline">
                          Faraja Cancer Support Trust.
                        </span>{" "}
                        Direct Debits can be deposited into our bank accounts:
                      </p>
                    </div>
                    <div className="banks-info">
                      <h3>Kenya Shillings</h3>
                      <ol className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Bank</div>
                            NCBA Bank Kenya PLC (Bank code 07000)
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Branch</div>
                            The Mall Branch (Branch code 105)
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Account Name</div>
                            Faraja Cancer Support Trust
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Account Number</div>
                            1525110178
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">SWIFT code</div>
                            CBAFKENX
                          </div>
                        </li>
                      </ol>

                      <h3>US Dollars</h3>
                      <ol className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Bank</div>
                            NCBA Bank Kenya PLC (Bank code 07000)
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Branch</div>
                            The Mall Branch (Branch code 105)
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Account Name</div>
                            Faraja Cancer Support Trust
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Account Number</div>
                            1525110199
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">SWIFT code</div>
                            CBAFKENX
                          </div>
                        </li>
                      </ol>
                    </div>
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

export default DonatePage;
