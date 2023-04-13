import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
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
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <div className="app__login-home">
        <div className="title">
          <h1 className="recipath">
            RECIPA<span className="cooking">LET'S GO COOK</span>IH
          </h1>
          <div className="app__home-heading_tagline">
            UNLOCK THE SECRET OF DELICIOUS HOME-COOKING!
          </div>
        </div>
      </div>
      <div className="app__login-loggin_box-a">
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
                <Link
                  to="/signup"
                  className="app__login-text_link"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
