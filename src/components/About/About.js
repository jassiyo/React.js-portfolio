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
              <small> 12 Months Working </small>
            </article>

            <article className="aboutCard">
              <AiOutlineUser className="aboutIcon" />
              <h3>Clints</h3>
              <small> 2 Companies </small>
            </article>

            <article className="aboutCard">
              <VscFolderOpened className="aboutIcon" />
              <h3>Projects</h3>
              <small> 9+ Projects </small>
            </article>
            
          </div>
          <p>
          Experienced Web Developer with 12 months crafting dynamic, visually pleasing web applications. Proficient in front-end and back-end
development. Skilled at turning creative concepts into practical, user-friendly solutions across the development cycle - from design and
coding to testing and deployment. Strong foundation in web technologies, detail-oriented, and committed to creating seamless
websites that combine aesthetics with functionality. 

          </p>

          <a href="#contact" className= "btn btn-primary" > Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
