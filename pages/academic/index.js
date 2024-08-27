import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import ProgrammeCard from "../../components/programmeCard";
import { fetchAPI } from "../../lib/api";
import { getPageDescription, getTitleImage } from "../../utils/getTitleImage";

const Academic = ({ programmes, global }) => {
  let page_desc = getPageDescription(global, "Academic");
  let title_image = getTitleImage(global, "Academic");

  return (
    <Layout>
      <PageTitle title="Academic" title_image={title_image} />
      <MainLayout>
        <h1 className="my-5 md:text-5xl text-4xl sanspro font-black uppercase text-primaryblue text-center">
          Study
        </h1>
        <p className="md:my-2 sanspro md:text-2xl text-xl font-semibold text-black-700 text-center">
          {page_desc
            ? page_desc
            : "We currently offer three full and part time academic programmes."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programmes.length ? (
            programmes.map((item, ind) => {
              return <ProgrammeCard details={item} key={ind} />;
            })
          ) : (
            <div className="my-20 text-3xl text-center w-full flex justify-center">
              No Data for Academic
            </div>
          )}
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [programmes] = await Promise.all([
    fetchAPI("/programmes", {
      filters: {
        type: "academic",
      },
      populate: ["image", "type"],
    }),
  ]);

  return {
    props: {
      programmes: programmes.data,
    },
    revalidate: 1,
  };
}

export default Academic;
