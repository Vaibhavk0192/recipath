import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup.css";
import axios from "axios";
import {Link} from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/signup", {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
      })
      .then((response) => {
        localStorage.setItem("user", response.data);
        toast.success("Registered successfully !", {
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
        toast.error("Failed to register !", {
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
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
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
      <div className="loggin_box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Create account</h2>
            <p className="unlock">Unlock the secrets of home-cooking !</p>
            <div className="app__signup-formbox">
              <div className="app__signup-inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={handleNameChange}
                />
                <label>Name</label>
              </div>
              <div className="app__signup-inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <label>Email</label>
              </div>
              <div className="app__signup-inputbox">
                <ion-icon ClassName="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label>Password</label>
              </div>
            </div>

            <input type="submit" className="app__signup-button" />
            <div className="app__signup-register">
              <p className="app__signup-text">
                Already have an account ?{" "}
                <Link to="/login" className="app__signup-text_link">
                  Login
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

export default Register;
