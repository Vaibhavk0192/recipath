import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="overlay">
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
            <Link to="/subscribe">SUBSCRIBE</Link>
          </li>
        </ul>
        <div className="app__navbar-button">
          {!localStorage.getItem("user") && (
            <Link to="/login" className="btn-LOGIN">
              LOGIN
            </Link>
          )}
          {!localStorage.getItem("user") && (
            <Link to="/signup" className="btn-SIGNUP">
              SIGN UP
            </Link>
          )}
          {localStorage.getItem("user") && (
            <Link
              to="/"
              className="btn-LOGIN"
              onClick={() => {
                localStorage.setItem("user", "");
                window.location.href = "/";
              }}
            >
              SIGN OUT
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
