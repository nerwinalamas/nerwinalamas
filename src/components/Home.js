import React from "react";
import resume from "../assets/resume.pdf";

const Home = () => {
  const handleResume = () => {
    window.open(resume);
  };
  return (
    <>
      <main className="pt-40 px-10 h-screen md:flex flex-col items-center">
        <h5 className=" text-titleColor pb-2 font-semibold text-xl md:text-4xl">
          Hello, my name is
        </h5>
        <h1 className="text-nameColor text-4xl font-bold md:text-6xl lg:text-7xl">
          Nerwin Alamas
        </h1>
        <p className="text-textColor py-2 text-md max-w-md md:text-lg md:text-center lg:text-xl">
        I am an aspiring Web Developer with a strong passion for crafting immersive online experiences. As an entry-level professional in the field, I am eager to showcase my skills and dedication to web development.
        </p>
        <button
          onClick={handleResume}
          className="bg-btnColor rounded py-2 px-6 mt-3 text-white text-semibold hover:bg-nameColor hover:text-btnColor md:py-3 md:px-7"
        >
          Resume
        </button>
      </main>
    </>
  );
};

export default Home;
