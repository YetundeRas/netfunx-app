import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "09060548363";
    const url = `tel:${phoneNumber}`;
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:yetimahmi@gmail.com";
  };

  return (
    <div className="contactb">
      <hr />
      <div className="helphead">
        <p className="helpnet">
          NETFUNX <span className="helpe">| Questions?Contact Us</span>
        </p>
        <Link to="/" className="signin">
          Sign up
        </Link>
      </div>
      <hr />
      <div className="bodyhelp">
        <p className="talk">
          Tell us more and we'll find the best solution for you
        </p>
        <p className="talk">You want to talk to us?</p>
        <div className="btnc">
          <button onClick={handlePhoneClick} className="helpbtn">
            Contact us via Call
          </button>
          <button onClick={handleEmailClick} className="helpbtn">
            Contact us via mail
          </button>
        </div>
    
      </div>
    </div>
  );
};

export default Contact;
