import React, { useState } from "react";
import "../styles/BMIcalculator.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [categoryClass, setCategoryClass] = useState("");

  const calculateBMI = () => {
    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
      alert("Please enter valid values!");
      return;
    }

    let heightInMeters = height / 100;
    let bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory("Underweight");
      setCategoryClass("underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Healthy");
      setCategoryClass("healthy");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
      setCategoryClass("overweight");
    } else {
      setCategory("Obese");
      setCategoryClass("obese");
    }
  };

  return (
    <div className="bmi-app">
      <div className="bmi-container">
        <div className="bmi-header">
          <h1>BMI Calculator</h1>
          <p>Check your body mass index</p>
        </div>

        <div className="bmi-inputs">
          <div className="input-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </div>
          
          <div className="input-group">
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </div>
        </div>

        <button className="calculate-btn" onClick={calculateBMI}>
          Calculate BMI
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        {bmi && (
          <div className={`bmi-result ${categoryClass}`}>
            <div className="bmi-value">
              <h3>Your BMI</h3>
              <h2>{bmi}</h2>
            </div>
            <div className="bmi-category">
              <h3>Category</h3>
              <p>{category}</p>
            </div>
            <div className="bmi-bar">
              <div className={`bar-fill ${categoryClass}`} style={{ width: `${Math.min(100, (bmi/40)*100)}%` }}></div>
            </div>
            <div className="bmi-scale">
              <span>Underweight</span>
              <span>Healthy</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;