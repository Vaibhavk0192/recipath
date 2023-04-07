import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div class="loggin_box">
      <div class="form-value">
        <form>
          <h2>Login</h2>
          <p class="unlock">Unlock the secrets of home-cooking !</p>
          <div className="app__login-formbox">
            <div class="app__login-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required />
              <label for="">Email</label>
            </div>
            <div class="app__login-inputbox">
              <ion-icon ClassName="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label for="">Password</label>
            </div>
          </div>

          <a href="/" class="app__login-button">
            LOGIN
          </a>
          <div className="app__login-register">
            <p className="app__login-text">
              Don't have an account ?{" "}
              <a href="/signup" class="app__login-text_link">
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
