import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Button, Container, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const programs = [
  {
    id: 1,
    title: "Personal Yoga Program",
    description: "Enhance flexibility and reduce stress with personalized yoga sessions.",
    image: require("../assets/images/L3.jpg"),
    details: {
      address: "123 Yoga St, Wellness City, YogaTown",
      info: "Visit the nearest Yoga Center to get started with personalized yoga sessions that will help you improve your flexibility and mental clarity. Our certified instructors are here to guide you every step of the way."
    }
  },
  {
    id: 2,
    title: "Gym Program",
    description: "Structured gym workouts for strength, endurance, and muscle building.",
    image: require("../assets/images/L2.jpg"),
    details: {
      address: "456 Fitness Ave, MuscleTown, FitCity",
      info: "Join our gym program for personalized workout sessions that focus on strength, endurance, and muscle building. We have state-of-the-art equipment and experienced trainers to help you reach your fitness goals."
    }
  },
  {
    id: 3,
    title: "Corporate Training Program",
    description: "Boost productivity with fitness programs designed for professionals.",
    image: require("../assets/images/F2.jpeg"),
    details: {
      address: "789 Corporate Blvd, WorkCity, ProTown",
      info: "Our Corporate Training Program is designed for professionals looking to boost productivity, reduce stress, and improve overall wellness. Offering group sessions or personalized plans, we cater to all work schedules."
    }
  }
];

const Program = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Open the dialog when clicking anywhere on the card
  const handleDialogOpen = (program) => {
    setSelectedProgram(program);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedProgram(null);
  };

  return (
    <Box sx={{ py: 10, background: "#f4f6f9" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: "primary.main" }}>
            OUR OFFERINGS
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '3rem' }, color: "text.primary" }}>
            Transformative Fitness Programs
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 700, mx: "auto", fontSize: { xs: "0.9rem", sm: "1rem" }, fontWeight: 500 }}>
            Discover our carefully curated programs designed to meet your unique fitness goals and lifestyle needs.
          </Typography>
        </Box>

        {/* Programs Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>
          {programs.map((program) => (
            <Card
              key={program.id}
              onClick={() => handleDialogOpen(program)}  // Open dialog when clicking anywhere on the card
              sx={{
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={program.image}
                alt={program.title}
                sx={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5, color: "text.primary" }}>
                  {program.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  {program.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Dialog for displaying program details */}
      {selectedProgram && (
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle sx={{ fontWeight: 700 }}>{selectedProgram.title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {selectedProgram.details.info}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Visit us at:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedProgram.details.address}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Program;