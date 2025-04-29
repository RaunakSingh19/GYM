import React from "react";
import { Link } from "react-router-dom";
import "../styles/Facilities.css";

import poolImage from "../assets/images/pool.jpg";
import spaImage from "../assets/images/Spa.jpg";
import lockerImage from "../assets/images/yoga.jpg";
import basketballImage from "../assets/images/banner.png";

const Facilities = () => {
  return (
    <div className="facilities-wrapper">
      {/* Hero Section */}
      <section className="facilities-hero">
        <div className="overlay">
          <h1>Welcome to PowerLiftZone</h1>
          <p>Premium Fitness, Wellness & Relaxation</p>
          <Link to="/services" className="hero-button">Join Now</Link>
        </div>
      </section>

      {/* Facilities Info */}
      <section className="facility-section">
        <div className="facility-item">
          <img src={poolImage} alt="Lap Pool" />
          <div className="facility-text">
            <h2>Olympic Lap Pool</h2>
            <p>
              Dive into excellence with our Olympic-sized lap pool – ideal for stamina training,
              rehabilitation, or just a cool, refreshing session. Temperature controlled and
              professionally maintained for peak performance.
            </p>
          </div>
        </div>

        <div className="facility-item reverse">
          <div className="facility-text">
            <h2>Luxury Spa & Wellness</h2>
            <p>
              Recharge with soothing spa experiences. Our wellness zone includes a steam room,
              sauna, and professional massages to help you rejuvenate after tough workouts or long days.
            </p>
          </div>
          <img src={spaImage} alt="Spa" />
        </div>
      </section>

      {/* Members Gallery */}
      <section className="members-area">
        <h2>Exclusive Member Perks</h2>
        <p>Access stylish lounges, advanced locker rooms, and recreational spaces</p>
        <div className="members-gallery">
          <img src={spaImage} alt="Spa" />
          <img src={lockerImage} alt="Locker" />
          <img src={basketballImage} alt="Basketball" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="facilities-cta">
        <h2>Ready to Transform?</h2>
        <h1>Join our fitness family today</h1>

        {/* <Link to="/form" className="cta-button">Get Started</Link> */}
      </section>
      
    </div>
    
  );
  
};

export default Facilities;
