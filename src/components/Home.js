import React from "react";

const Home = () => {
  return (
    <>
      <main className="pt-40 px-10 h-screen md:flex flex-col items-center">
        <h5 className=" text-titleColor pb-2 font-semibold text-2xl md:text-4xl lg:text-5xl">
          Hello, my name is
        </h5>
        <h1 className="text-nameColor text-4xl font-bold md:text-6xl lg:text-7xl">
          Nerwin Alamas
        </h1>
        <p className="text-textColor py-2 text-md max-w-sm md:text-lg md:text-center lg:text-xl">
          An aspiring Web Developer, I like coding and creating Websites. I am
          looking forward to learn new skills and contribute to this industry
        </p>
        {/* <p className="text-textColor py-2 text-md max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          cupiditate quos beatae laudantium obcaecati error quis necessitatibus
          quibusdam aliquam nulla!
        </p> */}
        <button className="bg-btnColor rounded py-2 px-6 mt-3 text-white text-semibold hover:bg-nameColor hover:text-btnColor md:py-3 md:px-7">
          Download Resume
        </button>
      </main>
    </>
  );
};

export default Home;
