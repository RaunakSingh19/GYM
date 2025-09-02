import React, { useEffect, useState } from "react";
import "../styles/Membership.css";

const Membership = () => {
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [duration, setDuration] = useState("1month");

  const durations = {
    "1month": "1 Month",
    "6month": "6 Months",
    "12month": "1 Year",
  };

  const basePrices = {
    "1month": [20, 25, 30],
    "6month": [110, 140, 165],
    "12month": [200, 260, 310],
  };

  const planNames = ["Silver Membership", "Gold Membership", "Platinum Membership"];
  const planBenefits = [
    [
      "✅ Access to gym facilities",
      "✅ Free locker service",
      "✅ Access to group fitness classes (limited)",
      "✅ One free personal training session per month",
      "✅ 10% discount on gym merchandise",
    ],
    [
      "✅ All Silver Membership benefits",
      "✅ Unlimited access to group fitness classes",
      "✅ Free access to sauna and steam room",
      "✅ Two free personal training sessions per month",
      "✅ 15% discount on gym merchandise",
      "✅ Free diet and workout consultation",
    ],
    [
      "🔥 All Gold Membership benefits",
      "🔥 24/7 gym access",
      "🔥 Priority booking for fitness classes",
      "🔥 Four free personal training sessions per month",
      "🔥 Access to VIP lounge & recovery zone",
      "🔥 Free smoothie or protein shake every visit",
      "🔥 20% discount on all supplements & gear",
    ],
  ];

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        // Detect user location & currency
        const geoRes = await fetch("https://ipapi.co/json/");
        const geoData = await geoRes.json();
        const userCurrency = geoData.currency || "USD";
        setCurrency(userCurrency);

        // Get exchange rate from USD
        const rateRes = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const rateData = await rateRes.json();
        const rate = rateData.rates[userCurrency] || 1;
        setExchangeRate(rate);
      } catch (error) {
        console.error("Currency detection failed:", error);
        setCurrency("USD");
        setExchangeRate(1);
      }
    };

    fetchCurrencyData();
  }, []);

  const getPrice = (usdPrice) => {
    const price = usdPrice * exchangeRate;
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="membership-container" style={{ marginTop: "80px" }}>
      <h2 className="membership-title">Membership Plans</h2>

      {/* Duration Selector */}
      <div className="duration-toggle">
        {Object.keys(durations).map((key) => (
          <button
            key={key}
            className={`duration-button ${duration === key ? "active" : ""}`}
            onClick={() => setDuration(key)}
          >
            {durations[key]}
          </button>
        ))}
      </div>

      {/* Membership Grid */}
      <div className="membership-grid">
        {planNames.map((name, index) => (
          <div key={index} className="membership-card">
            <h3>{name}</h3>
            <p className="membership-price">{getPrice(basePrices[duration][index])}</p>
            <p className="membership-duration">{durations[duration]}</p>
            <ul className="benefits-list">
              {planBenefits[index].map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="join-button" onClick={() => window.location.href = "/notwritten"}>
        Join Now
      </button>
    </div>
  );
};

export default Membership;
