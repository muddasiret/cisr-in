import Link from "next/link";
import Moment from "react-moment";
import { BiTime } from "react-icons/bi";
import { useEffect } from "react";

const EventCard = ({ data }) => {
  let imgSrc =
    "https://479141-1506839-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/college_closed_img-700x441.jpg";
  const { title, date, time, slug, location } = data.attributes;
  var today = new Date();
  const eventdate = new Date(date);

  if (data) {
    imgSrc = data.attributes.image?.data?.attributes?.url;
  }

  return (
    <Link href={`/events/${slug}`} passHref={true}>
      <div className="mt-5 text-left cursor-pointer relative">
        <img
          src={imgSrc}
          alt="event-card"
          className="w-full h-64 object-cover rounded-md shadow-2xl"
        />
        <div className="absolute bottom-0 w-full">
          {date && time && (
            <div className="flex">
              <p className="text-xs text-white bg-blue-600/[.4] px-2 py-2 w-6/12 flex items-center">
                <BiTime color="white" className="mr-1" />
                <Moment format="MMM Do YYYY">{date}</Moment>
                <span className="ml-3">{time}</span>
              </p>
              {today < eventdate && (
                <p className="text-white bg-red-600/[.85] w-6/12 flex justify-center items-center text-sm">
                  UPCOMING EVENT
                </p>
              )}
            </div>
          )}
          <div className="text-white bg-slate-700/[.6] w-full py-2 px-3">
            <h4 className="text-left text-md roboto-text">{title}</h4>
            <span className="text-xs">{location}</span>
          </div>
        </div>
        {/* <p className="pt-2 text-sm pr-5">
        Finance Manager The Finance Manager with oversight from the Operations
        Director will be [...]
      </p> */}
      </div>
    </Link>
  );
};

export default EventCard;
