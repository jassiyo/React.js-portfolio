import React from "react";
import HeaderSocial from "./HeaderSocial";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/profile4.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Jaskirat Singh</h1>
        <h5 className="text-light">fullstack developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a> 
        

      </div>
    </header>
  );
};

export default Header;
