import { React, useState } from "react";
import "./signup.css";
import axios from "axios";

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
      .catch((error) => {
        console.log(error.response);
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
    <div class="loggin_box">
      <div class="form-value">
        <form onSubmit={handleSubmit}>
          <h2>Create account</h2>
          <p class="unlock">Unlock the secrets of home-cooking !</p>
          <div className="app__signup-formbox">
            <div class="app__signup-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="text"
                required
                value={name}
                onChange={handleNameChange}
              />
              <label for="">Name</label>
            </div>
            <div class="app__signup-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <label for="">Email</label>
            </div>
            <div class="app__signup-inputbox">
              <ion-icon ClassName="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label for="">Password</label>
            </div>
          </div>

          <input type="submit" class="app__signup-button" />
          <div className="app__signup-register">
            <p className="app__signup-text">
              Already have an account ?{" "}
              <a href="/login" class="app__signup-text_link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
