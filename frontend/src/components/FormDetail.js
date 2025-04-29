import React, { useEffect, useState } from "react";
import axios from "axios";

const FormDataPage = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/registrations");
        setRegistrations(response.data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Service Plan</th>
            <th>Price</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg._id}>
              <td>{reg.name}</td>
              <td>{reg.phone}</td>
              <td>{reg.email}</td>
              <td>{reg.address}</td>
              <td>{reg.servicePlan}</td>
              <td>${reg.price}</td>
              <td>{new Date(reg.expiryTime).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDataPage;
