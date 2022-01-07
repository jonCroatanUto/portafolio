import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FullStack from "./pages/FullStack";
import AnimationDesign from "./pages/AnimationDesign";
import AboutME from "./pages/AboutME";
import Contact from "./pages/Contact";
import NavBarMenu from "./components/NavBarMenu";
function App() {
  return (
    <>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullStack" element={<FullStack />} />
        <Route path="/animationDesign" element={<AnimationDesign />} />
        <Route path="/aboutME" element={<AboutME />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
