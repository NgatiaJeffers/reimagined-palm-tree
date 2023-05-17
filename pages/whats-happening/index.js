import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { urlFor } from "../../lib/sanity";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import BlogSideBar from "../components/BlogSideBar";

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
                              backgroundImage: `url(${urlFor(image?.asset).url()})`,
                            }}
                          >
                            <Image
                              src={urlFor(image?.asset).url()}
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
            <BlogSideBar recentBlog={recentBlog} blogs={blogs} />
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
