const YoutubeEmbed = ({ classes, embedLink }) => {
  return (
    <iframe
      width="100%"
      className={classes+" rounded-md"}
      title="yt"
      src={embedLink}
    ></iframe>
  );
};

export default YoutubeEmbed;
