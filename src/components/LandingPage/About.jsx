import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import './LandingPage.css';
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section className="about" id="about">
        <div className="video-container" data-aos="fade-right" data-aos-delay="150">
          <div id="video-popup" className="popup">
            <video
              src="/videos/India A World in Our World India Cinematic Travel Film 4k.mp4"
              controls
              className="popup-video"
            ></video>
          </div>
        </div>
        <div className="content" data-aos="fade-right" data-aos-delay="300">
          <span>Who We Are?</span>
          <h3>A Glimpse into Our Journey</h3>
          <p>
            TruckNGo is your trusted partner for all your truck rental needs.
            We're dedicated to simplifying the process of finding and booking
            the right trucks for your cargo transport. With a wide network of
            reliable transport providers, we ensure that you have access to a
            diverse range of vehicles, from small vans to large trucks, all at
            your fingertips. Our user-friendly platform allows you to quickly
            and efficiently book the perfect truck for your needs. We prioritize
            safety, efficiency, and affordability, making us the go-to choice
            for businesses and individuals seeking a seamless and cost-effective
            truck rental experience.
          </p>

          <a
            href="#watch-video" 
            className="btn1"
          >
            Watch Full Video
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
