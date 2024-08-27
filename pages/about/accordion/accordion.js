import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Accordion = ({ title, content, pdf }) => {
  const [isActive, setIsActive] = useState(false);
  const pdfLink = pdf ? (pdf?.data ? pdf?.data?.attributes?.url : "") : "";
  const classes = typeof title === "string" ? "" : "mob-modal";
  return (
    <div className={"accordion-item" + " " + classes}>
      <div
        className="accordion-title"
        onClick={() => {
          if (typeof title === "string") setIsActive(!isActive);
        }}
      >
        {typeof title !== "string" ? (
          <Link
            href={title.link}
            className="uppercase rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-100 hover:text-slate-900 group relative"
          >
            {title.label}
          </Link>
        ) : (
          <div>{title}</div>
        )}
        {content && (
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={typeof title !== "string" ? "mob-modal-menu" : ""}
          >
            {isActive ? "-" : "+"}
          </div>
        )}
      </div>
      {isActive &&
        (Array.isArray(content) ? (
          <div className="accordion-content">
            {content &&
              content.map((link, ind) => (
                <div key={ind}>
                  <Link
                    href={link.link}
                    className="uppercase rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-100 hover:text-slate-900 group relative"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
          </div>
        ) : (
          <Fade direction="left" duration={700} triggerOnce>
            <div className="accordion-content">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </Fade>
        ))}
      {isActive && pdfLink && (
        <div className="mb-5">
          <a
            rel="noreferrer"
            className="p-5 text-blue-500 font-bold mb-5 pb-5"
            target={"_blank"}
            href={pdfLink}
          >
            View PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default Accordion;
