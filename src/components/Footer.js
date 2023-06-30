import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <h1 className="text-nameColor text-4xl font-bold text-center">
          Contact me
        </h1>
        <div className="flex flex-col-reverse gap-10 items-center pt-10 md:flex-row">
          <div className="text-center md:text-left ">
            <p className="text-nameColor">(+63) 966 360 9104</p>
            <p className="text-nameColor">nerwinalamas@gmail.com</p>
          </div>
          <div className="flex justify-evenly items-center text-backgroundColor px-10 text-4xl w-[300px] ">
            <a
              href="https://www.facebook.com/nerwinalamas"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="rounded-lg bg-nameColor p-2 hover:bg-btnColor hover:text-nameColor" />
            </a>
            <a
              href="https://www.linkedin.com/in/nerwin-alamas-80770b23b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="rounded-lg bg-nameColor p-2 hover:bg-btnColor hover:text-nameColor" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nerwinalamas@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail className="rounded-lg bg-nameColor p-2 hover:bg-btnColor hover:text-nameColor" />
            </a>
            <a
              href="https://github.com/nerwinalamas"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="rounded-lg bg-nameColor p-2 hover:bg-btnColor hover:text-nameColor" />
            </a>
          </div>
        </div>
        <h4 className="py-10 text-nameColor">Nerwin Alamas © 2023</h4>
      </div>
    </>
  );
};

export default Footer;
