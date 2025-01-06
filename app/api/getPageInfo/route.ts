import { sanityClient } from "@/sanity/env";
import { PageInfo } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type == "pageInfo"][0]`;

export async function GET() {
  // 获取 pageInfo 数据
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  // 返回成功响应
  return NextResponse.json({ pageInfo });
}
