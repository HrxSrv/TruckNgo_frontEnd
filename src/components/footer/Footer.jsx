import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './LandingPage.css';

function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="footer">
      <div className="box-container">
        <div className="box" data-aos="fade-up" data-aos-delay="150">
          <a href="#" className="logo">
            <span style={{ color: '#fc0' }}>T</span>
            ruck
            <span style={{ color: '#fc0' }}>N</span>
            go
          </a>
          <p>Revolutionize transportation with our Truck Lending platform. Rent or lend trucks effortlessly, connecting businesses and drivers for efficient logistics solutions.</p>
          <div className="share">
            <a href="https://github.com/AkprasadoP" className="fab fa-github"></a>
            <a href="https://twitter.com/AshishKrPrasad3" className="fab fa-twitter"></a>
            <a href="https://www.instagram.com/_akprasad_14_/" className="fab fa-instagram"></a>
            <a href="https://www.linkedin.com/in/ashish-prasad-b22916256/" className="fab fa-linkedin"></a>
          </div>
        </div>
        <div className="box" data-aos="fade-up" data-aos-delay="300">
          <h3>Quick Links</h3>
          <a href="#home" className="links"><i className="fas fa-arrow-right"></i>Home</a>
          <a href="#about" className="links"><i className="fas fa-arrow-right"></i>About</a>
          <a href="#services" className="links"><i className="fas fa-arrow-right"></i>Services</a>
          {/* <a href="#destinations" className="links"><i className="fas fa-arrow-right"></i>Destinations</a>
          <a href="gallery" className="links"><i className="fas fa-arrow-right"></i>Gallery</a>
          <a href="blogs" className="links"><i className="fas fa-arrow-right"></i>Blogs</a> */}
        </div>
        <div className="box" data-aos="fade-up" data-aos-delay="450">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map"></i>IIIT JABALPUR</p>
          <p><i className="fas fa-phone"></i>8432434916</p>
          <p><i className="fas fa-envelope"></i>22bcs@iiitdmj.ac.in</p>
          <p><i className="fas fa-clock"></i>8:00am - 10:00pm</p>
        </div>
        {/* <div className="box" data-aos="fade-up" data-aos-delay="600">
          <h3>News Letter</h3>
          <p>Want to be updated with the latest news?</p>
          <form action="">
            <input type="email" name="" placeholder="Enter your email" className="email" id="" />
            <input type="submit" value="Subscribe" className="btn" />
          </form>
        </div> */}
      </div>
    </section>
  );
}

export default Footer;
