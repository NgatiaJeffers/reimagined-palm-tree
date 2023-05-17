import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq`*[_type == "supportGroup"] {
    _id,
    title,
    slug,
    description,
    "image": mainImage,
    "bodyText": body[].children[],
    pdf,
    "eldoretPdfUrl": pdf[0].asset -> url,
    "nairobiPdfUrl": pdf[1].asset -> url,
  }`;

export default async function handler(req, res) {
  const supportGroup = await sanityClient.fetch(query);

  res.status(200).json({ supportGroup });
}