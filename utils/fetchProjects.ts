import { sanityClient } from "@/sanity/env";
import { groq } from "next-sanity";
import { Project } from "@/typings";

const query = groq`
  *[_type == "project"] | order(order asc, _createdAt desc){
    ...,
    technologies[]->
  }
`;

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const projects: Project[] = await sanityClient.fetch(query);
    return Array.isArray(projects) ? projects : [];
  } catch (err) {
    console.error("fetchProjects failed:", err);
    return [];
  }
};
