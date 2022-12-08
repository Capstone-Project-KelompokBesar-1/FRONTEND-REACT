import React from "react";
import AboutUs from "../components/LandingPage/AboutUs/AboutUs";
import Contact from "../components/LandingPage/ContactSection/Contact";
import Footer from "../components/LandingPage/Footer/Footer";
import Hero from "../components/LandingPage/Hero/Hero";
import Navbar from "../components/LandingPage/LandingPageNavbar/LandingPageNavbar";
import Testimony from "../components/LandingPage/Testimony/Testimony";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
