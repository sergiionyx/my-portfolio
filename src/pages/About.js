import React from "react";
import "../styles/about.css";
import img from "../assets/img/full-stack-skills.png";

const About = () => {
  return (
    <div>
      <h1 id="about-h1" className="p-5">
        About Me
      </h1>

      <div className="container">
        <img className="" id="img-skills" src={img} alt="skills" />
        <h3 className="fs-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </h3>
      </div>
    </div>
  );
};

export default About;
