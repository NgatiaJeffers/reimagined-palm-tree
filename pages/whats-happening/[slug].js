import React, { Fragment } from "react";
import { AiFillCalendar } from "react-icons/ai";
import { fetchBlog } from "../../util/fetchBlog";
import { fetchBlogItem } from "../../util/fetchBlogItem";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import { rgbDataURL } from "../../util/util";
import BlogSideBar from "../components/BlogSideBar";

const BlogItem = (props) => {
  const { blog, blogs } = props;
  const { _id, title, blogDetails, publishedAt, slug, image } = blog;
  const recentBlog = blogs[2]

  return (
    <Fragment>
      <section className="wide-tb-100 bg-color">
        <div className="page-banner-area bg-fff5f5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <h1 className="mb-0">{title}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details-area pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="blog-details blog-details-desc bg-white">
                  <div className="post-thumb">
                    <Image
                      src={urlFor(image?.asset).url()}
                      width={600}
                      height={389}
                      blurDataURL={rgbDataURL(237, 181, 6)}
                      placeholder="blur"
                    />
                  </div>

                  <div className="post-title">
                    <div className="category text-main-color text-hover-black-color fw-medium d-inline-block text-uppercase">
                      <h2 className="heading-main">{title}</h2>
                    </div>
                    <ul className="d-flex meta ps-0 mb-0 list-unstyled">
                      <li>
                        <AiFillCalendar />
                        {publishedAt}
                      </li>
                      <li>
                        <i className="flaticon-time"></i>2 min read{" "}
                      </li>
                    </ul>
                  </div>

                  <div className="blog-details-content post-desc">
                    <p>{blogDetails}</p>
                  </div>
                </div>
              </div>
              <BlogSideBar recentBlog={recentBlog} blogs={blogs} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogItem;

// Backend calls for static side data
export const getStaticPaths = async () => {
  try {
    // Fetch the slugs for all blogs
    const blogs = await fetchBlog();

    const paths = blogs?.map((item) => ({
      params: { slug: item?.slug?.current },
    }));

    // Return the paths for pre-generation
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (ctx) => {
  try {
    const { slug } = ctx.params || {};
    const blog = await fetchBlogItem(slug);
    const blogs = await fetchBlog()

    if (!blog) throw new Error("No blog data found");

    return {
      props: {
        blogs,
        blog,
        slug,
      },
      revalidate: 5,
    };
  } catch (err) {
    return {
      notFound: true,
      revalidate: 5,
    };
  }
};
