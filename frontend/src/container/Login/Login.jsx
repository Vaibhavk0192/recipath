import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        email: event.target[0].value,
        password: event.target[1].value,
      })
      .then((response) => {
        localStorage.setItem("user", response.data);
        toast.success("Logged in successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      })
      .catch((error) => {
        toast.error("Failed to log in !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="loggin_box">
      <div className="form-value">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <p className="unlock">Unlock the secrets of home-cooking !</p>
          <div className="app__login-formbox">
            <div className="app__login-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="app__login-inputbox">
              <ion-icon ClassName="lock-closed-outline"></ion-icon>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <label htmlFor="">Password</label>
            </div>
          </div>

          <button type="submit" className="app__login-button">
            LOGIN
          </button>
          <div className="app__login-register">
            <p className="app__login-text">
              Don't have an account?{" "}
              <a href="/signup" className="app__login-text_link">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
