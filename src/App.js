import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { Component } from "react";
import Time from "./components/Time";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import Takenomics from "./components/Takenomics";
import Dup from "./components/Dup";
function App() {
  return (
    <>
       <Nav />
      <Hero /> 
       <Time /> 
      <Takenomics />
      <Partnership />
      <Footer />
       <Dup />
    </>
  );
}

export default App;
