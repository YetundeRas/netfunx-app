import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbLanguage } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";

const Mainpage = () => {
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setShowImage1((prevShowImage1) => !prevShowImage1);
    }, 5000);

    const interval2 = setInterval(() => {
      setShowImage2((prevShowImage2) => !prevShowImage2);
    }, 10000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const [click, setClick] = useState(false);

  const toggleclick = () => {
    setClick(!click);
  };

  const [clickk, setClickk] = useState(false);

  const toggleclickk = () => {
    setClickk(!clickk);
  };
  const [clickkk, setClickkk] = useState(false);

  const toggleclickkk = () => {
    setClickkk(!clickkk);
  };

  const [clickkkk, setClickkkk] = useState(false);

  const toggleclickkkk = () => {
    setClickkkk(!clickkkk);
  };

  const [eclick, setClicke] = useState(false);

  const togleclick = () => {
    setClicke(!eclick);
  };

  const [clickke, setClickee] = useState(false);

  const togleclicke = () => {
    setClickee(!clickke);
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
    <div>
      <section className="firstS">
        <div className="logo">
          <span className="netname">NETFUNX</span>
          <Link className="signin" to="./signin">
            Sign In
          </Link>
        </div>
        <div className="firstStext">
          <p className="text1">Unlimited movies, TV shows, and more</p>
          <p className="text2">Watch anywhere. Cancel anytime.</p>
          <p className="text3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <input
              className="emailinput"
              type="email address"
              placeholder="Email address"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btnget" onClick={handleSubmit}>
              Get Started <MdArrowForwardIos />
            </button>
            {showErrorMessage && (
              <p style={{ color: "red" }}>
                {" "}
                <MdOutlineCancel /> Email address is required
              </p>
            )}
          </div>
        </div>
      </section>
      <hr className="line" />
      <section className="seconds">
        <div className="enjoyimage">
          <div className="enjoytext">
            <p className="enjoy">Enjoy on your TV</p>
            <p className="watch">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="happytv">
            <img
              className="tvimage"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            <div className="its">
              <p>
                Happy Watching. <br />
                <span style={{ fontFamily: "fantasy", color: "red" }}>
                  NETFUNX
                </span>{" "}
                gat you
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="line" />
      <section className="thirds">
        <div className="mobile">
          <div className="images">
            <img
              className="mobileimg"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
            <div className="smovie">
              <img
                className="movie"
                src="https://th.bing.com/th/id/OIF.yP7KFY0YbFRAQOXW8ZW0Iw?rs=1&pid=ImgDetMain"
                alt=""
              />
              <p className="breath">
                Breath of Life. <span style={{ color: "blue" }}>Download</span>{" "}
                {showImage1 && <FaCircleArrowDown />}{" "}
                {showImage2 && <GoCheckCircleFill />}{" "}
              </p>
            </div>
          </div>
          <div className="down">
            <p className="download">Download your shows to watch offline</p>
            <p className="save">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <hr className="line" />
      <section className="fourths">
        <div className="watchevery">
          <p className="download">Watch everywhere</p>
          <p className="save">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </section>
      <hr className="line" />
      <section className="fifths">
        <div className="kidsimg">
          <img
            className="kidspix"
            src="https://occ-0-4616-2706.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
            alt=""
          />
        </div>
        <div className="create">
          <p className="createp">Create profiles for kids</p>
          <p className="send">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </section>
      <hr className="line" />
      <section className="sixths">
        <p className="freq">Frequently Asked Questions</p>
        <div className="questions">
          <div>
            <p className="what" onClick={toggleclick}>
              What is Netfunx? <FiPlus className="plus" />
            </p>
            <p>
              {click && (
                <p className="whats">
                  Netfunx is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.{" "}
                  <p className="youc">
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="what" onClick={toggleclickk}>
              How much does Netfunx cost? <FiPlus className="plus" />{" "}
            </p>
            <p>
              {clickk && (
                <p className="whats">
                  Watch Netfunx on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="what" onClick={toggleclickkk}>
              Where can I watch? <FiPlus className="plus" />
            </p>
            <p>
              {clickkk && (
                <p className="whats">
                  Watch anywhere, anytime. Sign in with your Netfunx account to
                  watch instantly on the web at netfunx.com from your personal
                  computer or on any internet-connected device that offers the
                  Netfunx app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <p className="youc">
                    You can also download your favorite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you're on the go and without an internet connection. Take
                    Netfunx with you anywhere.
                  </p>
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="what" onClick={toggleclickkkk}>
              How do I cancel? <FiPlus className="plus" />
            </p>
            <p>
              {clickkkk && (
                <p className="whats">
                  Netfunx is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="what" onClick={togleclick}>
              What can I watch on Netfunx? <FiPlus className="plus" />
            </p>
            <p>
              {eclick && (
                <p className="whats">
                  Netfunx has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netfunx
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="what" onClick={togleclicke}>
              Is Netfunx good for kids? <FiPlus className="plus" />
            </p>
            <p>
              {clickke && (
                <p className="whats">
                  The Netfunx Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                  <p className="youc">
                    Kids profiles come with PIN-protected parental controls that
                    let you restrict the maturity rating of content kids can
                    watch and block specific titles you don’t want kids to see.
                  </p>
                </p>
              )}
            </p>
          </div>
        </div>
        <div>
          <p className="ready">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="emailget">
            <input
              className="emailinput"
              type="email address"
              placeholder="Email address"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btnget" onClick={handleSubmit}>
              Get Started <MdArrowForwardIos />
            </button>
            {showErrorMessage && (
              <p style={{ color: "red" }}>
                {" "}
                <MdOutlineCancel /> Email address is required
              </p>
            )}
          </div>
        </div>
      </section>
      <hr className="line" />
      <div className="seventhss">
        <section className="sevenths">
          <div className="allinks">
            <div style={{ display: "flex" }}>
              <div className="links">
                <p className="terms">Questions? Contact us</p>
                <p className="terms">
                  <Link to="/faq" className="helpce">
                    FAQ
                  </Link>
                </p>
                <p className="terms">Terms of Use</p>
                <p className="terms">Privacy</p>
                <p className="terms">Corporate Information</p>
              </div>
              <div className="linkss">
                <p className="terms">Cookie Preference</p>
                <p className="terms">Jobs</p>
                <p className="terms">
                  <Link className="helpce" to="/help">
                    Help Center
                  </Link>
                </p>
                <p className="terms">Account</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="linksss">
                <p className="terms">Only on Netfunx</p>
                <p className="terms">Speed Test</p>
                <p className="terms">Legal Notices</p>
              </div>
              <div className="linksss">
                <p className="terms">Media Center</p>
                <p className="terms">Ways to Watch</p>
                <p className="terms">Investor Relation</p>
              </div>
            </div>
          </div>
          <div className="eng">
            <p className="english">
              <TbLanguage /> English <IoMdArrowDropdown />{" "}
            </p>
            <p className="netf">Netfunx Nigeria</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mainpage;
