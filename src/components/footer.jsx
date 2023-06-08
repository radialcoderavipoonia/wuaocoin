import React from "react";
import fv from "../Images/Png/footer-vector.png";
import fv2 from "../Images/Png/footer-vector2.png";
import arrow from "../Images/Png/footer-arrow.png";
import footerlogo from "../Images/Png/footer-logo.png";
import linked from "../Images/svg/Group 96975.svg";
import wa from "../Images/Png/wa.png";
import wlogo from "../Images/Png/wlogo.png";
import { Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className="position-relative  ">
        <div className="footer-1 d-none-lg">
          <img src={fv} alt="fv" />
        </div>
        <div className="footer-2 d-none-lg">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="footer-3 d-none-lg">
          <img src={fv2} alt="fv2" />
        </div>
        <div className="container py-5">
          <div className="d-lg-flex justify-content-between pt-5 pb-4">
            <div className="d-flex flex-column align-items-start">
              <div className="z-2 d-flex align-items-center">
                <div>
                  <a href="#">
                    <img className="spin" src={wlogo} alt="wlogo" />
                  </a>
                </div>
                <div className="px-3">
                  <a href=" #">
                    <img src={wa} alt="wa" />
                  </a>
                </div>
              </div>
              <div className="py-4">
                <p className="ff_montserrat fw-normal fs_sm color_grey mw-252px mb-0 op-70 text-start">
                  Welcome to The Future of the Market. The world's first Global
                  TechFi Platform
                </p>
              </div>
              <div className="d-flex">
                <div className="pe-12 z-2 hover-translate  updown">
                  <svg
                    className="curser-pointer"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="14.9309"
                      cy="14.9309"
                      r="14.9309"
                      fill="url(#paint0_linear_0_2306)"
                    />
                    <path
                      d="M20.6483 9.77512C19.7062 9.33596 18.6862 9.01721 17.6237 8.83304C17.6144 8.83274 17.6051 8.83449 17.5965 8.83816C17.588 8.84183 17.5803 8.84734 17.5741 8.85429C17.4466 9.08804 17.2979 9.39262 17.1987 9.62637C16.0717 9.45637 14.9257 9.45637 13.7987 9.62637C13.6995 9.38554 13.5508 9.08804 13.4162 8.85429C13.4091 8.84012 13.3879 8.83304 13.3666 8.83304C12.3041 9.01721 11.2912 9.33596 10.342 9.77512C10.3349 9.77512 10.3279 9.78221 10.3208 9.78929C8.39412 12.6722 7.86287 15.4772 8.12495 18.2539C8.12495 18.268 8.13203 18.2822 8.1462 18.2893C9.4212 19.2243 10.6466 19.791 11.8579 20.1664C11.8791 20.1735 11.9004 20.1664 11.9074 20.1522C12.1908 19.7626 12.4458 19.3518 12.6654 18.9197C12.6795 18.8914 12.6654 18.863 12.637 18.856C12.2333 18.7001 11.8508 18.516 11.4754 18.3035C11.447 18.2893 11.447 18.2468 11.4683 18.2255C11.5462 18.1689 11.6241 18.1051 11.702 18.0485C11.7162 18.0343 11.7374 18.0343 11.7516 18.0414C14.1883 19.1535 16.8162 19.1535 19.2245 18.0414C19.2387 18.0343 19.2599 18.0343 19.2741 18.0485C19.352 18.1122 19.4299 18.1689 19.5079 18.2326C19.5362 18.2539 19.5362 18.2964 19.5008 18.3105C19.1324 18.5301 18.7429 18.7072 18.3391 18.863C18.3108 18.8701 18.3037 18.9055 18.3108 18.9268C18.5374 19.3589 18.7924 19.7697 19.0687 20.1593C19.0899 20.1664 19.1112 20.1735 19.1324 20.1664C20.3508 19.791 21.5762 19.2243 22.8512 18.2893C22.8654 18.2822 22.8724 18.268 22.8724 18.2539C23.1841 15.0451 22.3554 12.2614 20.6766 9.78929C20.6695 9.78221 20.6624 9.77512 20.6483 9.77512V9.77512ZM13.0337 16.561C12.3041 16.561 11.6949 15.888 11.6949 15.0593C11.6949 14.2305 12.2899 13.5576 13.0337 13.5576C13.7845 13.5576 14.3795 14.2376 14.3724 15.0593C14.3724 15.888 13.7774 16.561 13.0337 16.561ZM17.9708 16.561C17.2412 16.561 16.632 15.888 16.632 15.0593C16.632 14.2305 17.227 13.5576 17.9708 13.5576C18.7216 13.5576 19.3166 14.2376 19.3095 15.0593C19.3095 15.888 18.7216 16.561 17.9708 16.561Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_2306"
                        x1="14.9228"
                        y1="-2.69145"
                        x2="14.9228"
                        y2="26.7422"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFBA3B" />
                        <stop offset="0.5315" stop-color="#FFA53B" />
                        <stop offset="1" stop-color="#FF983B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="pe-12 z-3  hover-translate downup">
                  <svg
                    className="curser-pointer"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="14.9769"
                      cy="14.9309"
                      r="14.9309"
                      fill="url(#paint0_linear_0_2310)"
                    />
                    <path
                      d="M21.8506 10.6202C21.3426 10.8394 20.7898 10.9971 20.2203 11.0585C20.8115 10.7073 21.2543 10.1524 21.4654 9.49796C20.9107 9.82798 20.3029 10.0594 19.6692 10.1819C19.4043 9.89876 19.0839 9.67317 18.728 9.51922C18.3721 9.36527 17.9884 9.28626 17.6006 9.28712C16.0317 9.28712 14.77 10.5588 14.77 12.1193C14.77 12.3385 14.7966 12.5576 14.8398 12.7685C12.4906 12.6456 10.3955 11.5233 9.00265 9.80508C8.74885 10.2386 8.61586 10.7322 8.61749 11.2345C8.61749 12.2173 9.1172 13.0839 9.87921 13.5936C9.43015 13.5759 8.9916 13.4524 8.59923 13.2333V13.2682C8.59923 14.6444 9.57208 15.785 10.8687 16.0473C10.6252 16.1105 10.3748 16.1429 10.1233 16.1436C9.93898 16.1436 9.76466 16.1253 9.58868 16.1004C9.94728 17.2227 10.9915 18.0378 12.235 18.0644C11.2621 18.8264 10.0436 19.2746 8.72042 19.2746C8.48302 19.2746 8.26388 19.2663 8.03644 19.2398C9.29152 20.0449 10.7807 20.5098 12.3844 20.5098C17.5906 20.5098 20.4395 16.1967 20.4395 12.453C20.4395 12.3302 20.4395 12.2073 20.4312 12.0845C20.9823 11.6811 21.4654 11.1814 21.8506 10.6202Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_2310"
                        x1="14.9688"
                        y1="-2.69145"
                        x2="14.9688"
                        y2="26.7422"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFBA3B" />
                        <stop offset="0.5315" stop-color="#FFA53B" />
                        <stop offset="1" stop-color="#FF983B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="pe-12 z-3 hover-translate updown">
                  <svg
                    className="curser-pointer "
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15.023"
                      cy="14.9309"
                      r="14.9309"
                      fill="url(#paint0_linear_0_2314)"
                    />
                    <path
                      d="M21.9856 9.27418L19.7411 19.8593C19.5716 20.6063 19.1302 20.7922 18.5028 20.4405L15.0826 17.9203L13.4325 19.5076C13.2498 19.6904 13.0973 19.8429 12.7451 19.8429L12.991 16.36L19.3294 10.6326C19.6051 10.3871 19.2694 10.2506 18.9012 10.4966L11.0653 15.4308L7.69182 14.3747C6.95817 14.1457 6.94488 13.6411 7.84482 13.2888L21.0395 8.2053C21.6504 7.97633 22.1849 8.3413 21.9856 9.27471V9.27418Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_2314"
                        x1="15.0149"
                        y1="-2.69145"
                        x2="15.0149"
                        y2="26.7422"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFBA3B" />
                        <stop offset="0.5315" stop-color="#FFA53B" />
                        <stop offset="1" stop-color="#FF983B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="hover-translate downup">
                  <img className="curser-pointer" src={linked} alt="linked" />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-6 col-md-4 pe-5 pt_lg_3">
                <h4 className="pb-3 transition-easy ff_montserrat fw-semibold fs_md mb-0">
                  Documents
                </h4>
                <ul>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      WhitePaper
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      Customers
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      Business
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 pe-5 pt_lg_3">
                <h4 className="pb-3 transition-easy ff_montserrat fw-semibold fs_md mb-0 ws-nowrap">
                  Quick Links
                </h4>
                <ul>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      Benefits
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      ICO
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      RoadMap
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      Tokenomic
                    </a>
                  </li>
                  <li className="pb-2 transition-easy">
                    <a
                      className="color_grey ff_montserrat fs_sm fw-normal op-60"
                      href="#"
                    >
                      Partnership
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 pt_lg_3">
                <h4 className="pb-3 transition-easy ff_montserrat fw-semibold fs_md mb-0">
                  Company
                </h4>
                <ul>
                  <li className="pb-2 transition-easy">
                    <a
                      className="ff_montserrat fw-normal color_grey op-60"
                      href="#"
                    >
                      WUAOCOIN
                    </a>
                  </li>
                  <li className="pb-2 ">
                    <a
                      className="ff_montserrat fw-normal color_grey op-60 transition-easy"
                      href="#"
                    >
                      WUAOSHOP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <p className="text-center ff_montserrat fw-normal fs_sm mb-0 py-4 op-60">
          © Copyright 2022 - Wuaocoin
        </p>
      </footer>
    </>
  );
};

export default Footer;
