// import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./middle.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { component } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects.jsx";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Benifit from "./components/Benifit";
import Time from "./components/Time";
import Takenomics from "./components/Takenomics";
import Partnership from "./components/Partnership";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        <div className="vh_100_1440 header_bg  ">
          <Nav />
          <Hero />
        </div>
        <Header />
        <Projects />
      </div>
      <Benifit />
      <Whitepaper />
      <Roadmap />
      <Time />
      <Partnership />
      <Takenomics />
      {/* <Footer /> */}

    </>)
}

export default App
