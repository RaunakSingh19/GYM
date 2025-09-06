// src/components/FeedbackList.js
import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Button, 
  TextField, 
  InputAdornment, 
  CircularProgress, 
  Alert, 
  Box 
} from '@mui/material';
import { Person, LocationOn, Message, Phone, Edit, Delete, Search } from '@mui/icons-material';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    feedback: '',
    phone: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/feedback`);
        setFeedbacks(response.data);
      } catch (err) {
        setError('Failed to fetch feedback');
        console.error('Error fetching feedback:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleEditClick = (feedback) => {
    setEditing(feedback._id);
    setFormData({
      name: feedback.name,
      location: feedback.location,
      feedback: feedback.feedback,
      phone: feedback.phone
    });
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/feedback/${id}`);
      setFeedbacks(feedbacks.filter(fb => fb._id !== id));
    } catch (err) {
      setError('Failed to delete feedback');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_BASE_URL}/api/feedback/${editing}`, formData);
      setFeedbacks(feedbacks.map(fb => fb._id === editing ? response.data : fb));
      setEditing(null);
      setFormData({ name: '', location: '', feedback: '', phone: '' });
    } catch (err) {
      setError('Failed to update feedback');
    }
  };

  // Filter feedbacks based on the search query
  const filteredFeedbacks = feedbacks.filter(feedback =>
    feedback.name.toLowerCase().includes(searchQuery) ||
    feedback.location.toLowerCase().includes(searchQuery) ||
    feedback.feedback.toLowerCase().includes(searchQuery)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4, marginTop: "80px" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          Feedbacks from our Users
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <TextField
            label="Search Feedback"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {loading ? (
          <CircularProgress size={50} sx={{ display: 'block', margin: 'auto' }} />
        ) : (
          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 650 }} aria-label="feedback table">
              <TableHead>
                <TableRow>
                  <TableCell>Feedback From</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Feedback</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFeedbacks.map((feedback) => (
                  <TableRow key={feedback._id}>
                    <TableCell>{feedback.name}</TableCell>
                    <TableCell>{feedback.location}</TableCell>
                    <TableCell>{feedback.phone}</TableCell>
                    <TableCell>{feedback.feedback}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        sx={{ mr: 1 }}
                        startIcon={<Edit />}
                        onClick={() => handleEditClick(feedback)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        startIcon={<Delete />}
                        onClick={() => handleDeleteClick(feedback._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {editing && (
          <Box component="form" onSubmit={handleSubmitEdit} sx={{ mt: 4 }}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Your Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Your Feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              margin="normal"
              required
              multiline
              rows={4}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Message />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 3 }}
            >
              Submit Edit
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default FeedbackList;
