# syntax=docker/dockerfile:1

# ============================================================================
# 阶段 1：安装依赖（复用 npm 缓存）
# ============================================================================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ============================================================================
# 阶段 2：构建（next build，产出 .next/standalone）
# ============================================================================
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* 变量在构建期被内联进 bundle，必须以 build arg 提供。
# 这些是公开值（非密钥），默认与 .env.local 一致；可用 compose build.args 覆盖。
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=tulhd6kl
ARG NEXT_PUBLIC_SANITY_DATASET=production
ARG NEXT_PUBLIC_SANITY_API_VERSION=2025-01-06
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID \
    NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET \
    NEXT_PUBLIC_SANITY_API_VERSION=$NEXT_PUBLIC_SANITY_API_VERSION \
    NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ============================================================================
# 阶段 3：运行（最小镜像，仅 standalone 产物）
# ============================================================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_PUBLIC_SANITY_PROJECT_ID=tulhd6kl \
    NEXT_PUBLIC_SANITY_DATASET=production \
    NEXT_PUBLIC_SANITY_API_VERSION=2025-01-06

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# standalone 产物：server.js + 裁剪后的 node_modules
COPY --from=builder /app/.next/standalone ./
# 静态资源（JS/CSS/图片 chunks）
COPY --from=builder /app/.next/static ./.next/static
# public 目录（Logo 等静态文件）
COPY --from=builder /app/public ./public

# 修复权限：拷贝进来的文件属主是 root，非 root 的 nextjs 用户读不了，
# 会报 `EACCES: permission denied, scandir '/app/public/img'` 并导致 crash loop。
# chown 让 nextjs 拥有全部文件；chmod 补齐目录的可读/可进入位，同时让 .next 可写（按需再验证缓存）。
RUN chown -R nextjs:nodejs /app \
    && chmod -R u+rwX /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
