import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import benifit_img1 from "../Images/Png/benifit_img1.png";
import benifit_img2 from "../Images/Png/benifit_img2.png";
import benifit_img3 from "../Images/Png/benifit_img3.png";
import benifit_arrow from "../Images/Png/benifit_arrow.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Benifit = () => {
  return (
    <>
      <section className="py-4">
        <Container className="py-lg-5 position-relative">
          <h2 className="benifit_heading pb-lg-5 pb-4 mb-0">Benefits</h2>
          <Row className="align-items-baseline justify-content-center">
            <div className="col-xl-4 col-md-6 pt-3 ">
              <div className="benifit_box d-flex flex-column align-items-center">
                <div className="py-4">
                  <img
                    className="benifit_img1 w-100"
                    src={benifit_img1}
                    alt="benifit_img1"
                  />
                </div>
                <p className="pt-23 mt-1 ff_montserrat mw_317">
                  Services, Products and Community All in one place!
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mt-5 mt-lg-0">
              <div className="benifit_box d-flex flex-column align-items-center">
                <div className="px-3">
                  <img
                    className="benifit_img2 w-100"
                    src={benifit_img2}
                    alt="benifit_img1"
                  />
                </div>
                <p className="pt-23 ff_montserrat mw_272">
                  Selling in crypto will no longer be complicated, it will be
                  safe and reliable.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mt-5 mt-lg-0">
              <div className="benifit_box d-flex flex-column align-items-center">
                <div className="px-3">
                  <img
                    className="benifit_img3 w-100"
                    src={benifit_img3}
                    alt="benifit_img1"
                  />
                </div>
                <p className="pt-23 ff_montserrat mw_288">
                  Buying and getting a real discount is possible? Join and check
                  it out.
                </p>
              </div>
            </div>
          </Row>
          <img
            src={benifit_arrow}
            alt="arrow"
            className="position-absolute benifit_arrow d-none d-lg-block"
          />
        </Container>
      </section>
    </>
  );
};

export default Benifit;
