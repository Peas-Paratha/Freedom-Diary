import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainSharedLayout = () => {
  return (
    <div className="bg-[#F5F5F5] px-8 py-11 sm:px-12 sm:py-11 min-h-screen overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainSharedLayout;
