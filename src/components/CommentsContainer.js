import React from "react";
import Comments from "./Comments";
import { commentsData } from "../utills/constants";
import { ComentsList } from "./Comments";

const CommentsContainer = () => {
  return (
    <div className="">
      <h1 className="font-bold text-lg p-5 ">Comments :</h1>
      <ComentsList coments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
