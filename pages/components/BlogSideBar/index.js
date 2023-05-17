import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { urlFor } from "../../../lib/sanity";

import titleShape from "../../../public/shapes/title-shape.webp";

const BlogSideBar = ({ recentBlog, blogs }) => {
  const { image, slug, title } = recentBlog
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
                  April 14, 2023
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
              const { _id, image, title, slug } = item;

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
                        April 14, 2023
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
                <Link href={"/"}>
                  <a className="d-flex align-items-center">
                    <span className="icon-wrap">
                      <AiFillFacebook className="icon" />
                    </span>
                    Facebook
                  </a>
                </Link>
                <span className="text-gray-color">
                  <Link href={"/"}>
                    <a className="d-flex align-items-center">
                      <span className="icon-wrap">
                        <FiExternalLink className="icon-link" />
                      </span>
                      Facebook
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