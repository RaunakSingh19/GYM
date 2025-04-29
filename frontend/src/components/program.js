import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, Container } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    id: 1,
    title: "Personal Yoga Program",
    description: "Enhance flexibility and reduce stress with personalized yoga sessions.",
    image: require("../assets/images/yoga.jpg"),
  },
  {
    id: 2,
    title: "Gym Program",
    description: "Structured gym workouts for strength, endurance, and muscle building.",
    image: require("../assets/images/gym.jpg"),
  },
  {
    id: 3,
    title: "Corporate Training Program",
    description: "Boost productivity with fitness programs designed for professionals.",
    image: require("../assets/images/abc.jpg"),
  },
];

const Program = () => {
  const navigate = useNavigate();

  return (
    
    <Box sx={{
      // boxShadow: rgba(0, 0, 0, 0.24) ,
      py: 10,
      background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ 
          textAlign: 'center',
          mb: 8,
          px: { xs: 2, sm: 0 },
        }}>
          <Typography variant="overline" sx={{
            color: 'primary.main',
            fontWeight: 600,
            letterSpacing: 2,
            fontSize: '0.8rem',
            mb: 2,
            display: 'inline-block',
          }}>
            OUR OFFERINGS
          </Typography>
          <Typography variant="h3" sx={{
            fontWeight: 800,
            mb: 3,
            background: '#d81b60',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Transformative Fitness Programs
          </Typography>
          <Typography variant="body1" sx={{
            color: 'text.secondary',
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}>
            Discover our carefully curated programs designed to meet your unique fitness goals and lifestyle needs.
          </Typography>
        </Box>

        {/* Programs Grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 6,
        }}>
          {programs.map((program) => (
            <Card key={program.id} sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              },
            }}>
              <CardMedia
                component="img"
                height="240"
                image={program.image}
                alt={program.title}
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <CardContent sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
              }}>
                <Typography variant="h5" component="h3" sx={{
                  fontWeight: 700,
                  mb: 1.5,
                  color: 'text.primary',
                }}>
                  {program.title}
                </Typography>
                <Typography variant="body1" sx={{
                  color: 'text.secondary',
                  mb: 2,
                  lineHeight: 1.6,
                }}>
                  {program.description}
                </Typography>
                <Button
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 0,
                    color: 'primary.main',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.dark',
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/services')}
            endIcon={<ArrowForward />}
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              background: 'linear-gradient(90deg, #3a7bd5, #d81b60)',
              boxShadow: '0 4px 15px rgba(58, 123, 213, 0.4)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(58, 123, 213, 0.6)',
                background: 'linear-gradient(90deg, #3a7bd5, #d81b60)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            View All Programs
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Program;