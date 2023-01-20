import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    token: process.env.SANITY_API_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production"
}

// Set up the client for fetchingndata in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image Urls with only the asset reference data in your documentation
 * Read more: https://www.sanity.io/docs/image=url 
**/

export const urlFor = createImageUrlBuilder(config).image(source);