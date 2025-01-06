import { Project } from "@/typings";

export const fetchProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();

    const projects: Project[] = data.projects;

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
