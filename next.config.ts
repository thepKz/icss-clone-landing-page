import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/articles/articles-list",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/products/chatbot",
        destination: "/products/v-ai-agent",
        permanent: true,
      },
      { source: "/ai-soc", destination: "/products/ai-soc", permanent: true },
      { source: "/esg", destination: "/gioi-thieu", permanent: true },
      {
        source: "/products/pentest-services",
        destination: "/lien-he",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
