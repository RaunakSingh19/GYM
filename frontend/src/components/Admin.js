import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, Typography, CssBaseline, Avatar,
  Button, Stack
} from '@mui/material';
import {
  Dashboard, People, MonetizationOn, Settings, Logout, BarChart as ChartIcon
} from '@mui/icons-material';

import DashboardPage from './DashboardPage';
import LoginDetailsAdmin from './LoginDetailsAdmin';
import TransactionsPage from './TransactionsPage';
import SettingsPage from './SettingsPage';
import LoginPage from './Login';
import DashboardChart from './DashboardCharts';

import '../styles/adminStyles.css'; // Make sure this is imported

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box className="admin-container"> 
      <CssBaseline />

      {/* Sidebar */}
      <Box className="admin-sidebar">
        <div>
          <div className="logo">AdminPanel</div>
          <ul>
            <li onClick={() => navigate('/admin/purchseshow')}>
              <Dashboard /> Purchase Form
            </li>
            <li onClick={() => navigate('/admin/logindetails')}>
              <People /> Users
            </li>
            <li onClick={() => navigate('/admin/transaction')}>
              <MonetizationOn /> Payment
            </li>
            <li onClick={() => navigate('/admin/setting')}>
              <Settings /> Settings
            </li>
            <li onClick={() => navigate('/DashboardChart')}>
              <ChartIcon /> Dashboard Charts
            </li>
          </ul>
        </div>
        <ul>
          <li onClick={handleLogout}><Logout /> Logout</li>
        </ul>
      </Box>

      {/* Main Content */}
      <Box className="admin-main">
        <Box className="admin-header">
          <Typography variant="h5" fontWeight={600}>
            Welcome, Admin
          </Typography>
          <Box className="profile">
            <h3>Admin</h3>
            <Avatar src="https://via.placeholder.com/50" alt="Admin" />
          </Box>
        </Box>

        {/* Button Section */}
        <Box className="admin-button-container">
          <Button
            variant="contained"
            className="admin-button"
            startIcon={<Dashboard />}
            onClick={() => navigate('/admin/purchseshow')}
          >
            Purchase Form
          </Button>
          <Button
            variant="contained"
            className="admin-button"
            startIcon={<People />}
            onClick={() => navigate('/admin/logindetails')}
          >
            Users
          </Button>
          <Button
            variant="contained"
            className="admin-button"
            startIcon={<MonetizationOn />}
            onClick={() => navigate('/admin/transaction')}
          >
            Payment
          </Button>
          {/* <Button
            variant="contained"
            className="admin-button"
            startIcon={<Settings />}
            onClick={() => navigate('/admin/setting')}
          >
            Settings
          </Button> */}
          <Button
            variant="contained"
            className="admin-button"
            startIcon={<ChartIcon />}
            onClick={() => navigate('/DashboardChart')}
          >
            View Dashboard Charts
          </Button>
          <Button
            variant="contained"
            className="admin-button"
            startIcon={<ChartIcon />}
            onClick={() => navigate('/admin/adminFeedback')}
          >
            View Feedbacks and reviews
          </Button>
          {/* <Button
            variant="contained"
            className="admin-button"
            startIcon={<Logout />}
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button> */}
        </Box>

        {/* Page Routing Section */}
        <Box mt={4}>
          <Routes>
            <Route path="/purchseshow" element={<DashboardPage />} />
            <Route path="/logindetails" element={<LoginDetailsAdmin />} />
            <Route path="/transaction" element={<TransactionsPage />} />
            <Route path="/setting" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/DashboardChart" element={<DashboardChart />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
