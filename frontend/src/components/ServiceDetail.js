import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "./servicesData"; // Import service data
import "../styles/ServiceDetail.css"; // Import CSS
import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className="service-detail-container">
      {/* Left Side - Image */}
      <div className="service-image-container">
        <img src={service.image} alt={service.name} className="service-image" />
      </div>

      {/* Right Side - Details */}
      <div className="service-info">
        <h1 className="service-title">{service.name}</h1>
        <p className="service-description">{service.description}</p>
        <hr />

        <p className="service-detail">
          <FaCalendarAlt /> <strong>Days:</strong> {service.days}
        </p>
        <p className="service-detail">
          <FaClock /> <strong>Duration:</strong> {service.time}
        </p>
        <p className="service-detail price">
          <FaTag /> <strong>Price:</strong> ₹{service.price}
        </p>

        {/* Buttons */}
        <div className="button-group">
          <Link to="/form" className="join-now-button">Join Now</Link>
          <Link to="/services" className="back-button">Back to Services</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
