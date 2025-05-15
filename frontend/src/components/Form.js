

import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, MenuItem, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/form.css";

const Form = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    servicePlan: "",
    price: "",
    purchaseTime: "",
    expiryTime: "",
  });

  const servicePlans = {
    "1 Month-Gym": 20,
  "3 Months-Gym": 20 * 3,
  "6 Months-Gym": 20 * 6,
  "1 Year-Gym": 20 * 12,

  "1 Month-Cardio": 20,
  "3 Months-Cardio": 20 * 3,
  "6 Months-Cardio": 20 * 6,
  "1 Year-Cardio": 20 * 12,

  "1 Month-Yoga": 25,
  "3 Months-Yoga": 25 * 3,
  "6 Months-Yoga": 25 * 6,
  "1 Year-Yoga": 25 * 12,

  "1 Month-Swimming": 30,
  "3 Months-Swimming": 30 * 3,
  "6 Months-Swimming": 30 * 6,
  "1 Year-Swimming": 30 * 12,

  "1 Month-Corporate Training": 30,
  "3 Months-Corporate Training": 30 * 3,
  "6 Months-Corporate Training": 30 * 6,
  "1 Year-Corporate Training": 30 * 12,

  "1 Month-Strength Training": 25,
  "3 Months-Strength Training": 25 * 3,
  "6 Months-Strength Training": 25 * 6,
  "1 Year-Strength Training": 25 * 12,

  "1 Month-Karate Program": 20,
  "3 Months-Karate Program": 20 * 3,
  "6 Months-Karate Program": 20 * 6,
  "1 Year-Karate Program": 20 * 12,

  "1 Month-Personal Yoga": 25,
  "3 Months-Personal Yoga": 25 * 3,
  "6 Months-Personal Yoga": 25 * 6,
  "1 Year-Personal Yoga": 25 * 12,

  "1 Month-Group Gym": 20,
  "3 Months-Group Gym": 20 * 3,
  "6 Months-Group Gym": 20 * 6,
  "1 Year-Group Gym": 20 * 12,

  "1 Month-Youth Program": 20,
  "3 Months-Youth Program": 20 * 3,
  "6 Months-Youth Program": 20 * 6,
  "1 Year-Youth Program": 20 * 12
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "servicePlan") {
      const months = {
        "1 Month-Gym": 20,
  "3 Months-Gym": 20 * 3,
  "6 Months-Gym": 20 * 6,
  "1 Year-Gym": 20 * 12,

  "1 Month-Cardio": 20,
  "3 Months-Cardio": 20 * 3,
  "6 Months-Cardio": 20 * 6,
  "1 Year-Cardio": 20 * 12,

  "1 Month-Yoga": 25,
  "3 Months-Yoga": 25 * 3,
  "6 Months-Yoga": 25 * 6,
  "1 Year-Yoga": 25 * 12,

  "1 Month-Swimming": 30,
  "3 Months-Swimming": 30 * 3,
  "6 Months-Swimming": 30 * 6,
  "1 Year-Swimming": 30 * 12,

  "1 Month-Corporate Training": 30,
  "3 Months-Corporate Training": 30 * 3,
  "6 Months-Corporate Training": 30 * 6,
  "1 Year-Corporate Training": 30 * 12,

  "1 Month-Strength Training": 25,
  "3 Months-Strength Training": 25 * 3,
  "6 Months-Strength Training": 25 * 6,
  "1 Year-Strength Training": 25 * 12,

  "1 Month-Karate Program": 20,
  "3 Months-Karate Program": 20 * 3,
  "6 Months-Karate Program": 20 * 6,
  "1 Year-Karate Program": 20 * 12,

  "1 Month-Personal Yoga": 25,
  "3 Months-Personal Yoga": 25 * 3,
  "6 Months-Personal Yoga": 25 * 6,
  "1 Year-Personal Yoga": 25 * 12,

  "1 Month-Group Gym": 20,
  "3 Months-Group Gym": 20 * 3,
  "6 Months-Group Gym": 20 * 6,
  "1 Year-Group Gym": 20 * 12,

  "1 Month-Youth Program": 20,
  "3 Months-Youth Program": 20 * 3,
  "6 Months-Youth Program": 20 * 6,
  "1 Year-Youth Program": 20 * 12
      }[value];
      setFormData({
        ...formData,
        servicePlan: value,
        price: servicePlans[value],
        purchaseTime: new Date().toISOString(),
        expiryTime: new Date(new Date().setMonth(new Date().getMonth() + months)).toISOString(),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://gym-3l8v.onrender.com/api/register", formData);
      
      // ✅ Redirect to payment page AFTER successful registration
      navigate("/payment", { state: { formData } });

      // Clear form after sending data
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        servicePlan: "",
        price: "",
        purchaseTime: "",
        expiryTime: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Registration Failed!");
    }
  };

  return (
    <Box className="form-container">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Service Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Choose a Plan" name="servicePlan" value={formData.servicePlan} onChange={handleChange} select fullWidth margin="normal" required>
            {Object.keys(servicePlans).map((plan) => (
              <MenuItem key={plan} value={plan}>
                {plan} - ${servicePlans[plan]}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Price" name="price" value={formData.price} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Form;
