import React from "react";
import "../styles/Membership.css";
import ServicesTable from "./serviceTable"; // Import the services table component

const Membership = () => {
  const plans = [
    { name: "Silver Membership", price: 20, duration: "Valid for one month", benefits: ["✅ Access to gym facilities",
      "✅ Free locker service",
      "✅ Access to group fitness classes (limited)",
      "✅ One free personal training session per month",
      "✅ 10% discount on gym merchandise"] 
    },
    { name: "Gold Membership", price: 25, duration: "Valid for one months", benefits: ["✅ All Silver Membership benefits",
      "✅ Unlimited access to group fitness classes",
      "✅ Free access to sauna and steam room",
      "✅ Two free personal training sessions per month",
      "✅ 15% discount on gym merchandise",
      "✅ Free diet and workout consultation"]
    },
    { name: "Platinum Membership", price: 30, duration: "Valid for one month", benefits: ["🔥 All Gold Membership benefits",
      "🔥 24/7 gym access",
      "🔥 Priority booking for fitness classes",
      "🔥 Four free personal training sessions per month",
      "🔥 Access to VIP lounge & recovery zone",
      "🔥 Free smoothie or protein shake every visit",
      "🔥 20% discount on all supplements & gear"]
    }
  ];

  return (
    <div className="membership-container">
      <h2 className="membership-title">Membership Plans</h2>
      <div className="membership-grid">
        {plans.map((plan, index) => (
          <div key={index} className="membership-card">
            <h3>{plan.name}</h3>
            <p className="membership-price">${plan.price}</p>
            <p className="membership-duration">{plan.duration}</p>
            <ul className="benefits-list">
              {plan.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Membership Form Button */}
      <button className="join-button" onClick={() => window.location.href = "/services"}>Join Now</button>

      {/* Embedded Services Table */}
      <ServicesTable />
    </div>
  );
};

export default Membership;
