import React from "react";
import pagelogo from "../assets/images/png/page_logo.png";
export const Nav = () => {
  return (
    <>
      <section>
        <header>
          <nav className="d-flex justify-content-between container">
            <div>
              <img src={pagelogo} alt="page logo" className="w-100" />
            </div>
            <div>
              <ul className="d-flex">
                <li>
                  <a href="#">ICO</a>
                </li>
                <li>
                  <a href="#">WHITEPAPER</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
};
export default Nav;
