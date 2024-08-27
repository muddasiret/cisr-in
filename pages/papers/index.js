import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import PaperCard from "../../components/paperCard";
import { fetchAPI } from "../../lib/api";
import { getPageDescription, getTitleImage } from "../../utils/getTitleImage";

const Papers = ({ papers, global }) => {
  let title_image = getTitleImage(global, "PAPERS");
  let page_desc = getPageDescription(global, "PAPERS");
  const { research_paper_title } = global?.attributes;
  
  return (
    <Layout>
      <PageTitle title="PAPERS" title_image={title_image} />
      <MainLayout>
        {research_paper_title && (
          <h1 className="my-5 md:text-5xl text-4xl sanspro font-black text-primaryblue uppercase text-center">
            {research_paper_title}
          </h1>
        )}
        <p className="my-5 sanspro md:text-2xl font-semibold text-center md:px-16 md:mx-10">
          {page_desc
            ? page_desc
            : `From time to time, Cambridge Muslim College commissions scholarly
            papers and articles. Nine of these are published and can be downloaded
            as PDF documents below.`}
        </p>
        {papers && papers.length !== 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {papers.map((item, ind) => {
              return <PaperCard details={item} key={ind} />;
            })}
          </div>
        )}
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [papers] = await Promise.all([
    fetchAPI("/papers", { populate: ["image", "pdf"] }),
  ]);

  return {
    props: {
      papers: papers.data,
    },
    revalidate: 1,
  };
}

export default Papers;
