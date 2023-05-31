import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

import { urlFor } from "../../../lib/sanity";

import titleShape from "../../../public/shapes/title-shape.webp";

const BlogSideBar = ({ recentBlog, blogs }) => {
  const { image, slug, title, publishedAt } = recentBlog
  return (
    <Fragment>
      <div className="col-lg-4 col-md-12">
        <div className="blog-post-sidebar">
          <div className="widget bg-white">
            <h2>
              Recent Posts
              <Image src={titleShape} />
            </h2>
            <div className="big-box bg-color">
              <Image src={urlFor(image?.asset).url()} width={280} height={150} />
              <div className="content">
                <span className="date d-block text-gray-color">
                  <BsFillCalendar2CheckFill className="icon" />
                  {moment(publishedAt).format("dddd, MMMM Do YYYY")}
                </span>
                <h3 className="mb-0">
                  <Link
                    as={`/whats-happening/${slug?.current}`}
                    href={"/whats-happening/[slug]"}
                  >
                    <a>{title}</a>
                  </Link>
                </h3>
              </div>
            </div>
            {blogs.map((item) => {
              const { _id, image, title, slug, publishedAt } = item;

              if (blogs.title !== "White Water Rafting") {
                return (
                  <article className="post-item" key={_id}>
                    <div className="thumb">
                      <Image
                        src={urlFor(image?.asset).url()}
                        layout="fill"
                        objectFit="contain"
                        style={{ position: "relative !important" }}
                      />
                    </div>
                    <div className="info">
                      <span className="date">
                        <BsFillCalendar2CheckFill className="icon" />
                        {moment(publishedAt).format("dddd, MMMM Do YYYY")}
                      </span>
                      <h4 className="post-item-title">
                        <Link
                          as={`/whats-happening/${slug?.current}`}
                          href={"/whats-happening/[slug]"}
                        >
                          <a>{title}</a>
                        </Link>
                      </h4>
                    </div>
                  </article>
                );
              }
            })}
          </div>
          <div className="widget bg-white">
            <h2>
              Follow Us
              <Image src={titleShape} />
            </h2>
            <ul className="socials ps-0 mb-0">
              <li className="d-flex align-items-center justify-content-between">
                <Link href={"https://www.facebook.com/FarajaCancerSupport/"}>
                  <a className="d-flex align-items-center">
                    <span className="icon-wrap">
                      <AiFillFacebook className="icon" />
                    </span>
                    Facebook
                  </a>
                </Link>
                <span className="text-gray-color">
                  <Link href={"https://www.facebook.com/FarajaCancerSupport/"}>
                    <a className="d-flex align-items-center">
                      <span className="icon-wrap">
                        <FiExternalLink className="icon-link" />
                      </span>
                      Facebook
                    </a>
                  </Link>
                </span>
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <Link href={"https://www.instagram.com/farajacancersupport/"}>
                  <a className="d-flex align-items-center">
                    <span className="icon-wrap">
                      <AiFillInstagram className="icon" />
                    </span>
                    Instagram
                  </a>
                </Link>
                <span className="text-gray-color">
                  <Link href={"https://www.instagram.com/farajacancersupport/"}>
                    <a className="d-flex align-items-center">
                      <span className="icon-wrap">
                        <FiExternalLink className="icon-link" />
                      </span>
                      Instagram
                    </a>
                  </Link>
                </span>
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <Link href={"https://www.youtube.com/@FarajaCancerSupport"}>
                  <a className="d-flex align-items-center">
                    <span className="icon-wrap">
                      <AiFillYoutube className="icon" />
                    </span>
                    YouTube
                  </a>
                </Link>
                <span className="text-gray-color">
                  <Link href={"https://www.youtube.com/@FarajaCancerSupport"}>
                    <a className="d-flex align-items-center">
                      <span className="icon-wrap">
                        <FiExternalLink className="icon-link" />
                      </span>
                      YouTube
                    </a>
                  </Link>
                </span>
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <Link href={"https://twitter.com/FarajaTrust"}>
                  <a className="d-flex align-items-center">
                    <span className="icon-wrap">
                      <AiFillTwitterSquare className="icon" />
                    </span>
                    Twitter
                  </a>
                </Link>
                <span className="text-gray-color">
                  <Link href={"https://twitter.com/FarajaTrust"}>
                    <a className="d-flex align-items-center">
                      <span className="icon-wrap">
                        <FiExternalLink className="icon-link" />
                      </span>
                      Twitter
                    </a>
                  </Link>
                </span>
              </li>

              <li className="d-flex align-items-center justify-content-between">
                <Link href={"https://www.tiktok.com/@farajacancersupport"}>
                  <a className="d-flex align-items-center">
                    <span className="icon-wrap">
                      <FaTiktok className="icon" />
                    </span>
                    TikTok
                  </a>
                </Link>
                <span className="text-gray-color">
                  <Link href={"https://www.tiktok.com/@farajacancersupport"}>
                    <a className="d-flex align-items-center">
                      <span className="icon-wrap">
                        <FiExternalLink className="icon-link" />
                      </span>
                      TikTok
                    </a>
                  </Link>
                </span>
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <Link href={"https://api.whatsapp.com/send?phone=0748811909"}>
                  <a className="d-flex align-items-center">
                    <span className="icon-wrap">
                      <FaTiktok className="icon" />
                    </span>
                    WhatsApp
                  </a>
                </Link>
                <span className="text-gray-color">
                  <Link href={"https://api.whatsapp.com/send?phone=0748811909"}>
                    <a className="d-flex align-items-center">
                      <span className="icon-wrap">
                        <FiExternalLink className="icon-link" />
                      </span>
                      WhatsApp
                    </a>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogSideBar;
