import React, { useEffect } from "react";
import { closeMenu } from "../utills/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchPArams] = useSearchParams();
  //console.log("asdf", searchPArams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-4">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchPArams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
