import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

function Body() {
  return (
    <div className="flex mt-20">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Body;
