import Link from "next/link";

const ItemCard = ({ details }) => {
  const { description, link, title, image } = details;
  const thumb = image?.data?.attributes?.url;

  return (
    <Link href={link}>
      <div className="mt-5 text-center py-5 px-5 mb-5 bg-white shadow-lg hover:shadow-2xl rounded-md cursor-pointer">
        <h2 className="text-center text-darkbrown py-2 font-bold text-lg">
          <p className="text-center py-2 uppercase roboto-text">{title}</p>
        </h2>
        <img
          src={thumb}
          alt="event-card"
          className="w-100 w-full h-40 object-cover rounded-md"
        />
        <div
          className="my-2 item-card-desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <button className="mb-5 mt-2 p-2 px-5 rounded text-white text-sm bg-brown">
          READ MORE
        </button>
      </div>
    </Link>
  );
};

export default ItemCard;
