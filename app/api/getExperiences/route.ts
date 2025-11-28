import { sanityClient } from "@/sanity/env";
import { Experience } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type == "experience"]{
  ...,
  technologies[]->}`;

export async function GET() {
  try{
    const experiences: Experience[] = await sanityClient.fetch(query);
    return NextResponse.json({ experiences });
  }
  catch(err){
    // 返回空数组以防止错误
    return NextResponse.json({ experiences: [] });
  }
  // const experiences: Experience[] = await sanityClient.fetch(query);
  // return NextResponse.json({ experiences });
}
