import React from "react";
import Gavs from "../assets/gavs.png";
import netflixClone from "../assets/netflix-clone.png";
import neckflix from "../assets/neckflix.png";
import product from "../assets/product-preview.png";
import notes from "../assets/notes.png";
import todolist from "../assets/Todolist.png";
import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";
import { DiAndroid } from "react-icons/di";

const Projects = () => {
  return (
    <>
      <div className="my-10 pt-10 px-10">
        <h1 className="text-nameColor text-4xl font-bold text-center md:text-5xl">
          Projects
        </h1>
        <div className="md:grid grid-cols-2 gap-6 lg:grid-cols-3">
        {/* <div className="flex flex-col items-center justify-center"> */}
          {/* Project 1 */}
          <div className="my-10">
            <div className="w-70 content-center">
              <a
                href="https://todolist-nerwinalamas.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={todolist}
                  alt="Todolist"
                  className="rounded-lg transform hover:scale-110 transition duration-300"
                />
              </a>
              <div className="px-3">
                <h2 className="text-nameColor font-medium text-xl text-center pt-5 pb-3">
                  Todolist
                </h2>
                <p className="text-textColor text-md max-w-sm">
                  A simple Todolist, users can create, read, update, and
                  delete tasks
                </p>
                <div className="py-4 flex">
                  <FaReact
                    title="ReactJS"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <SiVite
                    title="Vite"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <FaJsSquare
                    title="Vite"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <SiTailwindcss
                    title="Vite"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                </div>
                <p className="text-textColor">
                  Vite, React, JavaScript, Tailwind & React-Icons
                </p>
                <div className="mt-2">
                  <a
                    href="https://github.com/nerwinalamas/Todolist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Repo
                    </button>
                  </a>
                  <a
                    href="https://todolist-nerwinalamas.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="my-10">
            <div className="w-70 content-center">
              <a
                href="https://netflix-clone-acifr52kq-nerwinalamas.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={neckflix}
                  alt="Netflix Clone"
                  className="rounded-lg  transform hover:scale-110 transition duration-300"
                />
              </a>
              <div className="px-3">
                <h2 className="text-nameColor font-medium text-xl text-center  pt-5 pb-3">
                  Netflix Clone
                </h2>
                <p className="text-textColor text-md max-w-sm ">
                  In this project, I have created a user interface inspired by
                  Netflix's Movie Gallery. To populate the gallery with movie
                  data, I have integrated the TMDB API.
                </p>
                <div className="py-4 flex">
                  <FaReact
                    title="ReactJS"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <FaJsSquare
                    title="JavaScript"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <FaCss3Alt
                    title="CSS"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                </div>
                <p className="text-textColor">React, JavaScript & CSS</p>
                <div className="mt-2">
                  <a
                    href="https://github.com/nerwinalamas/Netflix-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Repo
                    </button>
                  </a>

                  <a
                    href="https://netflix-clone-acifr52kq-nerwinalamas.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold hover:bg-btnColor hover:text-nameColor">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          {/* <div className="my-10 w-[400px]">
            <div className="w-70 content-center">
              <a
                href="https://nerwinalamas.github.io/Product-Preview-Card-Component/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={product}
                  alt="Product Preview Component"
                  className="rounded-lg transform hover:scale-110 transition duration-300"
                />
              </a>
              <div className="px-3">
                <h2 className="text-nameColor font-medium text-xl text-center  pt-5 pb-3">
                  Product Preview Component
                </h2>
                <p className="text-textColor text-md max-w-sm">
                  A simple responsive product preview challenge from the
                  frontend mentor website
                </p>
                <div className="py-4 flex">
                  <FaHtml5
                    title="HTML"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <FaCss3Alt
                    title="CSS"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                </div>
                <p className="text-textColor">HTML & CSS</p>
                <div className="mt-2">
                  <a
                    href="https://github.com/nerwinalamas/Product-Preview-Card-Component"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Repo
                    </button>
                  </a>

                  <a
                    href="https://nerwinalamas.github.io/Product-Preview-Card-Component/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold hover:bg-btnColor hover:text-nameColor">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* Project 4 */}
          <div className="my-10">
            <div className="w-70 content-center">
              <a
                href="https://github.com/nerwinalamas/GAVS-Smart-Attendance-App"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Gavs}
                  alt="GAVS Smart Attendance App"
                  className="rounded-lg transform hover:scale-110 transition duration-300"
                />
              </a>
              <div className="px-3">
                <h2 className="text-nameColor font-medium text-xl text-center  pt-5 pb-3">
                  GAVS Smart Attendance App
                </h2>
                <p className="text-textColor text-md max-w-sm ">
                  Due to the strict implementation of social distancing, we have
                  developed an Attendance App for the Institution that collects
                  student attendance. Our app utilizes a QR code system to
                  gather student data.
                </p>
                <div className="py-4 flex">
                  <FaJava
                    title="Java"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <DiAndroid
                    title="Android Studio"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                  <SiFirebase
                    title="Firebase"
                    className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                  />
                </div>
                <p className="text-textColor">
                  Java, XML, Android Studio & Firebase
                </p>

                <div className="mt-2">
                  <a
                    href="https://github.com/nerwinalamas/GAVS-Smart-Attendance-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Repo
                    </button>
                  </a>

                  {/* No Live Demo */}

                  {/* <button className="bg-nameColor rounded py-2 px-6 mt-3 text-backgroundColor font-semibold hover:bg-btnColor hover:text-nameColor">
                  Demo
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
