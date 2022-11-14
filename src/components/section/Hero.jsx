import React from "react";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { Link } from "react-router-dom";
import HeroFooter from "./Hero-footer";
const Hero = () => {
  return (
    <section className="bg-[#D7D7D7]">
      <div className="bg-[#] pt-20 flex flex-col w-[90%] mr-auto ml-auto">
        <h3 className="text-[40px]">Hi, I am </h3>
        <h1 className="font-[700] text-[4rem] sm:text-[250%] w-[100%]">
          Feramiz Bahaddinov
        </h1>
        <p className="text-[#909090]">Front-end developer</p>
        <div className="flex w-[230px] justify-between py-8">
          <div className="p-2 bg-[#C4C4C4] " >
            <a href="https://mail.google.com/mail/u/0/"><Mail /></a>
          </div>
          <div className="p-2 bg-[#C4C4C4] " >
            <a href="https://www.linkedin.com/in/feramiz303/"><Linkedin /></a>
          </div>
          <div className="p-2 bg-[#C4C4C4] " >
            <a href="https://github.com/Feramizxx"><Github /></a>
          </div>
        </div>
      </div>
      <HeroFooter />
    </section>
  );
};

export default Hero;
