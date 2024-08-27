import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url = null } = media?.data?.attributes || {};
  const imageUrl = url?.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
