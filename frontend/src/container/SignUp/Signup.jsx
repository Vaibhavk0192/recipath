import React from "react";
import "./signup.css";
const Login = () => {
  return (
    <div class="loggin_box">
      <div class="form-value">
        <form>
          <h2>Create account</h2>
          <p class="unlock">Unlock the secrets of home-cooking !</p>
          <div className="app__signup-formbox">
            <div class="app__signup-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text" required />
              <label for="">Name</label>
            </div>
            <div class="app__signup-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required />
              <label for="">Email</label>
            </div>
            <div class="app__signup-inputbox">
              <ion-icon ClassName="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label for="">Password</label>
            </div>
          </div>

          <button class="app__signup-button">
            CREATE ACCOUNT
          </button>
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

export default Login;
