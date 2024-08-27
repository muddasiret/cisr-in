import App from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/social.css";
import "../styles/header.css";
import "../components/Carousel/carousel.css";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextSeo } from "next-seo";
import { getStrapiMedia } from "../lib/media";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  console.log(pageProps);
  const { global } = pageProps;
  const shareImage = global.attributes.defaultSeo.shareImage.data
    ? global.attributes.defaultSeo.shareimage?.data?.attributes?.url
    : "";
  const shareTitle = global.attributes.defaultSeo.metaTitle;
  const shareDesc = global.attributes.defaultSeo.metaDescription;

  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
        <meta property="og:title" content={shareTitle} key="title" />
        <meta property="og:description" content={shareDesc} />
        <meta property="og:type" content="site" />
        <meta property="og:image" content={shareImage} />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
      title_image: "*",
      title_image_individual: {
        populate: "*",
      },
      page_subtitles: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
