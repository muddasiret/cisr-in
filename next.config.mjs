/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost","islamicuniversity.s3.ap-south-1.amazonaws.com"],
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.SERVER,
    LOCAL_BACKEND: process.env.LOCAL_BACKEND
  },
};

export default nextConfig;
