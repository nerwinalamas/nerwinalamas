import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="py-10 px-10 w-100 flex flex-col justify-center items-center">
        <h1 className="text-nameColor text-4xl font-bold text-center">
          Skills
        </h1>

        <div className="grid grid-flow-col grid-rows-4 gap-5 p-4 mt-2 w-[350px] content-center">
          <FaHtml5
            title="HTML"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaCss3Alt
            title="CSS"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaJsSquare
            title="JavaScript"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaBootstrap
            title="Bootstrap"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <SiTailwindcss
            title="Tailwind CSS"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaReact
            title="ReactJS"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaNodeJs
            title="NodeJS"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <SiExpress
            title="ExpressJS"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <SiMongodb
            title="MongoDB"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaGitAlt
            title="Git"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaGithub
            title="Github"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaFigma
            title="Figma"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
