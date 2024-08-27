import EventCard from "../../components/Home/EventCard";
import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import { fetchAPI } from "../../lib/api";
import { getTitleImage } from "../../utils/getTitleImage";

const Events = ({ events,global }) => {
  let title_image =  getTitleImage(global,"EVENTS")

  return (
    <Layout>
      <PageTitle title="EVENTS" title_image={title_image}/>
      <MainLayout>
        <div className="my-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {events.map((event, index) => (
              <EventCard key={index} data={event} />
            ))}
          </div>
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [data] = await Promise.all([
    fetchAPI("/events", { populate: "image" }),
  ]);

  return {
    props: {
      events: data.data,
    },
    revalidate: 1,
  };
}

export default Events;
