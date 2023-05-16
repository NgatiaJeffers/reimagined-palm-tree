import React from "react";
import Link from "next/link";
import Image from "next/image";

import Childhood from "../public/Childhood.png";

import { 
  AiFillFacebook, 
  AiFillTwitterSquare, 
  AiFillInstagram, 
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillYoutube
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer_area">
      <div className="foo_top_header_one section_padding_100_70">
        <div className="overlay"></div>
        <div className="container footer-ps">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer_part">
                <h5>Did You Know</h5>
                <p>
                  Finally, some cancers can actually glow in the dark. Certain
                  types of cancer cells produce fluorescent molecules that emit
                  light when exposed to certain wavelengths. Scientists have
                  used this property to develop imaging techniques that can help
                  detect cancer cells in the body and track their spread.
                </p>
              </div>
              <div className="footer_part m-top-15">
                <h5>Social Links</h5>
                <ul className="footer_social_links">
                  <li>
                    <a href="#">
                      <AiFillFacebook className="icon" />{" "}
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillTwitterSquare className="icon" />{" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillInstagram className="icon" />{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTiktok className="icon" />{" "}
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillYoutube className="icon" />{" "}
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillLinkedin className="icon" />{" "}
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiOutlineWhatsApp className="icon" />{" "}
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer_part">
                <h5>Cancer Awareness Tags</h5>
                <ul className=" footer_widget">
                  <li>
                    <a href="#">Therapy</a>
                  </li>
                  <li>
                    <a href="#">Prostate</a>
                  </li>
                  <li>
                    <a href="#">Breast</a>
                  </li>
                  <li>
                    <a href="#">Colon</a>
                  </li>
                  <li>
                    <a href="#">Childhood</a>
                  </li>
                </ul>
              </div>

              <div className="footer_part m-top-15">
                <h5>Important Links</h5>
                <ul className="footer_links">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Cookies Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer_part">
                <h5>Quick Contact</h5>
                <div className="footer_single_contact_info">
                  <h5>Phone:</h5>
                  <p>
                  Nairobi: 0748 811 909 <br /> Eldoret: 0746 963 107
                  </p>
                </div>
                <div className="footer_single_contact_info">
                  <h5>Email:</h5>
                  <p>
                  info@farajacancersupport.org
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer_part">
              <div className="thumb-wrapper">
								<div className="img-box">
                  <Image 
                  src={Childhood} 
                  // height={180}
                  />
								</div>
								<div className="thumb-content">
									<h4>Buy Safari Lounge Coffee and support patients and caregivers with cancer in Kenya</h4>
									<a href="#" className="btn btn-primary">Buy Now</a>
								</div>						
							</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_header_one section_padding_50 text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                &copy; {getCurrentYear()} All Rights Reserved by
                Faraja Cancer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
