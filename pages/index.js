import React from "react";
// import Articles from "../components/articles";
import Layout from "../components/layout";
// import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import ItemCard from "../components/Home/ItemCard";
import NewsCard from "../components/Home/NewsCard";
import EventCard from "../components/Home/EventCard";
import CarouselGrid from "../components/Carousel";
import MainLayout from "../components/mainLayout";
import { NAV_LINKS } from "../Common/Header/constants";
import { useRouter } from "next/router";

const Home = (props) => {
  const { carousels, newses, events, homepage } = props;
  const router = useRouter();
  const logo = "/images/ico_white.ico";

  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <CarouselGrid carouselData={carousels} />
      <MainLayout>
        <div className="grid gap-4 space-x-4 mt-5">
          {newses ? (
            newses.length ? (
              <div className="my-10">
                <h1 className="md:text-5xl text-4xl sanspro text-darkbrown font-black text-left md:text-center">
                  CISR NEWS
                </h1>
                <p className="text-left md:text-center mb-10 text-darkbrown sanspro md:text-3xl text-xl ">
                  New Trends in Islamic Studies
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  {newses.map((news, ind) => {
                    return <NewsCard newsDetails={news} key={ind} />;
                  })}
                </div>
              </div>
            ) : null
          ) : null}
        </div>
        {newses ? (
          newses.length > 4 ? (
            <div className="w-100 flex justify-center">
              <button
                onClick={() => router.push("/news")}
                className="my-5 p-2 px-5 rounded text-white text-sm bg-brown"
              >
                SEE MORE
              </button>
            </div>
          ) : null
        ) : null}
      </MainLayout>
      <div
        className="py-10 my-10 md:px-16 px-5 mx-auto bg-white"
        style={{
          backgroundImage: `url(${"/images/bg-pattern.png"})`,
          backgroundSize: "cover",
        }}
      >
        {events && events.length !== 0 && (
          <div className="my-5">
            <h1 className="md:text-5xl text-4xl sanspro font-black text-darkbrown text-left md:text-center">
              CISR EVENTS
            </h1>
            <p className="text-left md:text-center mb-12 sanspro text-darkbrown md:text-3xl text-xl ">
              Whats Happening in Islam in South Asia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:ml-12">
              {events.map((event, index) => (
                <EventCard key={index} data={event} />
              ))}
            </div>
          </div>
        )}
        {events && events.length > 3 && (
          <div className="w-100 flex justify-center">
            <button
              onClick={() => router.push("/events")}
              className="my-5 p-2 px-5 rounded text-white text-sm bg-brown"
            >
              SEE MORE
            </button>
          </div>
        )}
        <div className="flex justify-center h-20 relative">
          <img src={logo} className="absolute h-20 top-20" />
        </div>
      </div>
      {homepage?.attributes?.bottom_menu?.length && (
        <MainLayout>
          {/* <div className="md:flex md:space-x-4 py-5"> */}
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10">
            {homepage.attributes.bottom_menu.map((item, ind) => (
              <ItemCard key={ind} details={item} />
            ))}
          </div>
        </MainLayout>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [carouselsRes, newsRes, eventsRes, homepageRes] = await Promise.all([
    fetchAPI("/carousels", { populate: "image" }),
    fetchAPI("/newses", {
      populate: "image",
      "pagination[pageSize]": 4,
      "pagination[page]": 1,
    }),
    fetchAPI("/events", {
      populate: "image",
      "pagination[pageSize]": 3,
      "pagination[page]": 1,
    }),
    //fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
        bottom_menu: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      carousels: carouselsRes.data,
      newses: newsRes.data,
      events: eventsRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
