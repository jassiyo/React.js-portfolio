import "./about.css";
import React from "react";
import ME from "../../assets/about.png";
import { BsAward } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { VscFolderOpened } from "react-icons/vsc";
import { useState } from "react";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">

            <article className="aboutCard">
              <BsAward className="aboutIcon" />
              <h3>Expireance</h3>
              <small> 11+ Months Working </small>
            </article>

            <article className="aboutCard">
              <AiOutlineUser className="aboutIcon" />
              <h3>Clints</h3>
              <small> 300+ Clints World Wild </small>
            </article>

            <article className="aboutCard">
              <VscFolderOpened className="aboutIcon" />
              <h3>Projects</h3>
              <small> 7+ Projects </small>
            </article>
            
          </div>
          <p>
            src\components\Navbar\Navbar.js Line 12:7: The href attribute
            requires a valid value to be accessible. Provide a valid, navigable
            address as the href value. If you cannot provide a valid href, but
            still need the element to resemble a link, use a button and change
            it with appropriate styles. Learn more:
            https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
            jsx-a11y/anchor-is-valid webpack compiled with 1 warning
          </p>

          <a href="#contact" className= "btn btn-primary" > Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
