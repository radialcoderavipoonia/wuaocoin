import logo from "./logo.svg";
import "./App.css";
import "./root.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { Component } from "react";
import Time from "./components/Time";
function App() {
  return (
    <>
      {/* <Nav />
      <Hero /> */}
      <Time/>
    </>
  );
}

export default App;
