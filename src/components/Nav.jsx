import React from "react";
import pagelogo from "../assets/images/png/page_logo.png";
import navdiscord from "../assets/images/png/nav_discord.png";
import navtwitter from "../assets/images/png/nav_twitter.png";
import navtelegram from "../assets/images/png/nav_telegram.png";
import navlinkedin from "../assets/images/png/nav_linkedin.png";
import langicon from "../assets/images/png/language_logo.png";
import toppagelogoshadow from "../assets/images/png/page_logo_bg.png";

export const Nav = () => {
  return (
    <>
      <section>
        <header className=" position-relative ">
          {/* nar bar starts  */}

          <nav className=" position_fixed z_11 bg_orange w-100">
            <div className="d-flex justify-content-between align-items-center container">
              <div className="py-4 position-relative z-3">
                <a href="#">
                  <img src={pagelogo} alt="page logo" className="w-100" />
                </a>
              </div>
              <input type="checkbox" id="check" />
              <label for="check" class="d-lg-none d-block">
                <div class="d-flex justify-content-between flex-column">
                  <span class="menuitem"></span>
                  <span class="menuitem"></span>
                  <span class="menuitem"></span>
                </div>
              </label>
              <div className="d-flex  pos_fixed_lg left_0  center_lg align-items-center pb-4">
                <ul className="d-flex flex-column flex-lg-row pt_40 m-0">
                  <li className="ff_montserrat fw-semibold fs_sm m-0">
                    <a
                      href="#"
                      className="text-white nav_underline position-relative"
                    >
                      ICO
                    </a>
                  </li>
                  <li className="pl_31 pl_lg_0 m-0 ff_montserrat fw-semibold fs_sm m-0">
                    <a
                      href="#"
                      className="text-white nav_underline position-relative"
                    >
                      WHITEPAPER
                    </a>
                  </li>
                </ul>
                <div className="d-flex align-items-center pt_32 ps-4 ">
                  <div>
                    <a href="#">
                      <img
                        src={navdiscord}
                        alt="nav discord logo"
                        className="m-0 w-100 nav_icon"
                      />
                    </a>
                  </div>
                  <div className="ms-lg-3 m-0">
                    <a href="#">
                      {" "}
                      <img
                        src={navtwitter}
                        alt="nav twitter logo"
                        className=" m-0 w-100 nav_icon"
                      />
                    </a>
                  </div>
                  <div className="ms-lg-3 m-0">
                    <a href="#">
                      {" "}
                      <img
                        src={navtelegram}
                        alt="nav telegram logo"
                        className=" m-0 w-100 nav_icon"
                      />
                    </a>
                  </div>
                  <div className="ms-lg-3 m-0">
                    <a href="#">
                      {" "}
                      <img
                        src={navlinkedin}
                        alt="nav linkedin logo"
                        className=" w-100 m-0 nav_icon"
                      />
                    </a>
                  </div>
                </div>
                <button className="mt_32 px-2 ms-4 border_white bg-transparent br_165 language_button">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={langicon} alt="language icon" className="m-0" />
                    <p className="py-lg-2 ps-lg-2 ff_montserrat fw-normal fs_sm text-white m-0">
                      Eng
                    </p>
                    <span className="m-0 text-white"> &#8744;</span>
                  </div>
                </button>
              </div>
            </div>
          </nav>

          <div className="position-absolute top-0 left-0 d-lg-block d-none">
            <img
              src={toppagelogoshadow}
              alt="top left corner shadow"
              className=" w-75"
            />
          </div>
          {/* nav bar ends */}
        </header>
      </section>
    </>
  );
};
export default Nav;
