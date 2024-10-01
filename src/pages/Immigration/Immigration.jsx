import React from "react";
import "./Immigration.scss";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ActionCards from "../../components/ActionCards/ActionCards";
import AboutUs from "../../components/AboutUs/AboutUs";

const Immigration = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ActionCards />
      <AboutUs />
    </div>
  );
};

export default Immigration;
