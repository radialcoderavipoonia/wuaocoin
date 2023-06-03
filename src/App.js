import logo from "./logo.svg";
import "./App.css";
import "./root.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { component } from "react";
function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
