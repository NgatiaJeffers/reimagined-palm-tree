import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq`*[_type == "trustee"] {
    _id,
    name,
    title,
    slug,
    image,
    "bio": bio[].children[],
}`;

export default async function handler(req, res) {
  const trustee = await sanityClient.fetch(query);

  res.status(200).json({ trustee });
}
