import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage1 from "../assets/images/banner_cp.png";
import HeroBannerImage2 from "../assets/images/Hero-Banner_cp2.jpeg";
import { useNavigate } from 'react-router-dom';

const Exercises = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: { xs: '20px', md: '40px' },
    }}>
      {/* First Section */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '40px',
        marginBottom: '60px',
        backgroundColor: 'rgba(249, 249, 249, 0.7)',
        borderRadius: '16px',
        padding: '40px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}>
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: '0', md: '20px' },
        }}>
          <Typography variant="h3" sx={{
            fontWeight: 700,
            marginBottom: '20px',
            background: 'linear-gradient(90deg, #3a7bd5, #00d2ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}>
            FITNESS CLUB
          </Typography>
          <Typography variant="body1" sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
            marginBottom: '30px',
            fontSize: '1.1rem',
          }}>
            Welcome to our premier fitness destination where transformation begins. 
            Our state-of-the-art facilities and expert trainers are dedicated to helping 
            you achieve your health and wellness goals.
          </Typography>
          <Button 
            variant="contained"
            onClick={() => navigate('/dietplanner')}
            sx={{
              alignSelf: 'flex-start',
              padding: '12px 32px',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #3a7bd5, #d81b60)',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 4px 15px rgba(58, 123, 213, 0.4)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(58, 123, 213, 0.6)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Diet Planner
          </Button>
        </Box>
        <Box sx={{
          flex: 1,
          borderRadius: '12px',
          overflow: 'hidden',
          height: { xs: '300px', md: '400px' },
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${HeroBannerImage1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        </Box>
      </Box>

      {/* Second Section */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        gap: '40px',
        backgroundColor: 'rgba(249, 249, 249, 0.7)',
        borderRadius: '16px',
        padding: '40px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}>
        <Box sx={{
          flex: 1,
          borderRadius: '12px',
          overflow: 'hidden',
          height: { xs: '300px', md: '400px' },
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${HeroBannerImage2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        </Box>
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: '0', md: '20px' },
        }}>
          <Typography variant="h5" sx={{
            fontWeight: 600,
            color: 'primary.main',
            marginBottom: '15px',
          }}>
            We're committed to a clean and safe facility
          </Typography>
          <Box sx={{
            width: '60px',
            height: '4px',
            backgroundColor: 'primary.main',
            margin: '20px 0',
            borderRadius: '2px',
          }} />
          <Typography variant="h3" sx={{
            fontWeight: 800,
            marginBottom: '15px',
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: 'text.primary',
          }}>
            PowerLiftZone
          </Typography>
          <Typography variant="body1" sx={{
            color: 'text.secondary',
            marginBottom: '30px',
            lineHeight: 1.7,
            fontSize: '1.1rem',
          }}>
            Experience the difference with our premium services designed to elevate 
            your fitness journey. 
            From personalized training to nutrition guidance, 
            we provide everything you need to succeed.
            Here you can fild some protine sources base on their
            calorie, protine percentage, and Digestion Ratio.
          </Typography>
          <Button 
            variant="contained"
            onClick={() => navigate('/pdashboard')}
            sx={{
              alignSelf: 'flex-start',
              padding: '12px 32px',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #3a7bd5, #d81b60)',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 4px 15px rgba(58, 123, 213, 0.4)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(58, 123, 213, 0.6)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            KNOW MORE ABOUT PROTINE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Exercises;