import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";
import { Box, Typography, Grid, Paper } from "@mui/material";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#d44f4f"];

const DashboardCharts = () => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [transactionsRes, purchasesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/transactions"),
        axios.get("http://localhost:5000/api/registrations/all"),
      ]);

      const transactions = transactionsRes.data;
      const purchases = purchasesRes.data;

      const merged = purchases.map((purchase) => {
        const match = transactions.find((txn) => txn.email === purchase.email);
        return {
          ...purchase,
          price: parseFloat(purchase.price),
          state: match?.state || "Unknown",
          purchaseMonth: new Date(purchase.purchaseTime).toLocaleString("default", { month: "short" }),
        };
      });

      setMergedData(merged);
    };

    fetchData();
  }, []);

  // 🟦 Revenue by Month (Line Chart)
  const revenueByMonth = Object.values(
    mergedData.reduce((acc, item) => {
      const month = item.purchaseMonth;
      acc[month] = acc[month] || { month, revenue: 0 };
      acc[month].revenue += item.price;
      return acc;
    }, {})
  );

  // 🟩 Plan Popularity (Pie Chart)
  const planDistribution = Object.values(
    mergedData.reduce((acc, item) => {
      const plan = item.servicePlan;
      acc[plan] = acc[plan] || { name: plan, value: 0 };
      acc[plan].value += 1;
      return acc;
    }, {})
  );

  // 🟨 Users by State (Bar Chart)
  const usersByState = Object.values(
    mergedData.reduce((acc, item) => {
      const state = item.state;
      acc[state] = acc[state] || { state, count: 0 };
      acc[state].count += 1;
      return acc;
    }, {})
  );

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        BI Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Revenue Trend */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>Revenue Over Time</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueByMonth}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Plan Popularity */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>Plan Popularity</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={planDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {planDistribution.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Users by State */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>Users by State</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usersByState}>
                <XAxis dataKey="state" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="count" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardCharts;
