import React from "react";
import id from "../assets/id.png";

const About = () => {
  return (
    <>
      <div className="my-10 py-15 px-10 md:flex justify-evenly gap-3 lg:max-w-8xl lg:justify-center lg:gap-20">
        <div data-aos="fade-up">
          <h1 className="text-nameColor text-4xl font-bold  md:text-5xl">
            About me
          </h1>
          <p className="text-textColor py-2 text-md max-w-sm md:text-lg">
            I developed a passion for computer gaming at the age of 12, during
            the era of Counter-Strike and Special Force. I would frequently
            visit computer shops after school to indulge in gaming sessions.
            Over time, my curiosity grew about the inner workings of computers
            and game mechanics, which ultimately led me to pursue a degree in
            Computer Engineering during my college years.
          </p>
        </div>
        <div className="mt-5 p-2" data-aos="fade-up" data-aos-duration="3000">
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
