import React from "react";
import pagelogo from "../assets/images/png/page_logo.png";
import navdiscord from "../assets/images/png/nav_discord.png";
import navtwitter from "../assets/images/png/nav_twitter.png";
import navtelegram from "../assets/images/png/nav_telegram.png";
import navlinkedin from "../assets/images/png/nav_linkedin.png";
import langicon from "../assets/images/png/language_logo.png";
import toppagelogoshadow from "../assets/images/png/page_logo_bg.png";
import { Col, Row } from "react-bootstrap";
export const Nav = () => {
  return (
    <>
      <section>
        {/* hero section starts  */}
        <header className="header_bg position-relative">
          {/* nar bar starts  */}
          <nav className="d-flex justify-content-between align-items-center container w-100">
            <div className="py-4 position-relative z-3">
              <img src={pagelogo} alt="page logo" className="w-100" />
            </div>
            <div className="d-flex justify-content-between align-items-center pb-4">
              <ul className="d-flex pt_40 m-0">
                <li className="ff_montserrat fw-semibold fs_sm m-0">
                  <a href="#" className="text-white">
                    ICO
                  </a>
                </li>
                <li className="pl_31 m-0 ff_montserrat fw-semibold fs_sm m-0">
                  <a href="#" className="text-white">
                    WHITEPAPER
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center pt_32 ps-4 ">
                <a href="#">
                  <img
                    src={navdiscord}
                    alt="nav discord logo"
                    className="m-0 w-100"
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={navtwitter}
                    alt="nav twitter logo"
                    className="ps-3 m-0 w-100"
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={navtelegram}
                    alt="nav telegram logo"
                    className="ps-3 m-0 w-100"
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={navlinkedin}
                    alt="nav linkedin logo"
                    className="ps-3 w-100 m-0"
                  />
                </a>
              </div>
              <button className="mt_32 p-1 ms-4 border_white bg-transparent br_165 ">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={langicon} alt="language icon" className="m-0" />
                  <p className="py-2 ps-2 ff_montserrat fw-normal fs_sm text-white m-0">
                    Eng
                  </p>
                  <span className="m-0 text-white"> &#8744;</span>
                </div>
              </button>
            </div>
          </nav>
          <div className="position-absolute top-0 left-0 ">
            <img
              src={toppagelogoshadow}
              alt="top left corner shadow"
              className="w-100"
            />
          </div>
          {/* nav bar ends */}
          <div className="container">
            <div className="py-5">
              <div className="py-5">
                <div className="py-5">
                  <div className="py-5">
                    <Row>
                      <Col>
                        <p>Welcome to</p>
                        <h2>The Future of E-Commerce</h2>
                        <p>
                          A multi-purpose token to improve digital sales and
                          purchases
                        </p>
                        <div className="d-flex align-items-center">
                          <button>How To Buy</button>
                          <button>Read Whitepaper</button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* hero section ends   */}
      </section>
    </>
  );
};
export default Nav;
