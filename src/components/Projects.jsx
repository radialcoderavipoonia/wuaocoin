import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ourprojectimg from "../assets/images/png/our_project_section_img.png";
import wimg from "../assets/images/png/w_img.png";
import rightshadowproject from "../assets/images/png/our_project_right_shadow.png";
export const Projects = () => {
  return (
    <>
      <div className="bg_white">
        <div className="position-relative">
          <div className="container">
            <Row className="justify-content-start align-items-center">
              <Col lg={6}>
                <div className="d-flex justify-content-center align-items-center position-relative">
                  <a href="#">
                    {" "}
                    <img
                      src={ourprojectimg}
                      alt="our project section image"
                      className="w-100 cursor scaleaniamtion"
                    />
                  </a>
                  <div className="position-absolute animation_rotate ">
                    <a href="#">
                      {" "}
                      <img
                        src={wimg}
                        alt="w img "
                        className="w-100 mw_100 mw_150 mw_175 mw_200"
                      />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="text-start">
                <div className="d-flex justify-content-center text-lg-start text-center">
                  <div>
                    <h2 className="color_darkblack ff_montserrat fw-bold fs_3xl m-0">
                      Our Project
                    </h2>
                    <p className="color_black ff_montserrat fw-normal mw_447 pt_18 fs_md opacity-75">
                      Wuaocoin is the first project in the TechFi category that
                      allows users multiple options to have utility and
                      usability in the ecosystem, its time to change the way of
                      seeing the purchases and sales of products and services
                      within an multilateral electronic commerce platform using
                      crypto technology.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="position-absolute right_0 top_-100 d_none_xl ">
            <img
              src={rightshadowproject}
              alt="right shadow our projects section"
            />
          </div>
        </div>
       <div className="py-5"></div>
       <div className="py-5"></div>
       <div className="py-5"></div>
       <div className="py-5"></div>
      </div>
    </>
  );
};
export default Projects;
