import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import React, { component } from "react";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="vh-100 header_bg overflow -hidden">
        <Nav />
        <Hero />
      </div>
      <Header />
    </>
  );
}

export default App;
