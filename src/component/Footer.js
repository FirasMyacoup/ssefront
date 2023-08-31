import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa'; // Import the required icons
import '../CSS/footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
  <h3>Contact Us</h3>
  <p><FaEnvelope /> Email: commercial@ssem.co</p>
  <p><FaPhone /> Phone: +962-6-4722033</p>
  <div className="location-container">
    <p><FaMapMarker /> Location:</p>
    <p className="location-text">Fuhies - King Abdullah II St./Laith Smirat & Partner Complex</p>
  </div>
 
</div>
      </div>
      <div className="footer-bottom">
    
        <div className="text-center p-4" style={{ backgroundColor: "#576F72", color:"#F0EBE3"}}>
          © 2022 Copyright | <a className="text-reset fw-bold" href="https://web.facebook.com/SpecializedSystem">Specialized Systems for Electro-mechanics Co</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
