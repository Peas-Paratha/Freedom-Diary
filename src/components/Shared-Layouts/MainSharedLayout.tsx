import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainSharedLayout = () => {
  return (
    <div className="p-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainSharedLayout;
