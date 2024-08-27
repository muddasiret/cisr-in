import { useEffect, useState } from "react";

const SocialButtons = ({ title }) => {
  const [pageLink, setPageLink] = useState(null);
  useEffect(() => {
    setPageLink(window.location.href);
  }, []);

  const facebookShare = () => {
    window.open(
      `https://facebook.com/share.php?u=${pageLink}&amp;t=${title}`,
      "_blank",
      "top=150,left=400,width=450,height=550"
    );
  };
  const twitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${title}&amp;url=${pageLink}&amp`,
      "_blank",
      "top=150,left=400,width=450,height=550"
    );
  };

  return (
    <>
      {pageLink && (
        <div className="footer-social-icons flex items-end text-right mr-5">
          <ul className="social-icons mr-5">
            <li onClick={facebookShare}>
              <a href="" className="social-icon">
                {" "}
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li onClick={twitterShare}>
              <a href="" className="social-icon">
                {" "}
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href={`whatsapp://send?text=${title} - ${pageLink}`}
                className="social-icon"
              >
                {" "}
                <span href="" className="fa fa-whatsapp"></span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SocialButtons;
