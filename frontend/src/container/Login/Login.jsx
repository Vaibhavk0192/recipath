import React, { useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="loggin_box">
      <div className="form-value">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <div>{error}</div>}
          <p className="unlock">Unlock the secrets of home-cooking !</p>
          <div className="app__login-formbox">
            <div className="app__login-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="app__login-inputbox">
              <ion-icon ClassName="lock-closed-outline"></ion-icon>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
};

export default Login;
