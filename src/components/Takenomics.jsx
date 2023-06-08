import React from "react";
import a from "../Images/Png/A.png";
import b from "../Images/Png/team-vector.png";
import c from "../Images/Png/c.png";
import d from "../Images/Png/d.png";
import bcircle from "../Images/Png/bcircle.png";
import shadow from "../Images/Png/shadow.png";
import shadow2 from "../Images/Png/shadow-2.png";
import b10 from "../Images/Png/b-10.png";
import c_circle from "../Images/Png/c5.png";
import d_circle from "../Images/Png/d5.png";
import vec from "../Images/Png/takenommics-vec.png";
import vec2 from "../Images/Png/takenomics-vec2.png";
import takearrow from "../Images/Png/take-arrow.png";
import pink from "../Images/Png/pink.png";
import yellow from "../Images/Png/yellow.png";
import green from "../Images/Png/green.png";
import blue from "../Images/Png/blue.png";
const Takenomics = () => {
  return (
    <>
      <section className="py-5 position-relative ">
        <div className="vec d-none-lg">
          <img  src={vec} alt="vec" />
        </div>
       
        <div className="takearrow d-none-lg">
          <img src={takearrow} alt="takearrow" />
        </div>
        <div className="container ">
          <h2 className="py-md-5 ff_montserrat fs_3xl color_grey fw-bold text-center mb-0">
            Tokenomics
          </h2>
          <div className="d-flex flex-column align-items-center  position-relative py-md-5 py-5 translate_md vh_sm-50">
            <div className="bcircle b-shadow ">
              <img className="w-100 b-shadow" src={bcircle} alt="bcircle" />
              <div className="pink">
                <img src={pink} alt="pink" />
              </div>
              <div className="p10">
                <p className="ff_montserrat fw-bold fs_27px color_grey2 text-center mb-0">
                  10%
                </p>
              </div>
              <div className="b">
                <img src={b} alt="b" />
              </div>
              <div className="a a-shadow circle-animation">
                <div className="yellow ">
                  <img src={yellow} alt="yellow" />
                </div>
                <img className="w100-lg " src={a} alt="a" />
                <div className="p90">
                  <p className="ff_montserrat fw-bold fs_32 mb-0 color_grey2">
                    90%
                  </p>
                </div>
                <div className="team ff_montserrat fw-bold fs_lg d-none-lg">
                  Team
                </div>
                <div className="bhc ff_montserrat fw-bold fs_lg d-none-lg">
                  Buyers/holders/ community
                </div>
              </div>
              <div className="c-circle c-shadow">
                <div className="green">
                  <img src={green} alt="green" />
                </div>
                <img className="c-shadow" src={c_circle} alt="c" />
                <div className="c">
                  <img src={c} alt="c" />
                </div>
                <div className="p5">
                  <p className="ff_montserrat fw-bold fs_27px color_grey2 text-center mb-0">
                    5%
                  </p>
                </div>
                <div className="sif ff_montserrat fw-bold fs_lg d-none-lg">
                  Subdivided into 5% Founders
                </div>
              </div>
              <div className="d-circle w100-lg  ">
                <div className="blue">
                  <img src={blue} alt="blue" />
                </div>
                <img className="w100_lg d-shadow" src={d_circle} alt="d" />
                <div className="d">
                  <img src={d} alt="d" />
                </div>
                <div className="p-5">
                  <p className="ff_montserrat fw-bold fs_27px color_grey2 text-center mb-0">
                    5%
                  </p>
                </div>
                <div className="workers ff_montserrat fw-bold fs_lg d-none-lg">
                  Workers
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column d-lg-none">
            <div className="d-flex align-items-center">
              <div className="p-2">
                <span className="pink-box d-flex"></span>
              </div>
              <div className="px-3">
                <p className="ff_montserrat fw-bold color_grey fs_md mb-0">
                  Team
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <span className="orange-box d-flex"></span>
              </div>
              <div className="px-3">
                <p className="ff_montserrat fw-bold color_grey fs_md mb-0">
                  Buyers/holders/ community
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <span className="green-box d-flex"></span>
              </div>
              <div className="px-3">
                <p className="ff_montserrat fw-bold color_grey fs_md mb-0">
                  Subdivided into 5% Founders
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <span className="blue-box d-flex"></span>
              </div>
              <div className="px-3">
                <p className="ff_montserrat fw-bold color_grey fs_md mb-0">
                  Workers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vec-2 d-none-lg">
          <img src={vec2} alt="vec" />
        </div>
      </section>
    </>
  );
};
export default Takenomics;
