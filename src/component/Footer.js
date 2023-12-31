import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebookSquare } from 'react-icons/fa'; // Import the required icons
import '../CSS/footer.css'; // Import your CSS file for styling

const encouragingSentences = [
  "Stay motivated and keep pushing forward!",
  "Believe in yourself and your abilities.",
  "Every challenge is an opportunity for growth.",
  "You've got this!",
  "Success is a journey, not a destination.",
  "Keep your dreams alive!",
  // Add more encouraging sentences as needed
];
function getRandomSentence() {
  const randomIndex = Math.floor(Math.random() * encouragingSentences.length);
  return encouragingSentences[randomIndex];
}


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Gallery">images gallery</Link>
          <Link to="/Market">our shop</Link>

          
        </div>

        <p>{getRandomSentence()}</p>
        <div className="footer-contact">
  <h3>Contact Us</h3>
  <p><FaEnvelope /> Email: commercial@ssem.co</p>
  <p><FaPhone /> Phone: +962-6-4722033</p>
  <div className="location-container">
  <p><a href="https://www.google.com/maps/place/Specialized+Systems+For+Electro-Mechanics+Co+(SSEMco)/@32.0014453,35.7841787,17z/data=!3m1!4b1!4m6!3m5!1s0x151ca1cd397f6a01:0xb6b2c96be9293fc!8m2!3d32.0014408!4d35.7816038!16s%2Fg%2F12qgwv_7f?entry=ttu" target="_blank" rel="noopener noreferrer"><FaMapMarker /> Location:</a></p>
    <p className="location-text">Fuhies - King Abdullah II St./Laith Smirat & Partner Complex</p>

    <p>
    <a href="https://web.facebook.com/SpecializedSystem" target="_blank" rel="noopener noreferrer">
      <FaFacebookSquare /> Facebook Page
    </a>
  </p>
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
