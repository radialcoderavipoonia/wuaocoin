// import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./middle.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { Component } from "react";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Benifit from "./components/Benifit";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Benifit/>
      <Whitepaper />
      <Roadmap />
    </>
  );
}

export default App;
