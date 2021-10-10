import React, { useState } from "react";
import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Hero />
    </>
  );
};

export default Home;
