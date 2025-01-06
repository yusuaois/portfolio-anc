import { sanityClient } from "@/sanity/env";
import { Skill } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type == "skill"]`;

export async function GET() {
  const skills: Skill[] = await sanityClient.fetch(query);
  return NextResponse.json({ skills });
}
