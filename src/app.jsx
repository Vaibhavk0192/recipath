import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import AboutUs from "./container/AboutUs/about_us";
import Navbar from "./components/Navbar/Navbar";

import "./styles/App.css";
import Subscribe from "./container/Subscribe/Subscribe";
import Login from "./container/Login/Login";
import Signup from "./container/SignUp/Signup";


const App = () => {
  return (
    <div className="app__bg ">
      <div className="app__bg-overlay">
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Aboutus" element={<AboutUs />} />
              <Route path="/Subscribe" element={<Subscribe />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
