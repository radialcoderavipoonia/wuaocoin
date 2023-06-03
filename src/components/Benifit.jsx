import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import benifit_img1 from "../Images/Png/benifit_img1.png";
import benifit_img2 from "../Images/Png/benifit_img2.png";
import benifit_img3 from "../Images/Png/benifit_img3.png";

const Benifit = () => {
  return (
    <>
      <section>
        <Container>
          <Row className=" align-items-baseline">
            <div className="col-4">
              <div className="benifit_box ">
                <div>
                  <img className="benifit_img1 " src={benifit_img1} alt="benifit_img1" />
                </div>
                <p>Services, Products and Community All in one place!</p>
              </div>
            </div>
            <div className="col-4">
              <div className="benifit_box">
                <div className="ps-5" >
                  <img className="benifit_img2"  src={benifit_img2} alt="benifit_img1" />
                </div>
                <p>Services, Products and Community All in one place!</p>
              </div>
            </div>
            <div className="col-4">
              <div className="benifit_box">
                <div>
                  <img className="benifit_img3" src={benifit_img3} alt="benifit_img1" />
                </div>
                <p>Services, Products and Community All in one place!</p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Benifit;
