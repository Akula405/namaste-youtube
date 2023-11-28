import React, { useState, useEffect } from "react";
import { hamburgerIcon } from "../utills/constants";
import { notificationIcon } from "../utills/constants";
import { youTubeImage } from "../utills/constants";
import { userIcon } from "../utills/constants";
import { toggleMenu } from "../utills/appSlice";
import { useDispatch } from "react-redux";
import { YOU_TUBE_SEARCH_API } from "../utills/constants";
//import { Link } from "react-router-dom";
//import { microPhoneImg } from "../utills/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggetion();
    }, 200);
    return () => clearInterval(timer);
  }, [search]);

  const fetchSuggetion = async () => {
    const data = await fetch(YOU_TUBE_SEARCH_API + search);
    const json = await data.json();
    setSuggetions(json[1]);
    console.log("asdfg", suggetions);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const handleBlur = () => {
    setIsShow(false);
  };
  const handleFocus = () => {
    setIsShow(true);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  //console.log("searchingggg", search);
  return (
    <div className="grid grid-flow-col p-5 shadow-lg ">
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
          value={search}
          className="border-2 w-1/2 rounded-l-full py-1 px-2"
          placeholder="Search"
          onChange={searchHandler}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <button className="border-2 bg-gray-50 py-1 px-2 rounded-r-full">
          🔍
        </button>

        {isShow && (
          <div className="bg-slate-100 px-3 py-2 rounded-lg w-[30rem] fixed ">
            <ul>
              {suggetions.map((i, j) => (
                <li key={j} className="py-1">
                  🔍 {i}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-1 px-10">
        <img src={notificationIcon} alt="Notification Icon" className="h-8" />
        <img src={userIcon} alt="User Icon" className="h-8 mx-3" />
      </div>
    </div>
  );
};

export default Header;
