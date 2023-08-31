import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/about.css'; // Import your CSS file for styling
import electroMechanicsImage from '../assets/electro-mechanics-image.jpg';
import TeamMemberCard from '../component/ TeamMemberCard '; // Import the TeamMemberCard component
import firas from '../assets/firas.jpg'; // Import the team member images
import muaid from '../assets/logo.png';


const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
        <div className="about-intro-text">
          <h1>About Us</h1>
          <p>
            At Specialized Systems for Electro-Mechanics, we're driven by a passion for innovation and excellence in the field of electro-mechanical engineering.
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
            Our core values of integrity, collaboration, and continuous improvement guide everything we do. We believe in creating solutions that stand the test of time and contribute to the advancement of industries.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team-text">
          <h2>Our Team</h2>
          <p>
            Behind our success is a dedicated team of engineers and professionals who are passionate about pushing boundaries and finding innovative solutions. Meet the faces driving our mission forward.
          </p>
        </div>
        {/* examples */}
        <div className="team-member-cards">
          <TeamMemberCard name="firas" title="software" imageSrc={firas} Url="https://www.linkedin.com/in/firas-yacoup-0062a3204/"/>
          <TeamMemberCard name="muaid" title="technical engineer" imageSrc={muaid} Url="https://web.facebook.com/muiad.yacoub" />
         
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
