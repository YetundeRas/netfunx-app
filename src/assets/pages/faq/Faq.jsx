import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import {MdOutlineCancel} from "react-icons/md"

const Faq = () => {
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
    <div className="firstF">
      <div className="logo">
        <span className="netname">NETFUNX</span>
        <Link to="/" className="signin">
          Home
        </Link>
      </div>
      <div>
        <section>
          <p className="freq">Frequently Asked Questions</p>
          <div className="questn">
            <div>
              <p className="whati" onClick={toggleclick}>
                What is Netfunx? <FiPlus className="plus" />
              </p>
              <p>
                {click && (
                  <p className="whatsi">
                    Netfunx is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.{" "}
                    <p className="youc">
                      You can watch as much as you want, whenever you want
                      without a single commercial – all for one low monthly
                      price. There's always something new to discover and new TV
                      shows and movies are added every week!
                    </p>
                  </p>
                )}
              </p>
            </div>
            <div>
              <p className="whati" onClick={toggleclickk}>
                How much does Netfunx cost? <FiPlus className="plus" />{" "}
              </p>
              <p>
                {clickk && (
                  <p className="whatsi">
                    Watch Netfunx on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₦1,200 to ₦4,400 a month. No extra costs, no
                    contracts.
                  </p>
                )}
              </p>
            </div>
            <div>
              <p className="whati" onClick={toggleclickkk}>
                Where can I watch? <FiPlus className="plus" />
              </p>
              <p>
                {clickkk && (
                  <p className="whatsi">
                    Watch anywhere, anytime. Sign in with your Netfunx account
                    to watch instantly on the web at netfunx.com from your
                    personal computer or on any internet-connected device that
                    offers the Netfunx app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
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
              <p className="whati" onClick={toggleclickkkk}>
                How do I cancel? <FiPlus className="plus" />
              </p>
              <p>
                {clickkkk && (
                  <p className="whatsi">
                    Netfunx is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                )}
              </p>
            </div>
            <div>
              <p className="whati" onClick={togleclick}>
                What can I watch on Netfunx? <FiPlus className="plus" />
              </p>
              <p>
                {eclick && (
                  <p className="whatsi">
                    Netfunx has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netfunx
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </p>
                )}
              </p>
            </div>
            <div>
              <p className="whati" onClick={togleclicke}>
                Is Netfunx good for kids? <FiPlus className="plus" />
              </p>
              <p>
                {clickke && (
                  <p className="whatsi">
                    The Netfunx Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and movies in their own space.
                    <p className="youc">
                      Kids profiles come with PIN-protected parental controls
                      that let you restrict the maturity rating of content kids
                      can watch and block specific titles you don’t want kids to
                      see.
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
      </div>
    </div>
  );
};

export default Faq;
