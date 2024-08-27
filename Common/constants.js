export const BASE_URL =
  process.env.NEXT_APP_NODE_ENV === "PRODUCTION"
    ? "https://islamicuniversity-strapi.herokuapp.com"
    : "http://localhost:1337";
