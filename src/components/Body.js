import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="grid-flow-col flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
