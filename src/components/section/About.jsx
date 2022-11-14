import React from "react";
import { ReactComponent as Computer } from "../../assets/icons/computer.svg";

const About = () => {
  return (
    <section className="w-full pt-24" id="about" >
      <div className="flex flex-col w-[90%] mr-auto ml-auto items-center mb-24" >
        <div className="flex flex-col w-[90%]  mr-auto ml-auto items-center">
        
          <span className="text-[30px] w-[300px] text-center px-4 font-[700] border-[5px]  py-2 border-[#000] mb-12" >
            ABOUT ME
          </span>

          <p className="w-[60%] text-center mb-4" >
          Hello, I am Faramiz Bahaddinov. I am a Front-end(React) developer.
          </p>
          <button className="font-[700] border-r-[2px] border-l-[2px] px-8 border-black mt-12 mb-12" >EXPLORE</button>
        </div>
        <div className="flex mt-12 justify-between w-[90%] xl:flex-col items-center">
          <div className="">
            <div className="relative " >
              <Computer />
              <span className="font-[700] bottom-[20px] left-16 absolute ">DEVELOPMENT</span>
            </div>
            <p className="pr-2 pt-6 xl:pb-8 "   >
             I created couple of web applications. I can design the site based on your needs and suggestions. 
            </p>
          </div>
          <div>
            <div className="relative" >
              <Computer />
              <span className="font-[700] bottom-[20px] left-16 absolute">EDUCATION</span>
            </div>
            <p className=" pl-2 pt-6"  >
            Bachelor's degree at Baku Engineering University. Specialty: Computer Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
