import React from "react";
import { ReactComponent as Facebook } from "../../assets/icons/facebookFooter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedinFooter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagramFooter.svg";
import { ReactComponent as Mail } from "../../assets/icons/mailFooter.svg";
import helpers from "../helpers";

const backToTop=()=>{
helpers.scrollTop("smooth")

}
const Footer = () => {
  return (
    <footer className="w-full   h-[300px] bg-[#1A1A1A] flex flex-col items-center text-white pt-12">
      <button className="flex items-center flex-col pt-8">
        <span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.12497 5.3125V8.125L7.49997 5L11.875 8.125V5.3125L7.49997 2.1875L3.12497 5.3125Z"
              fill="white"
            />
            <path
              d="M3.12497 9.6875V12.5L7.49997 9.375L11.875 12.5V9.6875L7.49997 6.5625L3.12497 9.6875Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="font-[700] text-[15px]" onClick={backToTop}>BACK TO TOP</span>
      </button>
      <div className="flex w-[200px] justify-between pt-8">
        <Facebook />
        <Linkedin />
        <Instagram />
        <Mail />
      </div>
      <p className="pt-8">@2023 Feramiz Bahaddinov All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
