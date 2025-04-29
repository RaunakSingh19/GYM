import React from "react";
import "../styles/ServiceTable.css"; // Ensure you create this CSS file for styling
import servicesData from "./servicesData"; // Import services data

const ServicesTable = () => {
  return (
    <div className="services-table-container">
      <h2 className="table-title">Exercise Facilities & Services</h2>
      <table className="services-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Days Available</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {servicesData.map((service) => (
            <tr key={service.id}>
              <td>
                <img src={service.image} alt={service.name} className="service-image" />
              </td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.days}</td>
              <td>{service.time}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
