import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-06";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

export const config = {
  projectId,
  dataset,
  apiVersion,
  // 必须为 false：构建期静态生成 + 运行期按需再验证（ISR）都要拿到最新数据。
  // useCdn:true 会命中 apicdn.sanity.io 缓存，发布后短时间内仍返回旧数据；
  // 而 revalidate=false 没有定时器兜底重试，一次拉到旧数据就会一直旧下去。
  useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  if (!source) {
    // 兜底：图片来源为空时返回安全对象，避免 `.url()` 抛错导致构建/渲染中断
    return { url: () => "" } as any;
  }
  return createImageUrlBuilder(config).image(source);
};
