import React from "react";
import BrandName from "./BrandName";
import NavLists from "./NavLists";
import NavHamburger from "./NavHamburger";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pb-24">
      <BrandName />
      <NavLists />
      <NavHamburger />
    </div>
  );
};

export default Navbar;
