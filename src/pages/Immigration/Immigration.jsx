import React from "react";
import "./Immigration.scss";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ActionCards from "../../components/ActionCards/ActionCards";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Testimonies from "../../components/Testimonies/Testimonies";

const Immigration = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ActionCards />
      <AboutUs />
      <Services />
      <Testimonies />
      <Contact />
    </div>
  );
};

export default Immigration;
