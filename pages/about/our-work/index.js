import Image from "next/image";
import Link from "next/link";

import pageBanner from "../../../public/svgs/sit.svg";
import ourWork from "../../../public/our-work.jpg";
import craftforCure from "../../../public/crafts_for_cure.jpg";
import FarajaFruity from "../../../public/Faraja_fruity.jpg";
import received from "../../../public/received.jpg";

const OurWork = () => {
    return (
        <section className="section-padding section-color">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="single-post text-center" style={{ marginTop: "100px", width: "450px" }}>
                            <Image src={pageBanner} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-md-12 text-center mt-4 post-area">
                        <div className="post-details-1">
                            <h1 className="post-about-title">Our Work With Children</h1>
                            <h3 className="post-about-subtitle">5 Ways In Which Faraja helps Kids With Cancer</h3>
                            <p style={{ fontWeight: 400 }}>
                                It is a sad fact of life that vulnerable children get
                                cancer too. Just 1 in 10 children survive cancer in
                                Kenya compared to 7 in 10 in developed countries.
                                Clearly there is much to do.
                            </p>
                            <p style={{ fontWeight: 400 }}>
                                Faraja ensures that our services reach children and their
                                families as they go through this difficult time by providing
                                practical and emotional support. The below gives you a
                                snapshot of 3 ways we do this:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row post-row">
                    <div className="col-md-6">
                        <div className="post-details">
                            <h3 className="post-details-title">Through our Craft for Cure Programme - A Picture Paints a Thousand Words</h3>
                            <p>
                                Children can get pretty miserable and bored having to stay for months on
                                end at a hospital for cancer treatment. The Crafts for Cure program takes
                                place every Wednesday morning and Friday afternoon at Kenyatta National
                                Hospital (KNH) run by Faraja and Nairobi University&apos;s AIESEC students.
                            </p>
                            <p>
                                Craft for Cure enables these kids a welcome distraction from treatments,
                                the chance to hang out with fun people and just get to be kids for an afternoon.
                                Art therapy is used to demystify complicated terms like chemotherapy and
                                as an outlet to deal with the side effects of cancer treatment.
                            </p>
                            <p>
                                Around 300 children attend the Craft for Cure sessions which target in-patient
                                children at Level 1e, Level 3 and Level 9 at KNH.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 post-image-area">
                        <div className="page-image" style={{ width: "450px" }}>
                            <Image src={craftforCure} />
                        </div>
                    </div>
                </div>
                <div className="row post-row">
                    <div className="col-md-6 post-image-area">
                        <div className="page-image" style={{ width: "450px" }}>
                            <Image src={ourWork} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="post-details">
                            <h3 className="post-details-title">Through Providing Life-Saving Treatments</h3>
                            <p>
                                On November 12th 2016, Faraja officially launched the <Link href={""}><a>Faraja Medical Support Fund</a></Link>
                                The funds vision is for all children and adults who have been diagnosed with cancer in Kenya,
                                to be able to access the right affordable treatment at the right time. This brings hope
                                and real chance of recovery. Through the fund, more children like 12 year old ( diagnosed when he was 9yrs)
                                <Link href={""}><a>Kevin Githinji</a></Link> can get the right treatment at the right time.
                            </p>
                            <p>
                                All proceeds from Renuka Patel&apos;s popular book &apos;Chef at Home&apos; have been donated to Faraja&apos;s
                                Medical Support Fund for supporting children with cancer. To date a total of Shs 1.5 million
                                has been raised through sale of the book. In 2017 with Funds raised by <Link href={""}><a>Wigs and Turbans</a></Link>,
                                other well wishers and funds from the Faraja Medical Support Fund we have supported
                                medical treatment for 20 children.
                            </p>
                            <p>
                                Read more amazing testimonies <Link href={""}><a>here.</a></Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row post-row">
                    <div className="col-md-6">
                        <div className="post-details">
                            <h3 className="post-details-title">Milk and Fruit Donations- Every Friday </h3>
                            <p>
                                Faraja Cancer Support Trust began giving fruit and milk donations once a month in 2015.
                                The donations are offered to the children in level 3   which accommodates approximately
                                50 children. Due to the positive feedback we have received, the donations have been
                                extended to level 1 e and level 9 paediatric and a total of 300 packets of milk and
                                300 apples are donated every Friday.
                            </p>
                            
                            <p>
                                We are thankful to Fruity Fruits Ltd who donate two cartons of apples twice a month
                                to the program and cash donations from many well wishers.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 post-image-area">
                        <div className="page-image" style={{ width: "450px" }}>
                            <Image src={FarajaFruity} />
                        </div>
                    </div>
                </div>
                <div className="row post-row">
                    <div className="col-md-12">
                        <div className="post-details-3 text-center">
                            <h3 className="mt-4 post-details-title">Through our Music and Dance Therapy- Harmonies that heal </h3>
                            <p>
                                As many children in hospital do not feel well enough to come out of bed to participate
                                in the art and craft programme we have expanded our therapies to include music and dance.
                            </p>
                            <p>
                                Twice a week, on Wednesday and Friday, we tap into the inherit play in children by singing
                                and dancing, an activity that has proven to be very popular. Since the classes begun in July
                                2017, we have witnessed a steady increase in attendance not only from the children but also
                                from the parents and care givers.
                            </p>
                            <p>
                                Music therapy is in partnership with Daraja Band and Muziki Changa. In 2017 we had 30 melodious and joyful classes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 post-image-area">
                        <div className="page-image" style={{ width: "450px" }}>
                            <Image src={received} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="post-details">
                            <h3>Through Special One-Off Projects</h3>
                            <p>
                                We are always open to explore ideas with individual and corporate supporters who are keen to
                                help children living with cancer.
                            </p>
                            <p>
                                From time to time day trips will be organized so children can have a welcome break from medical
                                treatment regimes. In the past this has included a trip to the Animal Orphanage in Nairobi.
                            </p>
                            <p>
                                Another initiative has seen Braeburn School brought yogurt and gifts to the children at Kenyatta
                                Hospital oncology ward. A very special day with happy memories created!
                            </p>
                            <p>
                                <span>
                                    <b>See how you can help us continue to provide hope and support to more children <Link href={""}>here</Link>.</b>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork;