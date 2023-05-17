import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq`*[_type == "therapy"] {
    _id,
    title,
    "bodyText": body[].children[],
  }`;

export default async function handler(req, res) {
  const therapy = await sanityClient.fetch(query);

  res.status(200).json({ therapy });
}
