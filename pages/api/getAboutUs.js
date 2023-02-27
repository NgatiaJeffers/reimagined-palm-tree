import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == "about"] {
    _id, 
    title,
    "image": mainImage.asset->,
    "bodyText": body[0].children[0].text,
    "text": body[1].children[].text
}`;

export default async function handler(req, res) {
    const about = await sanityClient.fetch(query);

    res.status(200).json({ about })
}