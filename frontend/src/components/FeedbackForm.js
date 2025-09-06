// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   Button, 
//   Container, 
//   Paper, 
//   InputAdornment,
//   CircularProgress,
//   Alert
// } from '@mui/material';
// import { Person, LocationOn, Message, Phone } from '@mui/icons-material';
// import axios from 'axios';
// // import FeedbackCards from './FeedbackCards';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     feedback: '',
//     phone: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     console.log('Form Data:', formData);  // Debug log to check form data

//     try {
//       // Use localhost for now
//       await axios.post('http://localhost:5000/api/feedback','https://gym-itip.onrender.com/api/feedback', formData);
//       setSuccess(true);
//       setFormData({ name: '', location: '', feedback: '', phone: '' });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to submit feedback');
//       console.error('Error Response:', err.response);  // Debug log for error
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ py: 4, marginTop: "80px" }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
//         <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
//           Share Your Feedback
//         </Typography>
        
//         {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
//         {success && <Alert severity="success" sx={{ mb: 3 }}>Thank you for your feedback!</Alert>}

//         <Box component="form" onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Your Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             margin="normal"
//             required
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Person />
//                 </InputAdornment>
//               ),
//             }}
//           />
          
//           <TextField
//             fullWidth
//             label="Your Location"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             margin="normal"
//             required
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LocationOn />
//                 </InputAdornment>
//               ),
//             }}
//           />
          
//           <TextField
//             fullWidth
//             label="Phone Number"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             margin="normal"
//             required
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Phone />
//                 </InputAdornment>
//               ),
//             }}
//           />
          
//           <TextField
//             fullWidth
//             label="Your Feedback"
//             name="feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//             margin="normal"
//             required
//             multiline
//             rows={4}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Message />
//                 </InputAdornment>
//               ),
//             }}
//           />
          
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             type="submit"
//             disabled={loading}
//             sx={{ mt: 3, py: 1.5 }}
//           >
//             {loading ? <CircularProgress size={24} /> : 'Submit Feedback'}
//           </Button>
//         </Box>
//       </Paper>
//     {/* <FeedbackCards/> */}
//     </Container>
    
//   );
  
// };

// export default FeedbackForm;
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  Paper, 
  InputAdornment,
  CircularProgress,
  Alert,
  Card,
  CardContent
} from '@mui/material';
import { Person, LocationOn, Message, Phone } from '@mui/icons-material';
import axios from 'axios';

const API_URL = 'https://gym-itip.onrender.com/api/feedback';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    feedback: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);

  // Fetch feedbacks from backend when page loads
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setFetchLoading(true);
        const res = await axios.get(API_URL);
        setFeedbacks(res.data);
      } catch (err) {
        setError('Failed to fetch feedbacks');
      } finally {
        setFetchLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await axios.post(API_URL, formData);
      setSuccess(true);
      setFormData({ name: '', location: '', feedback: '', phone: '' });

      // Refresh feedbacks after submitting
      const res = await axios.get(API_URL);
      setFeedbacks(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit feedback');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4, marginTop: "80px" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          Share Your Feedback
        </Typography>
        
        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 3 }}>Thank you for your feedback!</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
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
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            sx={{ mt: 3, py: 1.5 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit Feedback'}
          </Button>
        </Box>
      </Paper>

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }} align="center">
        Recent Feedback
      </Typography>
      {fetchLoading ? (
        <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        feedbacks.map(fb => (
          <Card key={fb._id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">{fb.name} ({fb.location})</Typography>
              <Typography variant="body2">{fb.feedback}</Typography>
              <Typography variant="caption" color="text.secondary">Phone: {fb.phone}</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                {new Date(fb.createdAt).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default FeedbackForm;