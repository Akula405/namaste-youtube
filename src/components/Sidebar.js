import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.appMenu.isMenuDisplay);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg py-5 px-8 w-48">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>User</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Sports</li>
          <li>Movies</li>
          <li>Technologies</li>
          <li>Cooking</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
