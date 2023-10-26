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
      <div
        className="my-10 py-10 px-10 w-100 flex flex-col justify-center items-center"
        data-aos="fade-up"
      >
        <h1 className="text-nameColor text-4xl font-bold text-center md:text-5xl">
          Skills
        </h1>

        <div className="grid grid-cols-3 gap-5 p-4 mt-3 w-[350px] content-center md:grid-cols-4 md:gap-8 md:w-[450px] lg:grid-cols-6 lg:w-[600px]">
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
            title="React"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <FaNodeJs
            title="Node"
            className="text-titleColor text-7xl mr-2 hover:text-btnColor"
          />
          <SiExpress
            title="Express"
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
