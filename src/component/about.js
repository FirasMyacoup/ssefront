import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/about.css'; // Import your CSS file for styling
import electroMechanicsImage from '../assets/SSEM.jpg';



const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
        <div className="about-intro-text">
          <h1>About Us</h1>
          <p>
          At Specialized Systems For Electro-Mechanic[SSEM], we are your trusted partner in the world of electro-mechanical engineering and solutions. With a legacy that spans 10 years, we have solidified our reputation as industry pioneers, committed to excellence, innovation, and precision.

Our journey began with a vision – a vision to redefine the standards of electro-mechanical engineering, one project at a time. Today, we stand tall as a Jordanian-based company, representing elite international suppliers, and offering top-tier products and services across the realms of electrical and mechanical installations, supplies, and engineering expertise.


          </p>
        </div>
        <div className="about-intro-image">
          <img src={electroMechanicsImage} alt="Electro-Mechanics" />
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-text">
          <h2>Our Values</h2>
          <p>
            Our core values of integrity, collaboration, and continuous improvement guide in everything we do. We believe in creating solutions that stand the test of time and contribute to the advancement of industries,
             Our rich history is steeped in a dedication to craftsmanship, a commitment to delivering exceptional solutions, and an unwavering focus on customer satisfaction. Over the years, we have evolved, adapted, and grown, but our core values remain unchanged.


          </p>
        
        </div>
      </section>

  

      <section className="about-contact">
        <div className="about-contact-text">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to learn more about our services? Feel free to reach out to our team.
          </p>
          <Link to="/contact" className="contact-button">
            <span className="button-text">Get in Touch</span>
            <span className="button-icon">➜</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
