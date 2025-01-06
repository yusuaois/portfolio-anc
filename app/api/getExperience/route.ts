import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type == "experience"]{
  ...,
  technologies[]->}`;

export async function GET() {
  const experiences: Experience[] = await sanityClient.fetch(query);
  return NextResponse.json({ experiences });
}
