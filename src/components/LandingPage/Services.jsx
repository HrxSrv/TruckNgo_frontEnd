import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './LandingPage.css';
function Services() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section className="services" id="services">
        <div className="heading">
          <h1><center>Our services</center></h1>
        </div>
        <br />
        <div className="box-container">
          <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i className="fas fa-globe"></i>
            <h3>All Over India</h3>
            <p>
              TruckNGo covers every corner of India, ensuring nationwide
              transport solutions.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i className="fa-solid fa-circle-check"></i>

            <h3>Quick & Easy Portal</h3>
            <p>
              Effortlessly book trucks and manage your shipments through our
              user-friendly online platform.
            </p>
          </div>
        
          <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i className="fa-solid fa-receipt"></i>
            <h3>Advance Booking</h3>
            <p>
              Plan ahead with our convenient advance booking options, securing
              timely and reliable transportation.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Full Load Services</h3>
            <p>
              Our trucks are equipped for full-load shipments, providing
              efficiency and reliability.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i className="fas fa-sack-dollar"></i>
            <h3>Transparent Pricing</h3>
            <p>
              We offer straightforward pricing for cost-effective and
              budget-friendly transport solutions.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>
              Get around-the-clock support for all your inquiries and assistance
              needs. We're here whenever you need us.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
