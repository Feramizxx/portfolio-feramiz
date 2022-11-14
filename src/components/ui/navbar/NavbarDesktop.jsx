import React from "react";
import NavbarItems from "./NavbarItems";
import Logo from "../Logo"
const NavbarDesktop = () => {
  return (
    <nav className="flex h-[80px] items-start justify-between w-[90%] mr-auto ml-auto sm:m-0 py-4">
      <Logo />
      <div >
      <ul className="flex sm:flex-col sm:fixed pt-2  right-0  sm:w-[180px] ">
        <NavbarItems />
      </ul>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
