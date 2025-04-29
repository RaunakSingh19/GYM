// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../styles/PaymentForm.css"; // Importing the CSS file

// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     cardName: "",
//     cardNumber: "",
//     expMonth: "",
//     expYear: "",
//     cvv: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to validate credit card expiry date
//   const validateExpiryDate = () => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth() + 1; // Months are zero-based
//     const expYear = parseInt(formData.expYear, 10);
//     const expMonth = new Date(Date.parse(formData.expMonth + " 1, 2024")).getMonth() + 1; // Convert month name to number

//     return expYear > currentYear || (expYear === currentYear && expMonth >= currentMonth);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateExpiryDate()) {
//       alert("Card expiry date must be in the future!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/payment", formData);

//       if (response.status === 201) {
//         alert("Payment Successful!");
//         setFormData({
//           fullName: "",
//           email: "",
//           address: "",
//           city: "",
//           state: "",
//           zip: "",
//           cardName: "",
//           cardNumber: "",
//           expMonth: "",
//           expYear: "",
//           cvv: "",
//         });
//         navigate("/payment-success");
//       } else {
//         alert(response.data.error || "Payment failed. Try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-box">
//         <h2 className="title">Checkout</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-sections">
//             {/* Billing Address Section */}
//             <div className="form-group">
//               <h3>Billing Address</h3>
//               <BillingInput name="fullName" label="Full Name" placeholder="John Doe" value={formData.fullName} onChange={handleChange} />
//               <BillingInput name="email" label="Email" type="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} />
//               <BillingInput name="address" label="Address" placeholder="Room - Street - Locality" value={formData.address} onChange={handleChange} />
//               <BillingInput name="city" label="City" placeholder="Mumbai" value={formData.city} onChange={handleChange} />

//               <div className="row">
//                 <BillingInput name="state" label="State" placeholder="India" value={formData.state} onChange={handleChange} />
//                 <BillingInput name="zip" label="Zip Code" placeholder="123456" value={formData.zip} onChange={handleChange} />
//               </div>
//             </div>

//             {/* Payment Section */}
//             <div className="form-group">
//               <h3>Payment</h3>

//               <label className="label">Cards Accepted:</label>
//               <div className="card-icons">
//                 {["paypal", "mastercard", "amex", "visa"].map((card) => (
//                   <img key={card} src={`https://upload.wikimedia.org/wikipedia/commons/${getCardImage(card)}`} alt={card} className="card-icon" />
//                 ))}
//               </div>

//               <BillingInput name="cardName" label="Name on Card" placeholder="Mr. John Doe" value={formData.cardName} onChange={handleChange} />
//               <BillingInput name="cardNumber" label="Credit Card Number" placeholder="1111-2222-3333-4444" value={formData.cardNumber} onChange={handleChange} />

//               <div className="row">
//                 <BillingInput name="expMonth" label="Exp Month" placeholder="January" value={formData.expMonth} onChange={handleChange} />
//                 <BillingInput name="expYear" label="Exp Year" placeholder="2025" value={formData.expYear} onChange={handleChange} />
//                 <BillingInput name="cvv" label="CVV" placeholder="123" value={formData.cvv} onChange={handleChange} />
//               </div>
//             </div>
//           </div>

//           {/* Checkout Button */}
//           <button type="submit" className="checkout-btn">Proceed to Checkout</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Reusable Input Component
// const BillingInput = ({ name, label, type = "text", placeholder, value, onChange }) => (
//   <div className="input-group">
//     <label className="label">{label}:</label>
//     <input type={type} name={name} className="input-field" placeholder={placeholder} value={value} onChange={onChange} required />
//   </div>
// );

// // Function to get payment card image paths
// const getCardImage = (card) => {
//   const images = {
//     paypal: "b/b5/PayPal.svg",
//     mastercard: "a/a4/Mastercard_2019_logo.svg",
//     amex: "2/2a/American_Express_logo.svg",
//     visa: "4/41/Visa_Logo.svg"
//   };
//   return images[card] || "";
// };

// export default PaymentForm;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentForm.css"; // Importing the CSS file

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const zipRegex = /^\d{6}$/;
    const cardRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;

    if (!formData.fullName.trim() || !nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Enter a valid full name (alphabets only).";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address cannot be empty.";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City cannot be empty.";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State cannot be empty.";
    }
    if (!zipRegex.test(formData.zip)) {
      newErrors.zip = "Zip Code must be exactly 6 digits.";
    }
    if (!cardRegex.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card Number must be exactly 16 digits.";
    }
    if (!cvvRegex.test(formData.cvv)) {
      newErrors.cvv = "CVV must be exactly 3 digits.";
    }

    // Validate expiry date
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const expYear = parseInt(formData.expYear, 10);
    const expMonth = new Date(Date.parse(formData.expMonth + " 1, 2024")).getMonth() + 1;

    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      newErrors.expiry = "Card expiry date must be in the future.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix errors before proceeding.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/payment", formData);

      if (response.status === 201) {
        alert("Payment Successful!");
        setFormData({
          fullName: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          cardName: "",
          cardNumber: "",
          expMonth: "",
          expYear: "",
          cvv: "",
        });
        navigate("/payment-success");
      } else {
        alert(response.data.error || "Payment failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="title">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-sections">
            {/* Billing Address Section */}
            <div className="form-group">
              <h3>Billing Address</h3>
              <BillingInput name="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
              <BillingInput name="email" label="Email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
              <BillingInput name="address" label="Address" value={formData.address} onChange={handleChange} error={errors.address} />
              <BillingInput name="city" label="City" value={formData.city} onChange={handleChange} error={errors.city} />

              <div className="row">
                <BillingInput name="state" label="State" value={formData.state} onChange={handleChange} error={errors.state} />
                <BillingInput name="zip" label="Zip Code" value={formData.zip} onChange={handleChange} error={errors.zip} />
              </div>
            </div>

            {/* Payment Section */}
            <div className="form-group">
              <h3>Payment</h3>

              <label className="label">Cards Accepted:</label>
              <div className="card-icons">
                {["paypal", "mastercard"].map((card) => (
                  <img key={card} src={`https://upload.wikimedia.org/wikipedia/commons/${getCardImage(card)}`} alt={card} className="card-icon" />
                ))}
              </div>

              <BillingInput name="cardName" label="Name on Card" value={formData.cardName} onChange={handleChange} />
              <BillingInput name="cardNumber" label="Credit Card Number" value={formData.cardNumber} onChange={handleChange} error={errors.cardNumber} />

              <div className="row">
                <BillingInput name="expMonth" label="Exp Month" value={formData.expMonth} onChange={handleChange} />
                <BillingInput name="expYear" label="Exp Year" value={formData.expYear} onChange={handleChange} error={errors.expiry} />
                <BillingInput name="cvv" label="CVV" value={formData.cvv} onChange={handleChange} error={errors.cvv} />
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button type="submit" className="checkout-btn">Proceed to Checkout</button>
        </form>
      </div>
    </div>
  );
};

// Reusable Input Component with Error Handling
const BillingInput = ({ name, label, type = "text", value, onChange, error }) => (
  <div className="input-group">
    <label className="label">{label}:</label>
    <input type={type} name={name} className="input-field" value={value} onChange={onChange} required />
    {error && <span className="error-message">{error}</span>}
  </div>
);

// Function to get payment card image paths
const getCardImage = (card) => {
  const images = {
    paypal: "b/b5/PayPal.svg",
    mastercard: "a/a4/Mastercard_2019_logo.svg",
  };
  return images[card] || "";
};

export default PaymentForm;
