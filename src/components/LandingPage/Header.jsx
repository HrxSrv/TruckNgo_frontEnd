import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './LandingPage.css';
function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="main2">
      <div className="header">
        <div id="menu-btn" className="fas fa-bars"></div>
{/* 
        <a href="#" data-aos="zoom-in-left" data-aos-delay="150" className="logo">
          <span>T</span>ruck<span>N</span>Go
        </a> */}
        <nav className="navbar">
          <a href="#trucks" data-aos="zoom-in-left" data-aos-delay="450">Trucks</a>
          {/* <a href="#drivers" data-aos="zoom-in-left" data-aos-delay="600">Drivers</a> */}
          <a href="#about" data-aos="zoom-in-left" data-aos-delay="600">About Us</a>
          <a href="#contact" data-aos="zoom-in-left" data-aos-delay="600">Contact</a>
        </nav>
        {/* <button className="btn" id="login-popup">Login or Register</button> */}
      </div>
    </div>
  );
}

export default Header;
