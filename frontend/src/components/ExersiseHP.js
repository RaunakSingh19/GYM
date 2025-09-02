import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../styles/ExercisesHP.css";
import exerciseImage from "../assets/images/i.jpeg";
import Plank from "../assets/images/plank.jpg";
import Squat from "../assets/images/Personal_gym.jpg";

const exercisesData = [
  {
    id: 1,
    name: "Push Up",
    description: "A basic exercise to strengthen your chest, shoulders, and triceps.",
    image: exerciseImage,
  },
  {
    id: 2,
    name: "Squat",
    description: "A lower body exercise targeting the quadriceps, hamstrings, and glutes.",
    image: Squat,
  },
  {
    id: 3,
    name: "Plank",
    description: "A core exercise that strengthens the abs and back muscles.",
    image: Plank,
  },
];

const ExercisesHp = () => {
  const [exercises] = useState(exercisesData);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBrowseClick = () => {
    navigate("/explore");
  };

  return (
    <Box className="exercises-app" sx={{ backgroundColor: "#f5f5f5", px: 2 }}>
      <Box
        className="hero-section"
        sx={{
          mb: 6,
          py: { xs: 8, md: 12 },
          background: "linear-gradient(to bottom, #e0417cff)",
        }}
      >
        <Container maxWidth="lg">
          <Box className="hero-content" sx={{ textAlign: "center" }}>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              component="h1"
              className="hero-title"
              sx={{ fontWeight: 700, color: "#fff" }}
            >
              Elevate Your Fitness Journey
            </Typography>
            <Typography
              variant="h6"
              className="hero-subtitle"
              sx={{ color: "#fff", mt: 2 }}
            >
              Discover exercises tailored to your goals and track your progress
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", mb: 2, fontWeight: 700 }}
        >
          Featured Exercises
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", mb: 5, color: "#555" }}
        >
          Browse our collection of effective workouts
        </Typography>

        <Grid container spacing={4}>
          {exercises.map((exercise) => (
            <Grid item xs={12} sm={6} md={4} key={exercise.id}>
              <Card
                className="exercise-card"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={exercise.image}
                  alt={exercise.name}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {exercise.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exercise.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  onClick={handleBrowseClick}
                  sx={{
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                    fontWeight: 600,
                    backgroundColor: "#d81b60",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "0 0 12px 12px",
                    "&:hover": {
                      backgroundColor: "#c2185b",
                    },
                  }}
                >
                  Browse
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExercisesHp;
