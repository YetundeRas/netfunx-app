import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";

const Help = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "09060548363";
    const url = `tel:${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div>
        <hr />
        <div className="helphead">
          <p className="helpnet">
            NETFUNX <span className="helpe">| Help center</span>
          </p>
          <Link to="/" className="signin">
            Sign up
          </Link>
        </div>
        <hr />
      </div>
      <div className="bodyhelp">
        <p className="how">How can we help?</p>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Type a question, topic or issue"
            className="helpinput"
          />
          <CiSearch className="search" />
        </div>
        <FaArrowDown className="helparrow" />
        <p className="needmorehelp">Need More Help?</p>
        <button onClick={handlePhoneClick} className="helpbtn">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Help;
