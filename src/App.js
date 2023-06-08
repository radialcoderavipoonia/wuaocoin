import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { component } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects.jsx";
import Partnership from "./components/Partnership";
import Time from "./components/Time";
import Takenomics from "./components/Takenomics";
import Footer from "./components/Footer";

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
      <Time />
      <Takenomics />
      <Partnership />
      <Footer />
    </>
  );
}

export default App;
