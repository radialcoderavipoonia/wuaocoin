
import "./App.css";
import "./root.css";
import "./middle.css"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { component } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects.jsx";
import Whitepaper from "./components/Whitepaper.jsx"
import Benifit from "./components/Benifit.jsx"
import Roadmap from "./components/Roadmap.jsx"
import Time from "./components/Time.jsx"
import Takenomics from "./components/Takenomics.jsx"
import Partnership from "./components/Partnership.jsx"
import Footer from "./components/Footer.jsx"
import Loader from "./components/Loader";

function App() {
  return (
    <>
    <Loader/>
      <div className="">
        <div className="vh_100_1440 header_bg  ">
          <Nav />
          <Hero />
        </div>
        <Header />
        <Projects />
        <Benifit />
        <Whitepaper />
        <Roadmap />
        <Time/>
        <Takenomics />
        <Partnership />
        <Footer/>
      </div>
    </>
  );
}

export default App;
