import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Sanity webhook 回调：内容发布后触发，重新生成首页静态内容（按需 ISR）。
 * 安全：校验 Authorization: Bearer <secret>，与 Sanity webhook 里配置的 Header 一致。
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: "SANITY_REVALIDATE_SECRET 未配置" },
      { status: 500 }
    );
  }

  const token = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const queryToken = req.nextUrl.searchParams.get("secret");

  if (token !== secret && queryToken !== secret) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    revalidatePath("/");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("revalidatePath 失败：", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
