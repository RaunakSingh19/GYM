import React, { useEffect, useState } from "react";
import { 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  Box
} from "@mui/material";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/transactions");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter(transaction => {
    const searchLower = searchTerm.toLowerCase();
    return (
      transaction.fullName.toLowerCase().includes(searchLower) ||
      transaction.email.toLowerCase().includes(searchLower) ||
      transaction.city.toLowerCase().includes(searchLower) ||
      transaction.cardNumber.slice(-4).includes(searchTerm)
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar with Search */}
      <AppBar position="static" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Transactions
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search by name, email, city, or card"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'white',
                borderRadius: 1,
              }
            }}
            sx={{
              width: 300,
            }}
          />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="body1" gutterBottom>
          Here you can view all transactions.
        </Typography>

        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Full Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Address</strong></TableCell>
                <TableCell><strong>City</strong></TableCell>
                <TableCell><strong>State</strong></TableCell>
                <TableCell><strong>Zip</strong></TableCell>
                <TableCell><strong>Card Name</strong></TableCell>
                <TableCell><strong>Card Number</strong></TableCell>
                <TableCell><strong>Expiry Date</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <TableRow key={transaction._id} hover>
                    <TableCell>{transaction.fullName}</TableCell>
                    <TableCell>{transaction.email}</TableCell>
                    <TableCell>{transaction.address}</TableCell>
                    <TableCell>{transaction.city}</TableCell>
                    <TableCell>{transaction.state}</TableCell>
                    <TableCell>{transaction.zip}</TableCell>
                    <TableCell>{transaction.cardName}</TableCell>
                    <TableCell>**** **** **** {transaction.cardNumber.slice(-4)}</TableCell>
                    <TableCell>{transaction.expMonth}/{transaction.expYear}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} sx={{ textAlign: "center" }}>
                    {transactions.length === 0 ? "Loading transactions..." : "No matching transactions found."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Transactions;