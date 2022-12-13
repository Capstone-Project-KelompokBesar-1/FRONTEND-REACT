import React from "react";
import AboutUs from "../../components/LandingPage/AboutUs/AboutUs";
import Contact from "../../components/LandingPage/Contact/Contact";
import Footer from "../../components/LandingPage/Footer/Footer";
import Hero from "../../components/LandingPage/Hero/Hero";
import LandingNavbar from "../../components/LandingPage/LandingPageNavbar/LandingNavbar";
import Testimony from "../../components/LandingPage/Testimony/Testimony";

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <Hero />
      <AboutUs />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
