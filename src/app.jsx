import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import AboutUs from "./container/AboutUs/about_us";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import "./app.css";
import Subscribe from "./container/Subscribe/Subscribe";
import Login from "./container/Login/Login";
import Signup from "./container/SignUp/Signup";
=======
import "./App.css";
>>>>>>> 84962efaa37670d215614f87c86e0d06ff373c59

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
