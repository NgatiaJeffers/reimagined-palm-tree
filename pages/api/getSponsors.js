import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == 'sponsors'] {
    _id,
    name,
    slug,
    image,
  }`;

export default async function handler(req, res) {
    const sponsors = await sanityClient.fetch(query);

    res.status(200).json({ sponsors });
}