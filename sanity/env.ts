import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-06";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tulhd6kl";

export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  if (!source) {
    return { url: () => "" } as any;
  }
  return createImageUrlBuilder(config).image(source);
};
