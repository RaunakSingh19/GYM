import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ToolsSection = () => {
  const navigate = useNavigate();

  const tools = [
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index to understand your weight status and get personalized health recommendations.",
      action: () => navigate("/bmi"),
      icon: "📊"
    },
    {
      title: "Calorie Tracker",
      description: "Track your daily calorie intake and expenditure to maintain, lose, or gain weight effectively.",
      action: () => navigate("/calories"),
      icon: "🔥"
    },
    {
      title: "Take a Break",
      description: "Refresh your mind with a quick game of Tic Tac Toe during your workout breaks.",
      action: () => navigate("/TicTacToe"),
      icon: "🎮"
    },
    {
      title: "Share Feedback",
      description: "Help us improve by sharing your experience and suggestions with our fitness programs.",
      action: () => navigate("/feedbackform"),
      icon: "💬"
    }
  ];

  return (
    <Box sx={{
      py: 8,
      background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{
          textAlign: "center",
          mb: 6,
          fontWeight: 700,
          color: "text.primary",
          background: "linear-gradient(90deg, #3a7bd5, #d81b60)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          // color: "transparent",
        }}>
          Fitness Tools
        </Typography>

        <Grid container spacing={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{
                height: "100%",
                p: 4,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
                },
                display: "flex",
                flexDirection: "column",
              }}>
                <Typography variant="h4" sx={{ 
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}>
                  <span>{tool.icon}</span>
                  {tool.title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: "text.secondary",
                  mb: 3,
                  flexGrow: 1,
                }}>
                  {tool.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={tool.action}
                  sx={{
                    alignSelf: "flex-start",
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #3a7bd5, #d81b60)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 4px 15px rgba(58, 123, 213, 0.4)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(58, 123, 213, 0.6)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ToolsSection;