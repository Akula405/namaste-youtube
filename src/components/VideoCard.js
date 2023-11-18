import React from "react";

const VideoCard = (props) => {
  const { snippet, statistics } = props.info;
  const { channelTitle, title, thumbnails } = snippet;
  //console.log(statistics);

  return (
    <div className="p-2 m-2 w-64 shadow-lg">
      <img alt="Thumnails" src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
