import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { Component } from "react";
import Time from "./components/Time";
import Partnership from "./components/Partnership";
import Takenomics from "./components/Takenomics";
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Time />
      <Takenomics />
      <Partnership />
      <Footer />
    </>
  );
}

export default App;
