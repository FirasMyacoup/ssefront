import React from 'react';
import '../CSS/HomePage.css';
import '../component/HomePageCard'
import { Link } from 'react-router-dom';
import companyImage from '../assets/homepage.jpg';





const HomePage = () => {
  return (
    <div className="main-container">
      <h1>Specialized Systems For Electro-Mechanic Company W.L.L. (SSEM)</h1>
      <div className="introduction">
        {/* <h2>Introduction:</h2> */}
        <p><strong>Company History</strong></p>
        <p>Specialized Systems For Electro-Mechanic Company W.L.L. (SSEM) is a Jordanian based company representing elite international suppliers and providing top-notch specialized products and services in the fields of electrical and mechanical installations and supplies and Engineering services.</p>
        <p><strong>What the company does</strong></p>
        <p>Our field of activities are delivering Electrical and Mechanical engineering solution for Jordanian markets and Middle East, With many years of experience, our engineers and strategic relationships with a number of specialist service providers, and international supplier, we aim to provide the best materials and to run successful projects for Jordanian and MENA markets, and leading developers and operators</p>
      </div>
      <img src={companyImage} alt="Company Image" className="company-image" />

      <div className="strategy">
        <h2>Our Strategies</h2>
        <div className="strategy-item">
          <h3>Vision statement</h3>
          <p>To be the leaders in providing top technological comprehensive solution in the field of electrical and mechanical supplies to best serve our customers in an efficient and effective manner.</p>
        </div>
        <div className="strategy-item">
          <h3>Mission statement</h3>
          <p>Best serve the Jordanian and MENA markets, provide exceptional service experience. Provide unique engineering solutions tailor made to satisfy customer needs.</p>
        </div>
        <div className="strategy-item">
          <h3>Business goals & objectives</h3>
          <p>Expand in the Jordanian market and Middle East. Represent reputable multi-brands products. Specialize in sophisticated, and niche markets and special advanced technological equipment’s. Top engineering service providers.</p>
        </div>
        <div className="strategy-item">
          <h3>Business strategy</h3>
          <p>Organic growth in the market, not only following the market, but creating demand.</p>
        </div>

        <div className="button-container">
        <Link to="/projects">
          <button className="button">View Projects</button>
        </Link>
      </div>
        
      </div>

      
    </div>
  );
};

export default HomePage;
