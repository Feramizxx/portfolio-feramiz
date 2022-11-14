import React from "react";
import "../../assets/css/hero.css"
// import { ReactComponent as bgPattern } from "../../assets/icons/heroFooter.svg";
import bgPattern from "../../assets/icons/heroFooter.svg"
export default function HeroFooter() {
  return (
    <section className="hero-footer w-full bg-[#1D1D1D] text-white my-24  relative">
      <div className="w-[90%] mr-auto ml-auto  py-4  ">
        <h1 className="font-[600] text-[30px] py-2 ">IT BERRIES</h1>
        <p className="pb-4 ">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit accusamus placeat veniam sit voluptatum, reprehenderit tempora quibusdam ipsum, hic neque saepe et nisi distinctio numquam deserunt, libero assumenda qui dolorum.
        </p>
        <button className="border-r-[2px] border-l-[2px] px-2 border-[#fff]">Read more</button>
      </div>
      <img className="pattern-img  opacity-[0.3]" src={bgPattern} alt='pattern'/>
    </section>
  );
}
