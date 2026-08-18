import { sanityClient } from "@/sanity/env";
import { groq } from "next-sanity";
import { Project } from "@/typings";

const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
`;

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const projects: Project[] = await sanityClient.fetch(query);
    return Array.isArray(projects) ? projects : [];
  } catch (err) {
    console.error("fetchProjects 失败，使用空数组兜底：", err);
    return [];
  }
};
