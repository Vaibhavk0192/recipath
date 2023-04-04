import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="overlay">
      {" "}
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/recipe">RECIPE</Link>
          </li>
          <li>
            <Link to="/aboutus">ABOUT</Link>
          </li>
          <li>
            <Link to="/newletter">SUBSCRIBE</Link>
          </li> 
        </ul>
        <div className="app__navbar-button">
          <a href="/" class="btn-LOGIN">
            LOGIN
          </a>
          <a href="/" class="btn-SIGNUP">
            SIGN UP
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
