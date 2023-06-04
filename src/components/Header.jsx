import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img2 from "../assets/images/png/header_img2.png";
import header_img3 from "../assets/images/png/header_img3.png";
import hero_layer from "../assets/images/png/hero_layer.png";

const Header = () => {
  return (
    <div>
      <section className="position-relative d-xl-block d-none overf low-hidden">
        <img
          src={hero_layer}
          alt="hero_layer"
          className="position-absolute top-0 w-100 minus_margin"
        />
        <Row>
          <Col lg={6}>
            <img src={header_img2} alt="header_img2" className=" w-100" />
          </Col>
          <Col lg={6} className="pe-0">
            <div className=" hero_layer2 position-absolute end-0 z-0">
              <img src={header_img3} alt="header_img2" className=" w-100 z-0" />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Header;
