import { sanityClient } from "@/sanity/env";
import { groq } from "next-sanity";
import { Social } from "@/typings";

const query = groq`
  *[_type == "social"]
`;

export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const socials: Social[] = await sanityClient.fetch(query);
    return Array.isArray(socials) ? socials : [];
  } catch (err) {
    console.error("fetchSocials failed:", err);
    return [];
  }
};
