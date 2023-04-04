import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import AboutUs from "./container/AboutUs/about_us";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";

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
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
