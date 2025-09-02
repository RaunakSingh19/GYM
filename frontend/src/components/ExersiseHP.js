// import React, { useState } from "react";
// import { Box, Grid, Typography, Card, CardContent, CardMedia, Button, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
// import "../styles/ExercisesHP.css";
// import exerciseImage from "../assets/images/i.jpeg"; // Importing the image from the assets folder
// import Plank from "../assets/images/plank.jpg"; // Importing the image from the assets folder
// import Squat from "../assets/images/Personal_gym.jpg"; // Importing the image from the assets folder

// // Sample data for exercises (replace with actual data from API)
// const exercisesData = [
//   {
//     id: 1,
//     name: "Push Up",
//     description: "A basic exercise to strengthen your chest, shoulders, and triceps.",
//     image: exerciseImage, // Use the imported image for all exercises
//   },
//   {
//     id: 2,
//     name: "Squat",
//     description: "A lower body exercise targeting the quadriceps, hamstrings, and glutes.",
//     image: Squat, // Use the imported image for all exercises
//   },
//   {
//     id: 3,
//     name: "Plank",
//     description: "A core exercise that strengthens the abs and back muscles.",
//     image: Plank, // Use the imported image for all exercises
//   },
//   // Add more exercises here
// ];

// const ExercisesHp = () => {
//   const [exercises] = useState(exercisesData);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleBrowseClick = () => {
//     navigate("/explore");  // Navigate to the /explore page when the Browse button is clicked
//   };

//   return (
//     <Box className="exercises-app" sx={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
//       <Box className="hero-section" sx={{ marginBottom: "40px", padding: "70px 0", background: "linear-gradient(to bottom, #e0417cff)" }}>
//         <Container maxWidth="lg">
//           <Box className="hero-content" sx={{ textAlign: "center" }}>
//             <Typography variant="h2" component="h1" className="hero-title" sx={{ fontWeight: 700, color: "#fff" }}>
//               Elevate Your Fitness Journey
//             </Typography>
//             <Typography variant="h5" className="hero-subtitle" sx={{ color: "#fff", marginTop: "20px" }}>
//               Discover exercises tailored to your goals and track your progress
//             </Typography>
//           </Box>
//         </Container>
//       </Box>

//       <Container maxWidth="lg" className="exercises-container">
//         <Typography variant="h4" component="h2" className="section-title" sx={{ textAlign: "center", marginBottom: "20px" }}>
//           Featured Exercises
//         </Typography>
//         <Typography variant="subtitle1" className="section-subtitle" sx={{ textAlign: "center", marginBottom: "40px", color: "#555" }}>
//           Browse our collection of effective workouts
//         </Typography>

//         <Grid container spacing={4} className="exercises-grid">
//           {exercises.map((exercise) => (
//             <Grid item xs={12} sm={6} md={4} key={exercise.id}>
//               <Card className="exercise-card" sx={{ borderRadius: "10px", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)", height: "100%" }}>
//                 <CardMedia
//                   component="img"
//                   height="240"
//                   image={exercise.image} // Use the imported image here
//                   alt={exercise.name}
//                   sx={{
//                     objectFit: "cover",
//                     objectPosition: "center",
//                     borderTopLeftRadius: "10px",
//                     borderTopRightRadius: "10px",
//                   }}
//                 />
//                 <CardContent className="card-content" sx={{ padding: "20px" }}>
//                   <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
//                     {exercise.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {exercise.description}
//                   </Typography>
//                 </CardContent>
//                 <Button
//                   variant="contained"
//                   color='text.secondary'
//                   sx={{
//                     width: "100%",
//                     padding: "12px",
//                     fontWeight: 600,
//                     textTransform: "none",
//                     borderBottomLeftRadius: "10px",
//                     borderBottomRightRadius: "10px",
//                     background:"#d81b60",
//                     color:'white'
//                   }}
//                   onClick={handleBrowseClick}  // Call the function on button click
//                 >
//                   Browse
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ExercisesHp;

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
