import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.reuvendev.site",
        port: "",
        pathname: "/Images/medias/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
