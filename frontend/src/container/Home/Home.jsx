import React from "react";
import "./home.css";
import "../../fonts/kiosk.otf";

const Home = () => {
  return (
    <div className="app__home">
      <div className="title">
        <h1 className="recipath">
          RECIPA<span className="cooking">LET'S GO COOK</span>IH
        </h1>
        <div className="app__home-heading_tagline">
          UNLOCK THE SECRET OF DELICIOUS HOME-COOKING!
        </div>
      </div>
    </div>
  );
};

export default Home;
