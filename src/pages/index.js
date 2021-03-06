import React, { useState } from 'react';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Network from '../components/Network';
import Pricing from '../components/Pricing';
import Sidebar from '../components/Sidebar';
import Testimonial from '../components/Testimonial';

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
      <Network />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
