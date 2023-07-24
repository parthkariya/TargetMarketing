import React, { useState } from "react";
import {
  FaCheck,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaGoogle,
  FaFacebook,
  FaTimes,
  FaPhoneAlt,
  FaUser,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
// import loginImage from "../../assets/login.svg";
// import logo from "../../assets/medex_m_logo.png";
import { login_url as url, WEB_CLIENT_ID } from "../../utils/constants";
import { signup_url as urlsignup } from "../../utils/constants";
import { mobileValidate } from "../../utils/helpers";

import { useUserContext } from "../../context/user_context";
import "../Login/LoginConponent.css";
import Notification from "../../utils/Notification";

const LoginComponent = ({ showscreen, setShowlogin }) => {
  const { setLogin, setSignUp, isLogin, logoutUser } = useUserContext();

  const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [show, setShow] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [signuptype, setSignupType] = React.useState(1); // 1: login, 2: signup

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const onLogin = async () => {
    if (email === "") {
      Notification("error", "Error!", "Please enter your email ID!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (password == "") {
      Notification("error", "Error!", "Please enter your password!");
      return;
    }

    var params = {
      email: email,
      password: password,
    };
    setLogin(params, url);
  };

  const onRegister = async () => {
    if (email == "") {
      Notification("error", "Error!", "Please enter your email ID!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (password == "") {
      Notification("error", "Error!", "Please enter your password!");
      return;
    } else if (username == "") {
      Notification("error", "Error!", "Please enter your username!");
      return;
    } else if (mobile == "") {
      Notification("error", "Error!", "Please enter your mobile number!");
      return;
    }
    var params = {
      email: email,
      password: password,
      name: username,
      number: mobile,
    };
    setLogin(params, urlsignup);
  };

  return (
    <div className="login-wrapper">
      {/* <div className={showscreen ? "show login-screen" : " login-screen "}> */}
      <div className={showscreen ? "show login-screen" : " login-screen "}>
        <div
          className="login-bg"
          onClick={() => setShowlogin(!showscreen)}
        ></div>
        <div className="loging-container">
          <div className="lg_left_sec">
            <p>
              TARGET
              <br />
              MARKETING
            </p>
          </div>

          <div className="login-row">
            {signuptype == 1 ? (
              <div className="login-6">
                <div className="login-form">
                  {/* <div className="login-logo">
                                        <img src={logo} alt="Logo" />
                                    </div> */}
                  <h3>Login / Singup</h3>
                  <form>
                    <div className="input-row">
                      <FaEnvelope />
                      {/* <label>Email Address</label> */}
                      <input
                        type="text"
                        placeholder="Enter Your Email Address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-row">
                      <FaLock />
                      {/* <label>Password</label> */}
                      <input
                        type="password"
                        placeholder="Enter Your Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </form>
                  <ul>
                    {/* <li><a onClick={() => setShow(!show)} href="javascript:void(0)" className={show ? "show" : ""}><FaCheckCircle /> Remember Me </a></li> */}
                    <a href="javascript:void(0)">Forget Password?</a>
                  </ul>

                  <div className="login-button">
                    <button className="btn-login" onClick={() => onLogin()}>
                      Login
                    </button>

                    <a onClick={() => setSignupType(2)}>
                      Create New Account...
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="login-6">
                <div className="login-form">
                  <h3>Login / Singup</h3>
                  <form>
                    <div className="input-row">
                      <FaEnvelope />
                      <input
                        type="text"
                        placeholder="Enter Your Email Address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-row">
                      <FaLock />
                      {/* <label>Password</label> */}
                      <input
                        type={passwordType}
                        placeholder="Enter Your Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        className="pass_eye_btn"
                        onClick={() => togglePassword()}
                      >
                        {passwordType == "password" ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </button>
                    </div>
                    <div className="input-row">
                      <FaUser />
                      <input
                        type="text"
                        placeholder="Enter Your Username..."
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="input-row">
                      <FaPhoneAlt />
                      <input
                        type="text"
                        placeholder="Enter Your Mobile Number..."
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => {
                          if (mobileValidate(e.target.value)) {
                            setMobile(e.target.value);
                          }
                        }}
                      />
                    </div>
                  </form>
                  <div className="login-button">
                    <button className="btn-login" onClick={() => onRegister()}>
                      Signin
                    </button>

                    <a onClick={() => setSignupType(1)}>
                      Login, if you're an existing user ...
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="close" onClick={() => setShowlogin(!showscreen)}>
            <FaTimes />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
