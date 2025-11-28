import { sanityClient } from "@/sanity/env";
import { Social } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type == "social"]`;

export async function GET() {
  try {
    const socials: Social[] = await sanityClient.fetch(query);
    return NextResponse.json({ socials });
  } catch (err) {
    return NextResponse.json({ socials: [] });
  }
}
