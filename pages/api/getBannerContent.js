// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == "bannerContent"] {
    _id,
    title,
    slug,
    "bannerImage": mainImage,
    "text": body[].children[].text
}`;


export default async function handler(req, res) {
    const images = await sanityClient.fetch(query);
    
    res.status(200).json({ images })
  }
  