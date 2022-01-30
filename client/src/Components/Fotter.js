import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import "./fotter.css";

function Fotter() {
  return (
    <div className="footer flex justify-center">
      <a href="https://github.com/mehul071/Foody">
        <AiFillGithub className="text-3xl m-2 cursor-pointer text-white" />
      </a>
      <a href="https://www.linkedin.com/in/mehul-tyagi-76632619b/">
        <BsLinkedin className="text-3xl m-2 cursor-pointer text-white hover:text-blue" />
      </a>
    </div>
  );
}

export default Fotter;
