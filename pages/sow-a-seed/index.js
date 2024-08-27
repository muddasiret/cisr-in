import YoutubeEmbed from "../../Common/YoutubeEmbed";
import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import { fetchAPI } from "../../lib/api";
import { getTitleImage } from "../../utils/getTitleImage";

const SowASeed = ({ seeds,global }) => {
  let title_image =  getTitleImage(global,"SOW A SEED")

  const { description, main_youtube, weekly_timetable, end_youtube } =
    seeds[0].attributes;

  const timeTableItem = (item, ind) => {
    const { image } = item;
    const thumb = image.data[0].attributes.url;
    return (
      <div key={ind} className="text-center">
        <div className="text-red-700 font-bold">{item.day}</div>
        <div className="font-bold leading-8 my-2">{item.time}</div>
        <div className="text-center flex justify-center my-3">
          <img src={thumb} alt="profile" className="text-center h-32 flex" />
        </div>
        <div className="text-2xl roboto-text text-red-700 font-bold my-3">
          {item.speaker}
        </div>
        <div className="italic  my-3">{item.topic}</div>
        <div>{item.description}</div>
      </div>
    );
  };
  return (
    <Layout>
      <PageTitle title="SOW A SEED" title_image={title_image}/>
      <MainLayout>
        <section className="pb-5">
          {description && (
            <p className="my-10 sanspro text-2xl font-semibold text-black-700 text-center mx-10">
              {description}
            </p>
          )}
          {main_youtube && (
            <div className="flex justify-center">
              <div className="w-2/3">
                <YoutubeEmbed
                  embedLink={main_youtube}
                  classes="mt-5 md:h-[26rem]"
                />
              </div>
            </div>
          )}
          <h2 className="text-center text-3xl pt-4 my-10 font-bold text-darkbrown leading-6">
            Weekly Timetable
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 bg-white rounded-md shadow-lg py-10 px-5">
            {weekly_timetable.map((item, ind) => {
              return timeTableItem(item, ind);
            })}
            {/* {weekly_timetable.map((item, ind) => {
              return timeTableItem(item, ind);
            })}
            {weekly_timetable.map((item, ind) => {
              return timeTableItem(item, ind);
            })}
            {weekly_timetable.map((item, ind) => {
              return timeTableItem(item, ind);
            })}
            {weekly_timetable.map((item, ind) => {
              return timeTableItem(item, ind);
            })} */}
          </div>

          {end_youtube && (
            <div className="flex justify-center mt-10">
              <div className="w-2/3">
                <YoutubeEmbed
                  embedLink={end_youtube}
                  classes="mt-5 md:h-[26rem]"
                />
              </div>
            </div>
          )}
        </section>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [data] = await Promise.all([
    fetchAPI("/sow-a-seeds", {
      populate: ["weekly_timetable", "weekly_timetable.image"],
    }),
  ]);

  return {
    props: {
      seeds: data.data,
    },
    revalidate: 1,
  };
}

export default SowASeed;
