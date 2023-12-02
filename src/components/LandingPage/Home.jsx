import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './LandingPage.css';
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <span data-aos="fade-up" data-aos-delay="150">Let's Start</span>
          <h3 data-aos="fade-up" data-aos-delay="300">
            Explore Endless Possibilities with TruckNGo!
          </h3>
          <p data-aos="fade-up" data-aos-delay="450">
            "Welcome to TruckNGo - Your Gateway to Seamless Truck Rentals! Join
            us on a journey through the world of hassle-free truck rentals,
            where we'll connect you with reliable transport options, ensuring
            your cargo is delivered swiftly and efficiently."
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
