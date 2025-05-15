// src/components/AdminFeedback.js
import React, { useState, useEffect } from 'react';
import { 
  AppBar,
  Toolbar,
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Search, Refresh, LocationOn, Dashboard } from '@mui/icons-material';
import axios from 'axios';
import dayjs from 'dayjs';

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    name: '',
    location: ''
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.name) params.append('name', search.name);
      if (search.location) params.append('location', search.location);
      
      const response = await axios.get(`/api/feedback?${params.toString()}`);
      setFeedbacks(response.data);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchFeedbacks();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Modern AppBar */}
      <AppBar position="static" elevation={0} sx={{ 
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Dashboard sx={{ mr: 2, color: theme.palette.primary.main }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Feedback Dashboard
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            color="primary"
            startIcon={<Refresh />}
            onClick={fetchFeedbacks}
            size={isMobile ? 'small' : 'medium'}
          >
            Refresh
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ p: 3, flex: 1 }}>
        {/* Search Section */}
        <Paper elevation={0} sx={{ 
          p: 3, 
          mb: 3, 
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`
        }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Search Feedback
          </Typography>
          
          <Box 
            component="form" 
            onSubmit={handleSearchSubmit} 
            sx={{ 
              display: 'flex', 
              gap: 2,
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'stretch' : 'center'
            }}
          >
            <TextField
              fullWidth
              label="Search by Name"
              name="name"
              value={search.name}
              onChange={handleSearchChange}
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ flex: 2 }}
            />
            
            <TextField
              fullWidth
              label="Search by Location"
              name="location"
              value={search.location}
              onChange={handleSearchChange}
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
              sx={{ flex: 2 }}
            />
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ 
                flex: 1,
                height: '56px', // Match TextField height
                minWidth: isMobile ? '100%' : 'auto'
              }}
            >
              Search
            </Button>
          </Box>
        </Paper>

        {/* Feedback Table */}
        <Paper elevation={0} sx={{ 
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
          overflow: 'hidden'
        }}>
          <TableContainer>
            {loading ? (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: 300 
              }}>
                <CircularProgress />
              </Box>
            ) : (
              <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Feedback</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedbacks.length > 0 ? (
                    feedbacks.map((feedback) => (
                      <TableRow 
                        key={feedback._id}
                        hover
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>{feedback.name}</TableCell>
                        <TableCell>{feedback.phone}</TableCell>
                        <TableCell>{feedback.location}</TableCell>
                        <TableCell sx={{ maxWidth: 300 }}>
                          <Box sx={{ 
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            {feedback.feedback}
                          </Box>
                        </TableCell>
                        <TableCell>
                          {dayjs(feedback.createdAt).format('DD/MM/YYYY hh:mm A')}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                        <Typography variant="body1" color="textSecondary">
                          No feedback records found
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminFeedback;