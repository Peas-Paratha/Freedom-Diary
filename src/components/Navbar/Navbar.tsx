import React from "react";
import BrandName from "./BrandName";
import NavLists from "./NavLists";

const Navbar = () => {
  return (
    <div className="flex justify-between items-end pb-4 border-b border-slate-500">
      <BrandName />
      <NavLists />
    </div>
  );
};

export default Navbar;
