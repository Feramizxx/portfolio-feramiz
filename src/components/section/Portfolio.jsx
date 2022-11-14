import React from "react";
import "../../assets/css/hero.css";
import { Link } from "react-router-dom";
const projectData = [
  { id: 1, img: require("../../assets/images/chevik.png"),  link:"https://feramizxx.github.io/chevik-news/" },
  { id: 2, img: require("../../assets/images/sanliurfa.png"), link:"http://Feramizxx.github.io/sanliurfa-front" },
  { id: 3, img: require("../../assets/images/Proneo.png"), link:"https://www.proneo.az/" },
  { id: 4, img: require("../../assets/images/sanliurfa.png"), link:"http://Feramizxx.github.io/sanliurfa-front" },
  { id: 5, img: require("../../assets/images/Proneo.png"), link:"https://www.proneo.az/" },
  { id: 6, img: require("../../assets/images/chevik.png"), link:"https://feramizxx.github.io/chevik-news/" },
];

const Portfolio = () => {
  return (
    <section className="pt-24" id="portfolio" >
      <div className="Portfolio w-full h-[321px] sm:h-[200px] bg-cover   flex flex-col items-center" >
        <span className=" text-[30px] w-[300px] text-center font-[700] border-[5px] px-8 mt-32 py-2 sm:mt-20 border-[#000] mb-12 ">
          PORTOLIO
        </span>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 lg:grid-cols-2 sm:grid-cols-1 w-full ">
        {projectData.map((item)=>{
          return (<a href={item.link}><img key={item.id} src={item.img} className="w-full h-[100%] object-cover"  alt="project"/></a> )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
