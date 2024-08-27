import { useEffect } from "react";

const PageTitle = ({ title,title_image }) => {
  return (
    <div className="view-content relative">
      <div
        style={{
          backgroundImage: `url(${title_image})`,
        }}
        className="w-100 pagetitle-bg"
      >
        <div className="bg-overlay"></div>
        <h1 className="absolute bottom-0 left-0 page-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
