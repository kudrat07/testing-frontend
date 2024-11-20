import React from "react";
import AppLogo from "../assets/app-logo.png";
// import loginImg from "../assets/signup-img.jpg"
import "./Login.css";
const loginImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732074899/signup-img_x4kzcj.jpg";

const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
      <div className="form-container--wrapper">
        <figure className="app-logo--wrapper">
          <img className="app-logo" src={AppLogo} alt="app logo icon" />
        </figure>
        <div className="text-wrapper">
        <h1 className="title">Welcome Back <span className="emoji">👋</span></h1>
        <p className="description">Today is a new day. It's your day. You shape it. 
            Sign in to start ordering.</p>
        </div>
        <form className="form-wrapper" noValidate>
            <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Example@gmail.com"/>
            </div>
            <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="At least 8 characters"/>
            <p className="reset-password">forgot password</p>
            </div>
            <button className="btn">Sign in</button>
        </form>
        <p className="signUp-text">Don't have an account? <span className="signUp-link">Sign up</span></p>
      </div>
      </div>
      <div className="img-container">
        <img src={loginImg} alt="login img" className="login_logo" />
      </div>
    </div>
  );
};

export default Login;
