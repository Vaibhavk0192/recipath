import React from "react";
import "./subscribe.css";
const Subscribe = () => {
  return (
    <div>
      <div className="design_box1"></div>
      <div className="design_box2"></div>
      <div className="app__box">
        <div className="app__newsletter-heading">
          <h1 className="news_letters">NEWSLETTER</h1>
          <div className="Down_newsletters">Never miss latest updates</div>
        </div>
        <div className="app__subscribe-inputbox">
          <input
            id="emailAddress"
            type="email"
            placeholder="Enter your Email Address"
          />
          <a href="/" className="app__newsletter-button">
            Subscribe
          </a>
        </div>
      </div>
      <div className="design_box3"></div>
      <div className="design_box4"></div>
    </div>
  );
};
export default Subscribe;
