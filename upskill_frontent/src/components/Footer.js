import React, { useState } from 'react';
import '../styles/Footer.css'; // Ensure this path is correct based on your project structure

const Footer = () => {
  const [mapVisible, setMapVisible] = useState(false);

  return (
    <footer className="footer-container">
      <div className="footer-columns">
        
        {/* Column 1: Useful Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/approach">Our Approach</a></li>
            <li><a href="/health-safety">Health & Safety</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
            <li><a href="/circular">Circular</a></li>
            <li><a href="/mandatory-public-disclosure">Mandatory Public Disclosure</a></li>
          </ul>
        </div>
        
        {/* Column 2: Social Media & Contact */}
        <div className="footer-column">
          <h3>Contact & Social Media</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/upskill_academy2022?igsh=dm9ybnZpMXR0dmRs" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://m.facebook.com/upskillacademy1/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#!" onClick={() => window.open(`https://wa.me/919342268252?text=${encodeURIComponent("Hello, I would like to inquire about your services.")}`, '_blank')}>
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:upskillacademy@gmial.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <button
              className="location-button"
              onClick={() => setMapVisible(!mapVisible)}
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
          {mapVisible && (
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14876.350986207332!2d77.5843807!3d11.2846164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d2ab72dbc65%3A0x382190599859fe68!2sUpskill%20Academy!5e1!3m2!1sen!2sin!4v1725356209278!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          )}
        </div>
        
        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/committee">Committee</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/video-gallery">Video Gallery</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/tc-application">TC Application</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2023 Upskill Academy. All rights reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a></p>
      </div>
    </footer>
  );
};

export default Footer;
