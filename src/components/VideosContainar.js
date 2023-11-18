import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_DATA_API } from "../utills/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideosContainar = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_DATA_API);
    const json = await data.json();
    setVideos(json.items);
    //console.log(json.items);
  };
  return videos.length < 1 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainar;
