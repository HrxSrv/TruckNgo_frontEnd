import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import './LandingPage.css';
import "aos/dist/aos.css";
function Banner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
       <section className="banner" id="banner">
        <div className="content" data-aos="fade-left" data-aos-delay="150">
          <h2> Online Truck Booking - Revolutionizing the Way You Move</h2>
          <p>
            Tired of the conventional methods of booking trucks? Ready to
            streamline your transportation needs? Look no further! We've
            introduced an innovative and efficient way to book trucks online.
            Our user-friendly online truck booking app and web portal allow you
            to book a truck from the comfort of your home or office.
          </p>
          <p>
            Booking a truck online has never been easier! Whether you have a
            small load or a substantial shipment, our extensive fleet, equipped
            with the latest technology, is ready to meet your transport
            requirements. As a comprehensive transport company, we offer
            cutting-edge logistics and supply chain solutions with instant
            pricing options, empowering you to manage your transportation budget
            effectively.
          </p>
          <p>
            We are your partner throughout your digital transformation journey.
            Our reliable and affordable transport services enable businesses to
            focus on their core operations. With years of experience in handling
            diverse transportation projects, we guarantee safe, on-time
            deliveries nationwide.
          </p>
          <p><strong>Why Choose Us?</strong></p>
          <p>
            <strong>Rich Industry Experience:</strong> With years of experience
            in the transport industry, we bring you effective and affordable
            solutions tailored to your unique needs.
          </p>
          <p>
            <strong>Advanced Technology:</strong> Our adoption of cutting-edge
            technology, combined with a vast network of fleet owners and
            drivers, ensures that we can serve you anywhere, anytime across the
            country.
          </p>
          <p>
            <strong>On-Time, Every Time:</strong> We value your time as much as
            you do. Our commitment is to deliver your consignment on time, every
            time.
          </p>
          <p>
            <strong>Competitive Pricing:</strong> We've designed innovative
            transport solutions that fit your business requirements and budgets.
            Our affordability won't let cost be a barrier.
          </p>
          <p>
            <strong>Reliability and Safety:</strong> We prioritize reliability
            and safety, incorporating advanced security tools and technologies
            to ensure efficient and secure operations.
          </p>
          <p>
            <strong>Hassle-Free Services:</strong> We offer seamless shipping
            and logistics solutions for all your transport needs, regardless of
            size, ensuring a hassle-free experience.
          </p>
          <p>
            Looking for a reliable and experienced transport company in India?
            Search online for 'local transport near me' or 'transport company
            near me,' and you'll find TruckGuru among the top results. Contact
            us now to book our services!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Banner
