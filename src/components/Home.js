import React from "react";

const Home = () => {
  return (
    <>
      <main className="pt-40 px-10 h-screen">
        <h5 className=" text-titleColor pb-2 font-semibold text-2xl">
          Hello, my name is
        </h5>
        <h1 className="text-nameColor text-4xl font-bold">Nerwin Alamas</h1>
        <p className="text-textColor py-2 text-md max-w-sm">
          As an aspiring Web Developer, I like building and creating Websites. I
          am looking forward to learning new skills and contributing to this
          industry
        </p>
        {/* <p className="text-textColor py-2 text-md max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          cupiditate quos beatae laudantium obcaecati error quis necessitatibus
          quibusdam aliquam nulla!
        </p> */}
        <button className="bg-btnColor rounded py-2 px-6 mt-3 text-white text-semibold hover:bg-nameColor hover:text-btnColor">
          Contact me
        </button>
      </main>
    </>
  );
};

export default Home;
