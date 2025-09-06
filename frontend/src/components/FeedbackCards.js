import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
  CircularProgress,
  Alert,
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material';
import axios from 'axios';
import API_BASE_URL from '../config/api';


const FeedbackCards = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/feedback`);
        setFeedbacks(response.data);
      } catch (err) {
        setError('Failed to fetch feedback.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Function to generate a gradient color based on name
  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `linear-gradient(135deg, hsl(${hue}, 70%, 65%), hsl(${hue}, 70%, 45%))`;
  };

  return (
    <Container style={{margin:"80px"}} maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #1a237e, #3949ab)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          mb: 6,
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Customer Reviews
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 4, borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
          <CircularProgress size={60} thickness={4} sx={{ color: '#3949ab' }} />
        </Box>
      ) : (
        <Grid 
          container 
          spacing={4}
          sx={{
            justifyContent: 'center', 
            alignItems: 'stretch',
          }}
        >
          {feedbacks.map((fb) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={fb._id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  p: 0,
                  height: '100%',
                  maxWidth: 350,
                  minWidth: 260,
                  width: '100%',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  background: 'white',
                  position: 'relative',
                  overflow: 'visible',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  '&:hover': {
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                    transform: 'translateY(-8px)'
                  },
                }}
              >
                {/* Decorative element */}
                <Box
                  sx={{
                    height: 6,
                    background: 'linear-gradient(90deg, #3949ab, #1a237e)',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16
                  }}
                />
                
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        background: stringToColor(fb.name || 'User'),
                        width: 56,
                        height: 56,
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        mr: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      {fb.name?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        fontWeight="600" 
                        sx={{ color: '#1a237e' }}
                      >
                        {fb.name || 'Anonymous'}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          mt: 0.5
                        }}
                      >
                        <Box 
                          component="span" 
                          sx={{ 
                            fontSize: '0.7rem',
                            mr: 1
                          }}
                        >
                          📍
                        </Box>
                        {fb.location || 'Unknown location'}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Rating
                      name="read-only"
                      value={fb.rating || 5}
                      readOnly
                      size={isMobile ? "small" : "medium"}
                      sx={{ 
                        color: '#ffb400',
                        mb: 1.5
                      }}
                    />
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      lineHeight: 1.6,
                      color: 'text.primary',
                      fontStyle: 'italic',
                      position: 'relative',
                      pl: 2,
                      pr: 1,
                      wordBreak: 'break-word',
                      overflowWrap: 'anywhere',
                      '&:before': {
                        content: '"“"',
                        position: 'absolute',
                        left: 0,
                        top: -10,
                        fontSize: '3rem',
                        color: '#e0e0e0',
                        fontFamily: 'Georgia, serif'
                      }
                    }}
                  >
                    {fb.feedback}
                  </Typography>
                  
                  {/* Decorative quote mark at bottom right */}
                  <Box
                    sx={{
                      textAlign: 'right',
                      color: '#f5f5f5',
                      fontSize: '4rem',
                      lineHeight: 1,
                      mt: 1,
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    ”
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default FeedbackCards;