import React,{useEffect} from "react";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import scss from "../../assets/images/scss.png";
import bootstrap from "../../assets/images/bootstrap.png";
import tailwind from "../../assets/images/tailwind.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import figma from "../../assets/images/figma.png";
import postman from "../../assets/images/postman.jpg";
import git from "../../assets/images/git.png";
import redux from "../../assets/images/redux.png";
import c from "../../assets/images/c.png"
import C from "../../assets/images/c++.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { data } from "autoprefixer";

const skillsData = [
  {
    item: html,
    id: 1,
    content: 'HTML'
  },
  {
    item: css,
    id: 2,
    content: 'CSS'
  },
  {
    item: scss,
    id: 3,
    content: 'SCSS'
  },
  {
    item: bootstrap,
    id: 4,
    content: 'BOOTSTRAP'
  },
  {
    item: tailwind,
    id: 5,
    content: 'TAILWIND'
  },
  {
    item: js,
    id: 6,
    content: 'JS'
  },
  {
    item: react,
    id: 7,
    content: 'REACT'
  },
  {
    item: figma,
    id: 8,
    content: 'FIGMA'
  },
  {
    item: postman,
    id: 9,
    content: 'POSTMAN'
  },
  {
    item: redux,
    id: 10,
    content: 'REDUX'
  },
  {
    item: git,
    id: 11,
    content: 'Git'
  },
  {
    item: c,
    id: 12,
    content: 'C'
  },
  {
    item: C,
    id: 13,
    content: 'C++'
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="py-32  " id="skills" >
      <div className="flex flex-col  w-[90%] mr-auto ml-auto items-center" >
       
          <span className="text-[30px] w-[300px] text-center font-[700] border-[5px] px-8 py-2 border-[#000] mb-24">
            SKILLS
          </span>
        

        <div className=" w-[90%] mr-auto ml-auto ">
          
          <div className=" grid  grid-cols-5 sm:grid-cols-3 gap-5 justify-items-center w-[100%] mr-auto ml-auto">
            {skillsData.map((item) => {
              return <div className="flex flex-col items-center justify-end"><img className="w-[50px]" src={item.item} alt="skill"  /><span className="pt-4 font-[400]">{item.content}</span> </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
