// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == "bannerImage"] {
    _id,
    title,
    "image": mainImage.asset->
}`;


export default async function handler(req, res) {
    const images = await sanityClient.fetch(query);
    console.log(images)
    res.status(200).json({ images })
  }
  