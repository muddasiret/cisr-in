export const getTitleImage = (global, title) => {
  let imgSrc = global?.attributes?.title_image?.data?.attributes?.url;
  if (title) {
    if (global?.attributes?.title_image_individual) {
      let array = global?.attributes?.title_image_individual;
      var result = array.filter(
        (obj) => obj?.title?.toLowerCase() === title?.toLowerCase()
      );
      if (result.length) {
        return result?.[0]?.image?.data?.attributes?.url;
      }
    }
  }
  return imgSrc;
};

export const getPageDescription = (global, title) => {
  return global?.attributes?.page_subtitles?.filter(
    (o) => o?.page?.toUpperCase() === title?.toUpperCase()
  ).length !== 0
    ? global?.attributes?.page_subtitles?.filter(
        (o) => o?.page?.toUpperCase() === title?.toUpperCase()
      )?.[0]?.description
    : null;
};
