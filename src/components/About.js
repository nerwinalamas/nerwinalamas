import React from "react";
import id from "../assets/id.png";

const About = () => {
  return (
    <>
      <div className="my-10 py-15 px-10 md:flex justify-evenly gap-3 lg:max-w-8xl lg:justify-center lg:gap-8">
        <div>
          <h1 className="text-nameColor text-4xl font-bold  md:text-5xl">
            About me
          </h1>
          <p className="text-textColor py-2 text-md max-w-sm md:text-lg">
            I love playing computer games since when i was 12 years old the time
            of Counter-Strike and Special Force back then, I regularly go to
            Computer shops after school to play, and at some point my curiosity
            in computer function and how the game works began so i decided to
            take Computer Engineering in College.
          </p>
          {/* <p className="text-textColor py-2 text-md max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            cupiditate quos beatae laudantium obcaecati error quis
            necessitatibus quibusdam aliquam nulla!
          </p> */}
        </div>
        <div className="mt-5 p-2">
          <img
            src={id}
            alt="nerwin alamas"
            className="rounded-lg md:max-w-[300px]"
          />
        </div>
      </div>
    </>
  );
};

export default About;
