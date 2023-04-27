import React from "react";
import "./about_us.css";
import "../../styles/app.css";
import Vaibhav from "../../assets/vaibhav.jpeg";
import ansh from "../../assets/ansh.jpeg";
import pulkit from "../../assets/pulkit.jpeg";

const about_us = () => {
  return (
    <div>
      <div className="app__box app">
        <div className="design_box1"></div>
        <div className="design_box2"></div>
        <h1 className="app__about-headtext">ABOUT US</h1>
        <div className="app__about-content">
          <div className="app__about-profile-box">
            <div className="app__about-image">
              <img src={Vaibhav} alt="" />

              <div className="image-heading">Vaibhav Kapoor</div>
              <div className="image-text">Designer & Frontend Developer</div>
            </div>
            <div className="app__about-image">
              <img src={ansh} alt="" />
              <div className="image-heading">Ansh Midha</div>
              <div className="image-text">Backend Developer</div>
            </div>
            <div className="app__about-image">
              <img src={pulkit} alt="" />
              <div className="image-heading">Pulkit Saraf</div>
              <div className="image-text">Frontend Developer</div>
            </div>
          </div>
        </div>
        <div className="design_box3"></div>
        <div className="design_box4"></div>
      </div>
    </div>
  );
};
export default about_us;
