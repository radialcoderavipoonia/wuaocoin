import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img1 from "../assets/images/png/header_img1.png";
import hero_img from "../assets/images/png/hero_img.png";

export const Hero = () => {
  return (
    <>
      <section className=" flex-grow-1 position-relative d-flex align-items-center py-5">
        <img
          src={hero_img}
          alt=""
          className="header_layer position-absolute end-0"
        />
        <Container className="py-5">
          <Row>
            <Col lg={6}>
              <p className="text-white">Welcome to</p>
              <h1 className="text-white">The Future of E-Commerce</h1>
              <p className="text-white">
                A multi-purpose token to improve digital sales and purchases
              </p>
              <div className="d-flex">
                <button>How To Buy</button>
                <button>Read Whitepaper</button>
              </div>
            </Col>
            <Col lg={6}>  
              <img
                src={header_img1}
                alt="header_img1"
                className=" position-absolute end-0 top-0"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Hero;
