import React from "react";
import Gavs from "../assets/gavs.png";
import netflixClone from "../assets/netflix-clone.png";
import product from "../assets/product-preview.png";
import notes from "../assets/notes.png";
import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiFirebase, SiExpress, SiMongodb } from "react-icons/si";
import { DiAndroid } from "react-icons/di";

const Projects = () => {
  return (
    <>
      <div className="pt-10 px-10">
        <h1 className="text-nameColor text-4xl font-bold text-center">
          Projects
        </h1>
        {/* Project 1 */}
        <div className="my-10">
          <div className="w-70 content-center">
            <div>
              <img
                src={Gavs}
                alt="GAVS Smart Attendance App"
                className="rounded-lg"
              />
            </div>
            <div className="px-3">
              <h2 className="text-nameColor font-medium text-xl text-center py-5">
                GAVS Smart Attendance App
              </h2>
              <p className="text-textColor text-md max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
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

        {/* Project 2 */}
        <div className="my-10">
          <div className="w-70 content-center">
            <div>
              <img
                src={netflixClone}
                alt="Netflix Clone"
                className="rounded-lg"
              />
            </div>
            <div className="px-3">
              <h2 className="text-nameColor font-medium text-xl text-center py-5">
                Netflix Clone
              </h2>
              <p className="text-textColor text-md max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
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
        <div className="my-10">
          <div className="w-70 content-center">
            <div>
              <img
                src={product}
                alt="Product Preview Component"
                className="rounded-lg"
              />
            </div>
            <div className="px-3">
              <h2 className="text-nameColor font-medium text-xl text-center py-5">
                Product Preview Component
              </h2>
              <p className="text-textColor text-md max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
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
        </div>

        {/* Project 4 */}
        <div className="my-10">
          <div className="w-70 content-center">
            <div>
              <img src={notes} alt="Notes App" className="rounded-lg" />
            </div>
            <div className="px-3">
              <h2 className="text-nameColor font-medium text-xl text-center py-5">
                Notes App
              </h2>
              <p className="text-textColor text-md max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
              <div className="py-4 flex">
                <FaNodeJs
                  title="NodeJS"
                  className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                />
                <SiExpress
                  title="ExpressJS"
                  className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                />
                <SiMongodb
                  title="MongoDB"
                  className="text-titleColor text-4xl mr-2 hover:text-btnColor"
                />
              </div>
              <p className="text-textColor">
                NodeJS, ExpressJS, EJS & Mongoose
              </p>
              <div className="mt-2">
                <a
                  href="https://github.com/nerwinalamas/Notes"
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
    </>
  );
};

export default Projects;
