import React from "react";
import BrandName from "./BrandName";
import NavLists from "./NavLists";

const Navbar = () => {
  return (
    <div className="flex justify-between items-end">
      <BrandName />
      <NavLists />
    </div>
  );
};

export default Navbar;
