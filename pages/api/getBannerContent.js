// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == "bannerImage"] {
    _id,
    ...
}`;

type Data = {
    images: BannerContent[];
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    const images = await sanityClient.fetch(query);
    console.log(images)
    res.status(200).json({ images })
  }
  