import YoutubeEmbed from "../../Common/YoutubeEmbed";
import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import { fetchAPI } from "../../lib/api";
import Contact from "../../components/contact";
import { getTitleImage } from "../../utils/getTitleImage";
import Accordion from "./accordion/accordion";

const About = ({ about, global }) => {
  const {
    youtube_link,
    description,
    telephone,
    email,
    about_accordion,
  } = about.attributes;
  let title_image = getTitleImage(global, "ABOUT");

  return (
    <Layout>
      <PageTitle title="ABOUT" title_image={title_image} />
      <MainLayout animationDisabled>
        <div className="sm:px-10">
          <h1 className="my-5 text-3xl md:text-5xl sanspro font-black text-darkbrown text-center uppercase">
            Chair for Islamic Studies & Research
          </h1>
          <p className="my-5 text-lg font-bold text-darkbrown text-center px-16">
            UNIVERSITY OF CALICUT
          </p>
          {youtube_link && (
            <YoutubeEmbed
              embedLink={youtube_link}
              classes="mt-5 md:h-[30rem]"
            />
          )}
          <div className="markdown-reset">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="mt-5">
            {about_accordion.map(({ title, description, pdf }) => (
              <Accordion
                key={title}
                title={title}
                pdf={pdf}
                content={description}
              />
            ))}
          </div>
        </div>
        <div className="sm:px-10 my-10">
          <h1 className="my-10 pt-10 text-5xl sanspro font-black text-darkbrown text-center font-extrabold">
            CONTACT US
          </h1>
          <div className="flex shadow-lg bg-brown text-white rounded-md text-left justify-center py-10 px-1 mt-10">
            <div className="relative flex justify-between flex-col sm:flex-row text-lg font-semibold w-full px-3 sm:px-10">
              <div className="sm:w-2/4 mt-2">
                <div>
                  {/* <div className="markdown-reset">
                    <Markdown>{address}</Markdown>
                  </div> */}
                  <p className="my-3 font-semibold">
                    Email:{" "}
                    <a
                      className="hover:text-blue-500 text-yellow-300"
                      href={"mailto:" + email}
                    >
                      {email}
                    </a>
                  </p>
                  <p className="my-3 font-semibold">
                    Phone:{" "}
                    <a
                      className="text-yellow-300  hover:text-blue-500"
                      href={"tel:" + telephone}
                    >
                      {telephone}
                    </a>
                  </p>
                </div>
                <div>
                  <Contact />
                </div>
              </div>
              <div className="sm:ml-5 sm:w-2/4 flex justify-end mt-5 sm:mt-0 sm:h-52 map-continer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7152261889514!2d75.89251971419601!3d11.13457385552672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6513c490a804f%3A0x58cb496669f29102!2sIslamic%20chair%20and%20research%2C%20calicut%20university!5e0!3m2!1sen!2sin!4v1651944181265!5m2!1sen!2sin"
                  width="550"
                  height="550"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [about] = await Promise.all([
    fetchAPI("/abouts", {
      populate: ["about_accordion", "about_accordion.pdf"],
    }),
  ]);

  return {
    props: {
      about: about.data[0],
    },
    revalidate: 1,
  };
}

export default About;
