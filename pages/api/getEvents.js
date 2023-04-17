import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq `*[_type == "event"] {
    _id,
    title,
    slug,
    eventDatetime,
    eventDay,
    "eventDetails": body[].children[].text,
    organizedBy -> {
        name,
        slug {
            current
        }
    },
    eventLocation -> {
        name,
        slug {
            current
        }
    },
}`;


export default async function handler(req, res) {
    const events = await sanityClient.fetch(query);

    res.status(200).json({ events });
}
