import React from "react";
import { Link } from "react-router-dom";
import servicesData from "./servicesData"; // Import services data
import "../styles/Services.css"; // Ensure you have updated CSS

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Explore Our Services</h1>
      <p className="services-subtitle">
        Discover a variety of fitness programs tailored to your needs. Join us and start your journey today!  
      </p>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image-container">
              <img src={service.image} alt={service.name} className="service-image" />
            </div>
            <div className="service-content">
              <h2>{service.name}</h2>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <p><strong>📅 Days:</strong> {service.days}</p>
                <p><strong>⏳ Duration:</strong> {service.time}</p>
                <p><strong>💰 Price:</strong> {service.price}</p>
              </div>
              <Link to={`/services/${service.id}`} className="detail-button">View Details</Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="join-button-container">
        <button className="join-now-button">Join Now</button>
      </div> */}
    </div>
  );
};

export default Services;