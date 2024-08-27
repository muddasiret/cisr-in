import React, { useEffect } from "react";

const PaperCard = ({ details }) => {
  const { title, author, image, pdf } = details?.attributes;
  const thumb = image?.data?.attributes?.url;
  const pdfLink = pdf?.data?.attributes?.url;

  return (
    <a href={pdfLink} target="_blank" rel="noreferrer">
      <div className="mt-5 text-left rounded-md bg-white cursor-pointer shadow-lg group card-zoom hover:shadow-2xl paper-card">
        <p className="text-left roboto-text text-md uppercase text-red-700 px-4 pt-4 font-bold ">
          {author}
        </p>
        <img src={thumb} className="p-4 h-52 newscardimg" />
        <h2 className="text-left roboto-text text-md uppercase text-lightdark px-4 pb-2 leading-6">
          {title}
        </h2>
      </div>
    </a>
    // <a
    //   href={pdfLink}
    //   target="_blank"
    //   rel="noreferrer"
    //   className="mt-5 text-left rounded-md bg-white p-5 cursor-pointer shadow-lg group card-zoom hover:shadow-2xl"
    // >
    //   <p className="text-primaryblue text-lg my-2 ">{author}</p>
    //   <img src={thumb} alt="thumb" />
    //   <h2 className="text-left text-md uppercase pt-4 mb-2 font-bold leading-6">
    //     {title}
    //   </h2>
    // </a>
  );
};

export default PaperCard;
