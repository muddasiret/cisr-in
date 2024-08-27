import Moment from "react-moment";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { BsCalendar2Date } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import SocialButtons from "../../components/socialButtons";
import MainLayout from "../../components/mainLayout";
import Markdown from "markdown-to-jsx";

const Event = ({ article }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);
  const { title, location, datetime, description } = article.attributes;
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.title,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <Layout>
      <MainLayout>
        <Seo seo={seo} />
        <h1 className="py-2 text-2xl md:text-4xl text-primaryblue font-bold">
          {title}
        </h1>
        <SocialButtons title={title} />

        {/* <span className="bg-slate-100 text-slate-700 rounded-md p-2 mt-2 mb-2">
        <Moment format="MMM Do YYYY">{date}</Moment>
      </span> */}

        <div className="flex">
          <img src={imageUrl} alt="event-card" className="h-44 object-cover" />
          <div>
            {datetime && (
              <>
                <div className="flex items-center ml-5 mb-3">
                  <BsCalendar2Date color="grey" />
                  <p className="ml-2 text-slate-600">
                    <Moment format="MMM Do YYYY">{datetime}</Moment>
                  </p>
                </div>
                <div className="flex items-center ml-5 mb-3">
                  <BiTime color="grey" />
                  <p className="ml-2 text-slate-600">
                    <Moment format="LT">{datetime}</Moment>
                  </p>
                </div>
              </>
            )}
            <div className="flex items-center ml-5 mb-3">
              <GoLocation color="grey" />
              <p className="ml-2 text-slate-600">{location}</p>
            </div>
            {description && (
              <div className="ml-6 mb-3 pr-5 text-slate-600">
                <div className="markdown-reset">
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <YoutubeEmbed
        embedLink={youtube_link}
        classes="mt-5 md:px-20 md:h-[30rem]"
      /> */}
        {/* {pdf &&
        pdf.data &&
        pdf.data.map((pdf, ind) => {
          const pdfLink = pdf.attributes.url;
          const pdfName = pdf.attributes.name;
          return (
            <a key={ind} href={pdfLink} target="_blank" rel="noreferrer">
              <div className="py-2 mb-4 w-fit text-center px-3 bg-blue-700 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                Download {pdfName}
              </div>
            </a>
          );
        })} */}
      </MainLayout>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/events", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/events", {
    filters: {
      slug: params.slug,
    },
    populate: ["image"],
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Event;
