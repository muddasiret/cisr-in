import Link from "next/link";
import React from "react";

const ProgrammeCard = ({ details }) => {
  const { title, slug, image, category } = details.attributes;
  const thumb = image?.data?.attributes?.url;
  let degree = category ? category : "diploma";

  return (
    <Link href={"/programmes/" + slug}>
      <div className="my-7 flex flex-col justify-center items-center text-center rounded-md bg-white cursor-pointer shadow-lg group card-zoom hover:shadow-2xl">
        <h2 className="project-header text-center roboto-text my-5 text-lg uppercase text-lightdark px-5 pb-2 pt-2  leading-6">
          {title}
        </h2>
        <div
          style={{ backgroundImage: `url(${thumb})` }}
          className="h-44 w-10/12 bg-cover"
        />
        <p className="text-center py-5 uppercase font-semibold">{degree}</p>
        <div className="text-center mb-5">
          <button className="bg-brown text-white p-2 px-5 rounded text-center align-middle mb-2">
            READ MORE
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProgrammeCard;
