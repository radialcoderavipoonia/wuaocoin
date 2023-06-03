import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import witepaper_img1 from "../Images/Png/Whitepaper_img1.png";
import witepaper_img2 from "../Images/Png/Whitepaper_img2.png";

const Whitepaper = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <div className="d-flex ">
              <div>
                <img className=" w-100" src={witepaper_img1} alt="mobile_img" />
              </div>

              <div>
                <h2 className="text-center">Whitepaper</h2>
                <p className="text-center">
                  We want you to know our vision we leave you our whitepaper and
                  now be a part of the digital transformation.
                </p>
                <div className="whitepaper_btn"></div>
              </div>

              <div>
                <img className="w-100" src={witepaper_img2} alt="mobile_img" />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Whitepaper;
