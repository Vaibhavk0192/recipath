import React from "react";
import "./subscribe.css";
const Subscribe = () => {
  return (
    <div>
      <div class="design_box1"></div>
      <div class="design_box2"></div>
      <div class="app__box">
        <div className="app__newsletter-heading">
          <h1 class="news_letters">NEWSLETTER</h1>
          <div class="Down_newsletters">Never miss latest updates</div>
        </div>
        <div class="app__subscribe-inputbox">
          <input
            id="emailAddress"
            type="email"
            placeholder="Enter your Email Address"
          />
          <a href="/" class="app__newsletter-button">
            Subscribe
          </a>
        </div>
      </div>
      <div class="design_box3"></div>
      <div class="design_box4"></div>
    </div>
  );
};
export default Subscribe;
