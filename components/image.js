import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height||300}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;