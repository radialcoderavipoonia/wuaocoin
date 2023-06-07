import React from "react";
import { Row } from "react-bootstrap";
import Roadmapimg from "../Images/Png/roadmape_img.png";
import Roadmap_side from "../Images/Png/roadmapimg_slide_img.png";
import Roadmap_arrow from "../Images/Png/roadmape_arrow.png";

const Roadmap = () => {
  return (
    <>
      <section className="roadmape_s py-4 position-relative ">
        <div className="py-lg-5  container-fluid px-sm-4">
          <h2 className="ff_montserrat fs_3xl ">RoadMap</h2>
          <p className="main_para mx-auto ff_montserrat pt_18 pb-3">
            Knowing our values, understanding the business idea and then,
            gradually, presenting the plans to the public is our way of doing
            things.
          </p>
          <div className="d-flex justify-content-center pt-lg-5">
            <img
              className="mw_592 w-100 roadmape_img"
              src={Roadmapimg}
              alt="roadmape"
            />
          </div>
          <Row className="py-lg-5 py-4 mt-lg-2">
            <div className="col-xl-2 col-lg-4 col-sm-6 pt-3 pt-xl-0">
              <div className="h-100 roadmape_box bg_yellow">
                <h2 className="text-start">01</h2>
                <p>Organizational concept (creations)</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6 pt-3 pt-xl-0">
              <div className="h-100 roadmape_box bg_orange">
                <h2 className="text-start">02</h2>
                <p>Directional Process (Actions)</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6 pt-3 pt-xl-0">
              <div className="h-100 roadmape_box bg_lightblue">
                <h2 className="text-start">03</h2>
                <p>Operational Development (technical team)</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6 pt-3 pt-xl-0">
              <div className="h-100 roadmape_box bg_darkblue">
                <h2 className="text-start">04</h2>
                <p>Strategic Opportunities (alliances)</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6 pt-3 pt-xl-0">
              <div className="h-100 roadmape_box bg_purple">
                <h2 className="text-start">05</h2>
                <p>Stakeholders (benefits)</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6 pt-3 pt-xl-0">
              <div className="h-100 roadmape_box bg_pink">
                <h2 className="text-start">06</h2>
                <p>Human Identity (social contribution)</p>
              </div>
            </div>
          </Row>
        </div>

        <img
          className="roadmap_sideimg"
          src={Roadmap_side}
          alt="roadmape_sideimg"
        />

        <img
          className="roadmap_arrowimg d-none d-lg-block"
          src={Roadmap_arrow}
          alt="roadmape_arrow"
        />
      </section>
    </>
  );
};

export default Roadmap;
