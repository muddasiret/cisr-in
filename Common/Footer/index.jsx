import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import { NAV_LINKS } from "../Header/constants";

const Footer = ({ footer_address_email_phone, footer_sub }) => {
  return (
    <>
      <div className="bg-brown">
        <div className="container mx-auto grid gap-4 md:grid-cols-3 py-5 px-5 md:px-10 text-left">
          <div className="md:border-r pr-5 py-3">
            <p className="text-white text-lg">NAVIGATE TO</p>
            <div className="">
              {Object.keys(NAV_LINKS).map((key, index) => (
                <Link key={index} href={NAV_LINKS[key].link}>
                  <div className="flex items-center py-2 border-b-2">
                    <MdNavigateNext color="white" />
                    <p className="text-white text-sm uppercase">
                      {NAV_LINKS[key].label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="markdown-reset">
              <div
                dangerouslySetInnerHTML={{ __html: footer_address_email_phone }}
              />
            </div>
            {/* <p className="text-white text-base">
              Islamic University | Registered UK Charity No. 1137219
            </p>
            <br />
            <p className="text-white text-base">14 St Paul’s Road</p>
            <p className="text-white text-base">
              Phone:{" "}
              <a className="text-yellow-500" href="tel:+4733378901">
                4733378901
              </a>
            </p>
            <p className="text-white text-base">
              Email:{" "}
              <a className="text-yellow-500" href="mailto:someone@example.com">
                someone@example.com
              </a>
            </p> */}
          </div>
        </div>
        <div className="bg-cream">
          <div className="md:flex justify-between pb-16 pt-7 md:py-7 px-10 h-10 items-center container mx-auto">
            <p className="text-white text-xs">{footer_sub}</p>
            <div className="flex md:justify-end justify-center items-center my-3">
              <a className="px-3" href="www.facebook.com" target="_blank">
                <FiMail color="white" />
              </a>
              <a className="px-3" href="www.facebook.com" target="_blank">
                <FiFacebook color="white" />
              </a>
              <a className="px-3" href="www.facebook.com" target="_blank">
                <FiInstagram color="white" />
              </a>
              <a className="px-3" href="www.facebook.com" target="_blank">
                <FiTwitter color="white" />
              </a>
              <a className="px-3" href="www.facebook.com" target="_blank">
                <FiYoutube color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
