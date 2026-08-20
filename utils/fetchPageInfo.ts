import { sanityClient } from "@/sanity/env";
import { groq } from "next-sanity";
import { PageInfo } from "@/typings";

const query = groq`
  *[_type == "pageInfo"][0]
`;

const fallback = {
  _type: "pageInfo",
  address: "",
  backgroundInformation: "",
  phoneNumber: "",
  email: "",
  role: "",
  name: "",
} as PageInfo;

export const fetchPageInfos = async (): Promise<PageInfo> => {
  try {
    const pageInfo: PageInfo | null = await sanityClient.fetch(query);
    return pageInfo ?? fallback;
  } catch (err) {
    console.error("fetchPageInfos failed:", err);
    return fallback;
  }
};
