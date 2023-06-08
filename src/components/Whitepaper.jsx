import React from "react";
import { Row } from "react-bootstrap";
import witepaper_img1 from "../Images/Png/Whitepaper_img1.png";
import witepaper_img2 from "../Images/Png/Whitepaper_img2.png";
import arrow from "../Images/Png/whitepaper_arrow.png";
const Whitepaper = () => {
  return (
    <>
      <section className="whitepaper_bg py-5">
        <div className="container-fluid pb-sm-5 pb-md-0 mw_1440">
          <Row>
            <div className="d-flex justify-content-between flex-column flex-lg-row">
              <div className="col-xl-3 d-flex align-items-center whitepaper_img1">
                <img className="w-100" src={witepaper_img1} alt="mobile_img" />
              </div>
              <div className="position-reletive col-xl-6 d-flex flex-column justify-content-centre">
                <h2 className="text-center mb-0 text-white ff_montserrat fw-bold fs_4xl">
                  Whitepaper
                </h2>
                <p className="text-center pb-4 pb-lg-5 text-white ff_montserrat fw-semibold pt_12 mb-0 fs_md mw_577 mx-auto">
                  We want you to know our vision we leave you our whitepaper and
                  now be a part of the digital transformation.
                </p>
                <div className="whitepaper_btn mx-auto">
                  <span>Read WhitePaper</span>
                </div>
                <div  className="pt-lg-4 pt-xl-0">
                  <img className="whitepaper_arrow position_absolute d-none d-xl-block" src={arrow} alt="arrowimg"/>
                </div>
              </div>
              <div className="col-xl-3 d-flex align-items-center whitepaper_img2 pb-md-5 pb-lg-0">
                <img className="w-100" src={witepaper_img2} alt="mobile_img"/>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Whitepaper;
