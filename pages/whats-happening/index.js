import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";

import BreadCrumb from "../../components/atoms/Breadcrumb";

import nature from "../../public/nature.jpg";
import titleShape from "../../public/shapes/title-shape.webp";
import challenge from "../../public/challenge.jpg";

// API CALLS
import { fetchBlog } from "../../util/fetchBlog";

const NewsAndMedia = (props) => {
  const { blogs } = props;
  const recentBlog = blogs[2];
  return (
    <Fragment>
      <BreadCrumb title={"What's Happening"} />
      <section className="blog-area bg-color">
        <div className="container">
          <div className="blog-title text-center">
            <div className="sub-title">
              <div className="inner text-center">
                <h3>Our Blog</h3>
              </div>
            </div>
            <h2>Trending</h2>
          </div>
          <div className="row justify-content-center">
            {/* start Blog Content */}
            <div className="col-lg-8 col-md-12 blog-post-list-with-pagination">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  {blogs?.map((item) => {
                    const { _id, image, title, description, slug } = item
                    return (
                      <div className="single-blog-post bg-white" key={_id}>
                      <div className="row">
                        <div className="col-lg-5 col-md-5">
                          <div
                            className="image-for-blog"
                            style={{
                              backgroundImage: `url(${image?.url})`,
                            }}
                          >
                            <Image
                              src={image?.url}
                              layout="fill"
                              objectFit="contain"
                              style={{ position: "relative !important" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                          <div className="content">
                            <ul className="meta ps-0">
                              <li>
                                <BsFillCalendar2CheckFill className="icon" />
                                <span>April 14, 2023</span>
                              </li>
                              <li>
                                <BiTimeFive className="icon" />
                                <span>2 min read</span>
                              </li>
                            </ul>
                            <h3>
                              <Link as={`/whats-happening/${slug?.current}`}
                              href={"/whats-happening/[slug]"}>
                                <a>{title}</a>
                              </Link>
                            </h3>
                            <p>{description}</p>
                            <Link as={`/whats-happening/${slug?.current}`}
                              href={"/whats-happening/[slug]"}>
                              <a className="post-btn">
                                <span>Continue Reading</span>
                                <FiArrowUpRight className="icon" />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="blog-post-sidebar">
                <div className="widget bg-white">
                  <h2>
                    Recent Posts
                    <Image src={titleShape} />
                  </h2>
                  <div className="big-box bg-color">
                    <Image
                      src={recentBlog?.image?.url}
                      width={280}
                      height={150}
                    />
                    <div className="content">
                      <span className="date d-block text-gray-color">
                        <BsFillCalendar2CheckFill className="icon" />
                        April 14, 2023
                      </span>
                      <h3 className="mb-0">
                      <Link as={`/whats-happening/${recentBlog?.slug?.current}`}
                              href={"/whats-happening/[slug]"}>
                          <a>{recentBlog?.title}</a>
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
                              src={image?.url}
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
                            <Link as={`/whats-happening/${slug?.current}`}
                              href={"/whats-happening/[slug]"}>
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
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NewsAndMedia;

// Backend Call for server side data
export const getStaticProps = async () => {
  const blogs = await fetchBlog();

  return {
    props: {
      blogs,
    },
  };
};
