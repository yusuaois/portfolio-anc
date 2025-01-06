import { Skill } from "@/typings";

export const fetchSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch skills");
    }

    const data = await res.json();

    const skills: Skill[] = data.skills;

    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};
