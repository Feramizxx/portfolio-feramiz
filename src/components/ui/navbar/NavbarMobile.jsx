import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import Logo from "../Logo";
function NavbarMobile() {
  const [isVisible, setIsvisible] = useState(false);
  const openMenu = () => {setIsvisible(!isVisible)};

  // onClick={openMenu}
  //         className="w-[80px] absolute right-0 z-20 hidden sm:block   "
  return (
    <div className="flex justify-between  items-start relative p-4">
     <div className=" right-8"><Logo /></div> 
      <div className="w-full">
      <svg onClick={openMenu} className="w-[60px] absolute right-0 z-20 hidden sm:block" width="48" height="32" viewBox="0 0 48 32"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z" />
        </svg>
         {isVisible && <ul className="flex flex-col pt-4 sm:pt-16   w-full items-center">
          <NavbarItems openMenu={openMenu}/>
        </ul>}
      </div>
    </div>
  );
}

export default NavbarMobile;
