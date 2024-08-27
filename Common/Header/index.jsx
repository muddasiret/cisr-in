import { MOB_LINKS, NAV_LINKS } from "./constants";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Accordion from "../../pages/about/accordion/accordion";

const Header = () => {
  const logo = "/images/chair logon updated.png";
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="flex header-main justify-between mx-auto flex-row items-center	py-5 px-5 md:px-10 bg-brown">
        <div>
          <Link href="/">
            <img
              src={logo}
              className="w-auto h-12 cursor-pointer"
              alt="logo_university"
            />
          </Link>
        </div>
        <div className="md:hidden flex">
          <img
            src={"/images/search.png"}
            width={35}
            role="button"
            className="mr-4"
            onClick={() => {
              setSearchOpen(true);
              setHamburgerActive(true);
            }}
          />
          <img
            src={"/images/menu.png"}
            width={35}
            role="button"
            onClick={() => {
              setHamburgerActive(true);
            }}
          />
        </div>
        <nav className="hidden sm:flex sm:justify-center space-x-4 items-center">
          {Object.keys(NAV_LINKS).map((key, index) => (
            <div
              className="uppercase relative group text-md text-white hover:text-yellow-500"
              key={index}
            >
              <Link
                href={NAV_LINKS[key].link}
                className="uppercase rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-100 hover:text-slate-900 group relative"
              >
                {NAV_LINKS[key].label}
              </Link>
              {NAV_LINKS[key].sub && (
                <div className="absolute z-1 min-w-max bg-grey-200 hidden group-hover:block right-0 top-8">
                  <div className="bg-cream shadow-lg">
                    <div className="uppercase cursor-pointer flex-col flex">
                      {Object.keys(NAV_LINKS[key].sub).map(
                        (sub_key, key_index) => (
                          <Link
                            key={key_index}
                            href={NAV_LINKS[key].sub[key_index].link}
                          >
                            <div className="uppercase text-white cursor-pointer px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 group relative w-100 text-xs text-left">
                              <span>{NAV_LINKS[key].sub[key_index].label}</span>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* {searchOpen && (
            <Fade direction="down" duration={700} triggerOnce>
              <input className="search_input" />
            </Fade>
          )}
          <div
            onClick={() => setSearchOpen(!searchOpen)}
            className="search_icon cursor-pointer"
          >
            <img src="/images/search.png" height={25} width={25} />
          </div> */}
        </nav>
        <div
          className="fixed bg-brown z-10 top-0 left-0 w-full right-0 bottom-0 h-full"
          style={{ display: hamburgerActive ? "block" : "none" }}
          data-behavior="header-menu"
        >
          <div className="px-3 text-right flex justify-between items-center my-5">
            <div className="text-white text-lg">
              <img
                src={logo}
                className="w-auto h-12 cursor-pointer"
                alt="logo_university"
              />
            </div>
            <svg
              width={35}
              color={"#fff"}
              onClick={() => {
                setHamburgerActive(false);
                setSearchOpen(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill="#fff" d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </div>
          {searchOpen && (
            <Fade direction="down" duration={700} triggerOnce>
              <div className="px-3">
                <input className="search_input w-full mb-5" />
              </div>
            </Fade>
          )}
          <div className="px-3 text-center mob-header-acc">
            {MOB_LINKS.map((mainLink, index) => {
              return (
                <Accordion
                  key={index}
                  title={mainLink}
                  content={mainLink.sub}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
