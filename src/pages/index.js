import React, { useState } from "react";
import Features from "../components/Features";
import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Features />
      <Pricing />
    </>
  );
};

export default Home;
