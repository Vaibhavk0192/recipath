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
            <Link to="/Subscribe">SUBSCRIBE</Link>
          </li>
        </ul>
        <div className="app__navbar-button">
          <Link to="/login" className="btn-LOGIN">
            LOGIN
          </Link>

          <Link to="/signup" className="btn-SIGNUP">
            SIGN UP
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
