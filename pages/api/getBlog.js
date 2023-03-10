import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == 'blog'] {
    _id,
    title,
    slug,
    author -> {
    name,
    image
  }, 
  "image": mainImage.asset ->,
  description
  }`;

export default async function handler(req, res) {
  const blog = await sanityClient.fetch(query);

  res.status(200).json({ blog });
}
