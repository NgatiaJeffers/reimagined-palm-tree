import React from "react";
import Link from "next/link";
import Image from "next/image";

import Childhood from "../../public/Childhood.png";
import facebook from "../../public/Social-media/facebook.png";
import instagram from "../../public/Social-media/instagram.png";
import linkedin from "../../public/Social-media/linkedin.png";
import tiktok from "../../public/Social-media/tiktok-white.png";
import twitter from "../../public/Social-media/twitter.png";
import whatsapp from "../../public/Social-media/whatsapp.png";
import youtube from "../../public/Social-media/youtube.png";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

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
            </div>
            <div className="col-12 col-md-6 col-lg-3">
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

                <div className="footer_part m-top-15">
                  <h5>Social Links</h5>
                  <ul className="footer_social_links">
                    <li>
                      <a href="#">
                        <Image src={facebook} height={30} width={30} />
                        <span className="social-name">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={tiktok} height={30} width={30} /> 
                        <span className="social-name">TikTok</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={youtube} height={30} width={30} />
                        <span className="social-name">YouTube</span> 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={twitter} height={30} width={30} />
                        <span className="social-name">Twitter</span> 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={instagram} height={30} width={30} />
                        <span className="social-name">Instagram</span>
                        
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={linkedin} height={30} width={30} />
                        <span className="social-name">Linkedin</span> 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={whatsapp} height={30} width={30} />
                        <span className="social-name">Whatsapp</span> 
                      </a>
                    </li>
                  </ul>
                </div>
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
                  <p>info@farajacancersupport.org</p>
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
                    <h4>
                      Buy Safari Lounge Coffee and support patients and
                      caregivers with cancer in Kenya
                    </h4>
                    <a href="#" className="btn btn-primary">
                      Buy Now
                    </a>
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
                &copy; {getCurrentYear()} All Rights Reserved by Faraja Cancer
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
