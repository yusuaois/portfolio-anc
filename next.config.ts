import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 多阶段构建：产出独立可运行的 standalone 目录（.next/standalone），
  // 运行时只需拷贝 server.js + 最小依赖 + .next/static + public。
  output: "standalone",
};

export default nextConfig;
