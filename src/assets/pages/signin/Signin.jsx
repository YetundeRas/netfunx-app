import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {MdOutlineCancel} from "react-icons/md"

const Signin = () => {
  const [toggle, setToggle] = useState(false);

  const togglelearn = () => {
    setToggle(!toggle);
  };

  const [inputValue, setInputValue] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowErrorMessage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(inputValue)) {
       setShowErrorMessage(true);
     } else {
       alert("Welcome");
     }
  };
  return (
    <div className="body">
      <span className="netnames">NETFUNX</span>
      <section className="signinfo">
        <p className="signtext">Sign In</p>
        <div>
          <div className="signinput">
            <input
              type="text"
              placeholder="Email or phone number"
              value={inputValue}
              onChange={handleInputChange}
              className="signput"
            />
            <input type="password" placeholder="Password" className="signput" />
          </div>

          <button className="signnbtn" onClick={handleSubmit}>
            Sign In
          </button>
          {showErrorMessage && (
            <p style={{ color: "red" }}>
              {" "}
              <MdOutlineCancel /> Email address is required
            </p>
          )}
        </div>

        <div className="helplane">
          <div className="remem">
            <input type="checkbox" className="check" />
            <p className="re">Remember me</p>
          </div>
          <Link className="helpneed" to="/help">
            Need help?
          </Link>
        </div>
        <div className="newnet">
          <p className="re">
            {" "}
            New to Netfunx?
            <Link className="signupnow" to="/">
              {" "}
              Sign up now
            </Link>
          </p>
        </div>
        <div>
          <p className="this">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="learn" onClick={togglelearn}>
              Learn more
            </span>
          </p>
          <p>
            {toggle && (
              <p className="newtext">
                {" "}
                The information collected by Google reCAPTCHA is subject to the
                Google <span className="learn">Privacy Policy</span> and{" "}
                <span className="learn">Terms of Service</span>, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google).
              </p>
            )}
          </p>
        </div>
      </section>

      <section className="footer">
        <div className="footerd">
          <Link to="/contact" className="helpc">
            Questions? Contact us
          </Link>
          <Link to="/faq" className="helpc">
            FAQ
          </Link>
          <Link className="helpc" to="/help">
            Help Center
          </Link>
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Corporate Information</p>
        </div>
      </section>
      
    </div>
  );
};

export default Signin;
