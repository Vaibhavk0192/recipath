import React from "react";
import "./subscribe.css";
const Subscribe = () => {
  return (
    <div class="app__box">
      <div className="app__newsletter-heading">
        <h1 class="news_letters">NEWSLETTER</h1>
        <div class="Down_newsletters">Never miss latest updates</div>
      </div>
      <div class="inputbox">
        <input
          id="emailAddress"
          type="email"
          placeholder="Enter your Email Address"
        />
        <a href="/" class="btn-SUBSCRIBE">
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
