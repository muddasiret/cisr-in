import Link from "next/link";
import { useState } from "react";

const BookCard = ({ bookDetails }) => {
  let imgSrc = "/images/newsdummy.jpeg";
  const { book_name, short_description, cover, slug } = bookDetails.attributes;
  const [descriptionFormatted, setDescription] = useState(
    short_description
      ? short_description.length > 60
        ? short_description.slice(0, 60) + "...."
        : short_description
      : ""
  );
  if (bookDetails) {
    imgSrc = cover.data.attributes.url;
  }

  const showMore = () => {
    if (
      short_description.length > 60 &&
      descriptionFormatted !== short_description
    ) {
      setDescription(short_description);
    }
  };

  return (
    <div className="mt-5 text-left rounded-md bg-white  shadow-md group card-zoom hover:shadow-2xl">
      <img src={imgSrc} className="bookscardimg" />
      <Link href={`/tea-over-books/${slug}`} passHref={true}>
        <h2 className="text-left roboto-text cursor-pointer text-md uppercase text-lightdark px-3 py-2 leading-6">
          {book_name}
        </h2>
      </Link>
      <p
        onClick={() => showMore()}
        className="text-left px-3 mb-5 text-xs text-slate-600"
      >
        {descriptionFormatted}
      </p>
    </div>
  );
};

export default BookCard;
