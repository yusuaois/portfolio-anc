import { sanityClient } from "@/sanity/env";
import { groq } from "next-sanity";
import { PageInfo } from "@/typings";

const query = groq`
  *[_type == "pageInfo"][0]
`;

// 兜底数据：Sanity 不可用（构建期无外网 / 运行期接口超时）时仍能正常渲染，避免中断
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
    console.error("fetchPageInfos 失败，使用兜底数据：", err);
    return fallback;
  }
};
