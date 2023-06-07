import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import grouporangebg from "../assets/images/png/group_header.png";
import headerbg from "../assets/images/png/hero_bg.png";
import centerdownarrow from "../assets/images/png/center_down_arrow_header.png";
import downarrow from "../assets/images/png/down_arrow_header.png"
const Header = () => {
  return (
    <>
      <div className="d_none_xl h_500 h_350_1600 position-relative">
        <div className="position-relative top_-5 d_none_xl">
          <img src={headerbg} alt="header bg" className="w_100" />
        </div>
        <div className="position-relative top_-450 d_none_xl">
          <img src={grouporangebg} alt="group orange bg" className="w_100" />
        </div>
        <div className="position-absolute top_40 left_40 d_none_xl">
          <img src={centerdownarrow} alt="center down arrow header section" />
        </div>
        <div className="position-absolute top_60 right_10 d_none_xl">
          <img src={downarrow} alt="down arrow header section" />
        </div>
      </div>
    </>
  );
};

export default Header;
