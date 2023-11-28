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
export const AdVideoCard = ({ info, data }) => {
  return (
    <div className="p=1 m-1 border border-red-700">
      <VideoCard info={info} />
      <p>{data}</p>
    </div>
  );
};
export default VideoCard;
