import React, { useEffect, useState } from "react";
import "./Immigration.scss";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ActionCards from "../../components/ActionCards/ActionCards";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Testimonies from "../../components/Testimonies/Testimonies";
import Footer from "../../components/Footer/Footer";
import AnimationLoading from "../../components/AnimationLoading/AnimationLoading";

const Immigration = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <AnimationLoading />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <ActionCards />
          <AboutUs />
          <Services />
          <Testimonies />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Immigration;
