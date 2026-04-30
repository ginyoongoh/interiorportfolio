import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    contentDispositionType: "inline",
    // 큰 도면/렌더링 이미지를 위해 제한 완화
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2400, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
};

export default nextConfig;
