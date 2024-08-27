import Link from "next/link";
import React from "react";

const ProjectCard = ({ details }) => {
  const { title, slug, image, short_description } = details.attributes;
  const thumb = image.data
    ? image?.data?.attributes?.url
    : "/images/placeholder.png";

  return (
    <Link href={"/projects/" + slug}>
      <div className="project-card my-4 flex flex-col justify-center items-center text-center rounded-md bg-white cursor-pointer shadow-lg group card-zoom hover:shadow-2xl">
        <h2 className="text-center roboto-text my-5 text-lg uppercase text-lightdark px-5 pb-2 pt-2 leading-6">
          {title}
        </h2>
        <img src={thumb} />
        {/* <div
          style={{ backgroundImage: `url(${thumb})` }}
          className="h-44 w-10/12 bg-cover"
        /> */}
        <p className="text-center text-slate-500 py-5 px-5 project-card-desc">
          {short_description}
        </p>
        <div className="text-center mb-5">
          <button className="text-white bg-brown rounded p-2 px-5 text-center align-middle mb-2">
            LEARN MORE
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
