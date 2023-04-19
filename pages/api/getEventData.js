import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const query = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  image,
  eventDate,
  eventLocation,
  "eventDetails": body[].children[].text,
  sponsorImages,
  organizedBy -> {
      name,
      slug {
          current
      }
  },
  eventIn -> {
      name,
      slug {
          current
      }
  },
  dateCreated
}`;

export default async function handler(req, res) {
  try {
    const slug = req.query.query;
    const event = await sanityClient.fetch(query, { slug });

    if (!event) {
      // If event data is not found, return a 404 response
      return res.status(404).json({ error: "Event not found" });
    }

    // If event data is found, return a 200 response with the event data
    res.status(200).json({ event });
  } catch (err) {
    // If an error occurs, return a 500 response with the error message
    res.status(500).json({ error: err.message });
  }
}
