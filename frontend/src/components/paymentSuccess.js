import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../styles/paymentSuccess.css"; // You can override styles as needed

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [registration, setRegistration] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceipt = async () => {
      try {
        const regRes = await axios.get("https://gym-3l8v.onrender.com/api/registrations/all");
        const transRes = await axios.get("https://gym-3l8v.onrender.com/api/transactions");

        // Assuming most recent transaction is the latest one
        const latestReg = regRes.data[regRes.data.length - 1];
        const latestTrans = transRes.data[transRes.data.length - 1];

        setRegistration(latestReg);
        setTransaction(latestTrans);
      } catch (err) {
        console.error("Error fetching receipt data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReceipt();
  }, []);

  if (loading) {
    return (
      <Box className="success-container" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="success-container" sx={{ backgroundImage: "linear-gradient(135deg, #e0f7fa 0%, #fff3e0 100%)", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
          <Box textAlign="center" mb={3}>
            <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Payment Successful 🎉
            </Typography>
            <Typography variant="subtitle1">Your order has been placed successfully.</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>Receipt</Typography>

          <Box sx={{ lineHeight: 1.8 }}>
            <Typography><strong>Name:</strong> {transaction.fullName}</Typography>
            <Typography><strong>Address:</strong> {transaction.address}, {transaction.city}, {transaction.state}, {transaction.zip}</Typography>
            <Typography><strong>Card Name:</strong> {transaction.cardName}</Typography>
            <Typography><strong>Card Number:</strong> **** **** **** {transaction.cardNumber.slice(-4)}</Typography>
            <Typography><strong>Expiry:</strong> {transaction.expMonth}/{transaction.expYear}</Typography>
            <Typography><strong>Email:</strong> {registration.email}</Typography>
            <Typography><strong>Phone:</strong> {registration.phone}</Typography>
            <Typography><strong>Service Plan:</strong> {registration.servicePlan}</Typography>
            <Typography><strong>Purchased Facility:</strong> {registration.service}</Typography>
            <Typography><strong>Price:</strong> ${registration.price}</Typography>
            <Typography><strong>Purchase Time:</strong> {new Date(registration.purchaseTime).toLocaleString()}</Typography>
            <Typography><strong>Expiry Time:</strong> {new Date(registration.expiryTime).toLocaleString()}</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate("/home")}
            sx={{ mt: 2, borderRadius: 2 }}
          >
            Go to Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default PaymentSuccess;
