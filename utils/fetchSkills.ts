import { sanityClient } from "@/sanity/env";
import { groq } from "next-sanity";
import { Skill } from "@/typings";

const query = groq`
  *[_type == "skill"]
`;

export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const skills: Skill[] = await sanityClient.fetch(query);
    return Array.isArray(skills) ? skills : [];
  } catch (err) {
    console.error("fetchSkills failed:", err);
    return [];
  }
};
