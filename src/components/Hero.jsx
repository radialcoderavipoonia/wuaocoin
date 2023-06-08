import React from 'react'

export const Hero = () => {
  return (
    <>
      <section className=" flex-grow-1 position-relative d-flex align-items-center py-5 ">
        <Container className="py-5 text-lg-start text-center">
          <Row className=" justify-content-center align-items-center">
            <Col lg={5} className="pt-5 ">
              <p className="text-white ff_montserrat fw-semibold fs_lg m-0">
                Welcome to
              </p>
              <h1 className="text-white pt-1 ff_montserrat fw_900 fs_4xl m-0 mw_513">
                The Future of E-Commerce
              </h1>
              <p className="text-white pt-2 ff_montserrat fw-medium mw_384 fs_md m-0">
                A multi-purpose token to improve digital sales and purchases
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start pt-5">
                <button className="button_hero bg_white border-0 br_40 button_hover">
                  <div className="text_gradient">
                    <a
                      href="#"
                      className="ff_montserrat fw-semibold fs_sm bg-transparent"
                    >
                      How To Buy
                    </a>
                  </div>
                </button>
                <button className="text-white ff_montserrat fw-semibold fs_sm border_white bg-transparent ms-3 br_40 button_hero button_hover">
                  Read Whitepaper
                </button>
              </div>
            </Col>
            <Col lg={7} className="pt-lg-0 pt-5">
              <div className="position-relative z-2 left_50 left_50_xxl top_100_xxl top_100">
                <img src={heroimage} alt="hero image " className="w_100 up_down" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute overflow_hidden_xl right_0 top_15 overflow-x-hidden">
          <img
            src={herorightwhitebg}
            alt=" right col 6 bg"
            className="w_100 w_70_xl w_100_lg"
          />
        </div>
        <div className="position-absolute right_0 top_536 z-1 overflow-x-hidden d_none_xl">
          <img
            src={herowhitebgcol6}
            alt="hero white bg col 6"
            className="w_100 w_70_xl"
          />
        </div>
        <div className="position-absolute top_10 left_40 d_none_lg">
          <img src={toparrow} alt="top arrow header section" />
        </div>
        <div className="position-absolute top_70 left_30 d_none_lg">
          <img src={leftarrow} alt="left arrow header section " />
        </div>
      
      </section>
    </>
  );
};
export default Hero;
