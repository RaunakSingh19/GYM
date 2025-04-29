// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for navigation
// import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
// import "../styles/ExercisesHP.css";

// const ExercisesHp = () => {

  
//   const [exercises, setExercises] = useState([]);
//   const navigate = useNavigate(); // ✅ Initialize navigation

//   useEffect(() => {
//     fetchExercises();
//   }, []);

//   const fetchExercises = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/exercises");
//       setExercises(res.data);
//     } catch (error) {
//       console.error("Error fetching exercises:", error);
//     }
//   };

//   const deleteExercise = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/exercises/${id}`);
//       fetchExercises();
//     } catch (error) {
//       console.error("Error deleting exercise:", error);
//     }
//   };

//   return (
//     <div className="exercises-container">
//       <div className="section">
//         <Box sx={{ flexGrow: 1, padding: 2 }}>
//           <Box sx={{ textAlign: "center", mb: 4 }}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Health Check
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               Check Your Body Health And Start Your Exercise Journy Today
//             </Typography>

//             <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "#d81b60",
//                         color: "#fff",
//                         textTransform: "uppercase",
//                         fontWeight: "600",
//                         padding: "1.0rem 1.9rem",
//                         "&:hover": { backgroundColor: "#ad1457" },
//                       }}
//                       onClick={() => navigate("/bmi")}
//                     >Check Your BMI</Button>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         marginTop:"20px",
//                         backgroundColor: "#d81b60",
//                         color: "#fff",
//                         textTransform: "uppercase",
//                         fontWeight: "600",
//                         padding: "1.0rem 1.9rem",
//                         "&:hover": { backgroundColor: "#ad1457" },
//                       }}
//                       onClick={() => navigate("/calories")}
//                     >Check Your Calories</Button>

//                       <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "#d81b60",
//                         color: "#fff",
//                         textTransform: "uppercase",
//                         fontWeight: "600",
//                         padding: "1.0rem 1.9rem",
//                         marginTop:"15px",
//                         "&:hover": { backgroundColor: "#ad1457" },
//                       }}
//                       onClick={() => navigate("/TicTacToe")}
//                     >Play Tic Tac Toe</Button>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "#d81b60",
//                         color: "#fff",
//                         textTransform: "uppercase",
//                         fontWeight: "600",
//                         padding: "1.0rem 1.9rem",
//                         marginTop:"15px",
//                         "&:hover": { backgroundColor: "#ad1457" },
//                       }}
//                       onClick={() => navigate("/feedbackform")}
//                     >Give Feedback</Button>
//             {/* <Button
//             className="abc"
//               variant="contained"
//               color="secondary"
//               sx={{ mt: 2 }}
//               onClick={() => navigate("/calories")} // ✅ Corrected navigation
//             >
//               Calorie Calculator
//             </Button> */}



//           </Box>

//           <Grid container spacing={3}>
//             {exercises.map((exercise) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={exercise._id}>
//                 <Card className="exercise-card">
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={`http://localhost:5000/${exercise.image}`}
//                     alt={exercise.name}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       {exercise.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {exercise.description}
//                     </Typography>
//                   </CardContent>
//                   <Button
//                     onClick={() => deleteExercise(exercise._id)}
//                     variant="contained"
//                     color="secondary"
//                   >
//                     Delete
//                   </Button>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default ExercisesHp;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button, Container } from "@mui/material";
import "../styles/ExercisesHP.css";

const ExercisesHp = () => {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/exercises");
      setExercises(res.data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  const deleteExercise = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/exercises/${id}`);
      fetchExercises();
    } catch (error) {
      console.error("Error deleting exercise:", error);
    }
  };

  return (
    <Box className="exercises-app">
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="h2" component="h1" className="hero-title">
              Elevate Your Fitness Journey
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              Discover exercises tailored to your goals and track your progress
            </Typography>
            
           
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className="exercises-container">
        <Typography variant="h4" component="h2" className="section-title">
          Featured Exercises
        </Typography>
        <Typography variant="subtitle1" className="section-subtitle">
          Browse our collection of effective workouts
        </Typography>

        <Grid container spacing={4} className="exercises-grid">
          {exercises.map((exercise) => (
            <Grid item xs={12} sm={6} md={4} key={exercise._id}>
              <Card className="exercise-card">
                <CardMedia
                  component="img"
                  height="240"
                  image={`http://localhost:5000/${exercise.image}`}
                  alt={exercise.name}
                  className="exercise-image"
                />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="h3">
                    {exercise.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exercise.description}
                  </Typography>
                </CardContent>
                <Button
                  onClick={() => deleteExercise(exercise._id)}
                  variant="contained"
                  className="delete-btn"
                >
                  Remove
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