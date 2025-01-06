import { PageInfo } from "@/typings";

export const fetchPageInfos = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfos}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch pageInfo");
    }

    const data = await res.json();

    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
  } catch (error) {
    console.error("Error fetching pageInfo:", error);
    throw error;
  }
};
