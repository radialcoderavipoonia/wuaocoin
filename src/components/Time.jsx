import React from "react";
import { Container, Form } from "react-bootstrap";
import td from "../Images/Png/timedots.png";
import timebg from "../Images/Png/background.png"
const Time = () => {
  return (
    <>
      <section className="time-bg py-5">
        <Container className="py-60">
          <div className="d-flex justify-content-center">
            <h1 className="text-center ff_montserrat color-light fs_2xl mw-609 fw-bold lh-52 mb-0">
              Public Sale 5% in ERC20 & BEP20, 100% for the Community
            </h1>
          </div>

          <div className="d-flex justify-content-center pt-50 ">
            <div className="px-20">
              <div className="border-white px-20 py-10 position-relative">
                <div className="timedots">
                  <img src={td} alt="timedots" />
                </div>
                <p className="fs_3xl fw-bold ff_montserrat color-light mb-0">
                  86
                </p>
              </div>
              <p className="ff_montserrat fw-medium fs_md color-light text-center pt-1">
                Days
              </p>
            </div>

            <div className="px-20">
              <div className="border-white px-20 py-10 position-relative">
                <div className="timedots">
                  <img src={td} alt="timedots" />
                </div>
                <p className="fs_3xl fw-bold ff_montserrat color-light mb-0">
                  05
                </p>
              </div>
              <p className="ff_montserrat fw-medium fs_md color-light text-center pt-1">
                Hours
              </p>
            </div>
            <div className="px-20">
              <div className="border-white px-20 py-10 position-relative">
                <div className="timedots">
                  <img src={td} alt="timedots" />
                </div>
                <p className="fs_3xl fw-bold ff_montserrat color-light mb-0">
                  20
                </p>
              </div>
              <p className="ff_montserrat fw-medium fs_md color-light text-center pt-1">
                Minute
              </p>
            </div>
            <div className="px-20">
              <div className="border-white px-20 py-10">
                <p className="fs_3xl fw-bold ff_montserrat color-light mb-0">
                  37
                </p>
              </div>
              <p className="ff_montserrat fw-medium fs_md color-light text-center pt-1">
                Second
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-50 ">
            <div className="bg-white buy curser-pointer">
              <a  className="lg ff_montserrat fw-semibold fs_sm" href="#">
                BUY WUAO
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Time;
