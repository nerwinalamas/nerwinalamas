import React from "react";
import neckflix from "../assets/neckflix.png";
import todolist from "../assets/todo.png";
import tripples from "../assets/tripples.png";
import { FaReact, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="my-10 pt-10 px-10">
        <h1 className="text-nameColor text-4xl font-bold text-center md:text-5xl">
          Projects
        </h1>
        <div className="md:grid grid-cols-2 gap-6 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="my-10" data-aos="fade-up">
            <div className="w-70 content-center">
              <a
                href="https://3s-phi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tripples}
                  alt="Tripple S"
                  className="rounded-lg transform hover:scale-110 transition duration-300"
                />
              </a>
              <div className="px-3 w-full">
                <h2 className="text-center text-nameColor font-medium text-2xl pt-5 pb-3">
                  3S
                </h2>
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
                  Vite + React, JavaScript, Tailwind CSS, & Fakestore API
                </p>
                <div className="mt-5">
                  <a
                    href="https://github.com/nerwinalamas/3S"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Repo
                    </button>
                  </a>
                  <a
                    href="https://3s-phi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="my-10" data-aos="fade-up">
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
              <div className="px-3 w-full">
                <h2 className="text-center text-nameColor font-medium text-2xl pt-5 pb-3">
                  Todolist
                </h2>
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
                <div className="mt-5">
                  <a
                    href="https://github.com/nerwinalamas/Todolist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Repo
                    </button>
                  </a>
                  <a
                    href="https://todolist-nerwinalamas.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-nameColor rounded py-2 px-6 text-backgroundColor font-semibold mr-3 hover:bg-btnColor hover:text-nameColor">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="my-10" data-aos="fade-up">
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
              <div className="px-3 w-full">
                <h2 className="text-center text-nameColor font-medium text-2xl pt-5 pb-3">
                  Netflix Clone
                </h2>
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
                <p className="text-textColor">
                  React, JavaScript, CSS, & TMDB API
                </p>
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
        </div>
      </div>
    </>
  );
};

export default Projects;
