import React from "react";
import { userIcon } from "../utills/constants";

const Comments = ({ data }) => {
  const { name, text } = data;
  console.log(name, text);
  return (
    <div className="m-4 shadow-md bg-gray-100">
      <div className="flex">
        <div className="">
          <img src={userIcon} alt="User Icon" className="h-8 w-8  mr-3" />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="">{text}</p>
        </div>
      </div>
    </div>
  );
};
export const ComentsList = ({ coments }) => {
  return coments.map((each) => (
    <div className="">
      <Comments data={each} />

      <div className="pl-5 border border-l-black ml-4">
        <ComentsList coments={each.replies} />
      </div>
    </div>
  ));
};

export default Comments;
