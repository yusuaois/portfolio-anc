import { sanityClient } from "@/sanity/env";
import { groq } from "next-sanity";
import { Experience } from "@/typings";

const query = groq`
  *[_type == "experience"]{
    ...,
    technologies[]->
  }
`;

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const experiences: Experience[] = await sanityClient.fetch(query);
    return Array.isArray(experiences) ? experiences : [];
  } catch (err) {
    console.error("fetchExperiences 失败，使用空数组兜底：", err);
    return [];
  }
};
