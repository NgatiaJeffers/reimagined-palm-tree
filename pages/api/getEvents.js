import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq`*[_type == "event"] {
    _id,
    title,
    slug,
    dateCreated,
    eventDate,
    image,
    "eventDetails": body[].children[].text,
    sponsorImages,
    organizedBy -> {
        name,
        slug {
            current
        }
    },
    eventLocation,
    eventIn-> {
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
