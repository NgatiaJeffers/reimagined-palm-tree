import  { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == "testimonial"] {
    _id,
    title,
    name,
    "image": mainImage.asset->,
    "text": body[].children[].text
}`;

export default async function handler(req, res) {
    const testimonial = await sanityClient.fetch(query);
    console.log(testimonial);
    res.status(200).json({ testimonial });
}