import { Social } from "@/typings";

export const fetchSocials = async () => {
  
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    // );

    // const data = await res.json();

    // const socials: Social[] = data.socials;

    // return socials;

    const data = {"socials":[{"_createdAt":"2025-01-06T03:28:28Z","_id":"8f32d6c7-5120-4589-b29d-762c9ae1bddb","_rev":"Y8rJHoU3kXS3JUZUHvm3n4","_type":"social","_updatedAt":"2025-01-06T03:28:39Z","title":"Github","url":"https://github.com/yusuaois"},{"_createdAt":"2025-01-06T03:28:10Z","_id":"a347b9e7-5033-4b0d-979a-d3295e1a4716","_rev":"RD2wzW5n0wOI4NhQDxtr8D","_type":"social","_updatedAt":"2025-01-06T03:28:43Z","title":"LeetCode","url":"https://leetcode.cn/u/yusuaois/"},{"_createdAt":"2025-01-06T03:26:56Z","_id":"e19512b4-a0ef-4b43-ad81-90de82f19f0a","_rev":"CsGuwmQ5PMpgptIBJGkztG","_type":"social","_updatedAt":"2025-01-06T03:27:45Z","title":"BiliBili","url":"https://space.bilibili.com/37213096"}]}

    return data.socials
  
};
