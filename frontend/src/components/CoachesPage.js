import React from "react";
import { Box, Typography, Grid, IconButton, Container } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import coach1Image from "../assets/images/coach1.jpg";
import coach2Image from "../assets/images/coach2.jpg";
import coach3Image from "../assets/images/coach3.jpg";

const coachesData = [
  {
    name: "Jane Smith",
    role: "Fitness Coach",
    image: coach1Image,
    bio: "Specializes in high-intensity interval training and weight loss programs.",
    specialties: ["HIIT", "Weight Loss", "Cardio"],
  },
  {
    name: "Alex Johnson",
    role: "Nutrition Expert",
    image: coach2Image,
    bio: "Provides personalized nutrition plans to help you achieve your health goals.",
    specialties: ["Meal Planning", "Macro Counting", "Diet Strategies"],
  },
  {
    name: "Emily Brown",
    role: "Yoga Instructor",
    image: coach3Image,
    bio: "Focuses on mindfulness and flexibility through yoga and meditation.",
    specialties: ["Vinyasa", "Meditation", "Breathwork"],
  },
];

const CoachCard = ({ name, role, image, bio, specialties }) => {
  return (
    <Box sx={{
      bgcolor: 'background.paper',
      borderRadius: 4,
      overflow: 'hidden',
      boxShadow: 3,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: 6,
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{
        height: 200,
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
        }
      }}>
        <img 
          src={image} 
          alt={name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
      
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h5" component="h3" sx={{ 
          fontWeight: 700, 
          mb: 1,
          color: '#d81b60', // Changed to #d81b60
        }}>
          {name}
        </Typography>
        
        <Typography variant="subtitle1" sx={{ 
          fontWeight: 600, 
          mb: 2,
          display: 'inline-block',
          px: 1.5,
          py: 0.5,
          bgcolor: 'rgba(216, 27, 96, 0.1)', // Adjusted to match #d81b60
          borderRadius: 2,
          color: '#d81b60', // Changed to #d81b60
        }}>
          {role}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          {bio}
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" sx={{ 
            display: 'block', 
            color: 'text.secondary',
            mb: 1,
          }}>
            SPECIALTIES:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {specialties.map((item, index) => (
              <Typography key={index} variant="caption" sx={{
                px: 1.5,
                py: 0.5,
                bgcolor: 'rgba(216, 27, 96, 0.1)', // Adjusted to match #d81b60
                borderRadius: 2,
                color: '#d81b60', // Changed to #d81b60
                fontWeight: 500,
              }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ 
        px: 3, 
        pb: 3,
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}>
        <IconButton sx={{ 
          bgcolor: 'rgba(216, 27, 96, 0.1)', // Adjusted to match #d81b60
          '&:hover': { bgcolor: 'rgba(216, 27, 96, 0.2)' } // Adjusted to match #d81b60
        }}>
          <Facebook sx={{ color: '#d81b60' }} /> {/* Changed to #d81b60 */}
        </IconButton>
        <IconButton sx={{ 
          bgcolor: 'rgba(216, 27, 96, 0.1)', // Adjusted to match #d81b60
          '&:hover': { bgcolor: 'rgba(216, 27, 96, 0.2)' } // Adjusted to match #d81b60
        }}>
          <Twitter sx={{ color: '#d81b60' }} /> {/* Changed to #d81b60 */}
        </IconButton>
        <IconButton sx={{ 
          bgcolor: 'rgba(216, 27, 96, 0.1)', // Adjusted to match #d81b60
          '&:hover': { bgcolor: 'rgba(216, 27, 96, 0.2)' } // Adjusted to match #d81b60
        }}>
          <LinkedIn sx={{ color: '#d81b60' }} /> {/* Changed to #d81b60 */}
        </IconButton>
      </Box>
    </Box>
  );
};

const CoachesPage = () => {
  return (
    <Box sx={{
      py: 8,
      px: { xs: 2, sm: 4 },
      background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center',
          mb: 6,
          maxWidth: 800,
          mx: 'auto',
        }}>
          <Typography variant="overline" sx={{ 
            color: '#d81b60', // Changed to #d81b60
            fontWeight: 600,
            letterSpacing: 1,
            mb: 2,
            display: 'inline-block',
          }}>
            OUR TEAM
          </Typography>
          
          <Typography variant="h3" sx={{ 
            fontWeight: 800,
            mb: 2,
            lineHeight: 1.2,
            color: '#d81b60', // Changed to #d81b60
          }}>
            Meet Our Expert Coaches
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: 'text.secondary',
            fontSize: '1.1rem',
          }}>
            Our certified professionals bring diverse expertise to help you achieve your fitness goals through personalized training and nutrition plans.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {coachesData.map((coach, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CoachCard {...coach} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoachesPage;