import React from 'react';
import Header from '../../components/LandingPage/Header';
import Home from '../../components/LandingPage/Home';
import About from '../../components/LandingPage/About';
import Banner from '../../components/LandingPage/Banner';
import Services from '../../components/LandingPage/Services';
import Trucks from '../../components/LandingPage/Trucks';
function LandingPage() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Banner />
      <Services />
      <Trucks />
    </div>
  );
}

export default LandingPage;
