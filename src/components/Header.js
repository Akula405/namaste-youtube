import React from "react";
import { hamburgerIcon } from "../utills/constants";
import { notificationIcon } from "../utills/constants";
import { youTubeImage } from "../utills/constants";
import { userIcon } from "../utills/constants";
import { toggleMenu } from "../utills/appSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { microPhoneImg } from "../utills/constants";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={hamburgerIcon}
          alt="Menu Icon"
          className="h-8 mt-2 cursor-pointer"
          onClick={handleToggleMenu}
        />

        <a href="/">
          <img src={youTubeImage} alt="youTube Logo" className=" h-12 mx-3" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="border-2 w-1/2 rounded-l-full py-1 px-2"
          placeholder="Search"
        />
        <button className="border-2 bg-gray-50 py-1 px-2 rounded-r-full">
          🔍
        </button>
      </div>

      <div className="flex col-span-1 px-10">
        <img src={notificationIcon} alt="Ntification Icon" className="h-8" />
        <img src={userIcon} alt="User Icon" className="h-8 mx-3" />
      </div>
    </div>
  );
};

export default Header;
