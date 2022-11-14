import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
export default function Navbar() {
  return (
    <nav className=" w-full z-20 fixed bg-[#D7D7D7] ">
    
      <div>
        <div className="block sm:hidden">
          <NavbarDesktop />
        </div>
    
        <div className="hidden sm:block">
          <NavbarMobile />
        </div>
      </div>
    </nav>
  );
}
