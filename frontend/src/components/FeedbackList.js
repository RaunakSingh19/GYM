import React, { useState, useEffect } from "react";
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
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import API_BASE_URL from "../config/api";

const FeedbackCards = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/feedback`);
        setFeedbacks(response.data);
      } catch (err) {
        setError("Failed to fetch feedback.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Generate gradient color from name
  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `linear-gradient(135deg, hsl(${hue}, 70%, 65%), hsl(${hue}, 70%, 45%))`;
  };

  // Delete feedback handler
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/feedback/${id}`);
      setFeedbacks(feedbacks.filter((fb) => fb._id !== id)); // Update UI after successful deletion
    } catch (err) {
      setError("Failed to delete feedback. Please try again.");
      console.error("Error deleting feedback:", err);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "600",
          color: "#1a237e",
          mb: 6,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Admin Feedback Panel
      </Typography>

      {/* Error Message */}
      {error && (
        <Alert severity="error" sx={{ mb: 4, borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      {/* Loader */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <CircularProgress size={60} thickness={4} sx={{ color: "#3949ab" }} />
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {feedbacks.map((fb) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={fb._id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px",
                }}
              >
                {/* Header (Name, Location, Delete Button) */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{
                        background: stringToColor(fb.name || "User"),
                        width: 40,
                        height: 40,
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        mr: 2,
                      }}
                    >
                      {fb.name?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="body1"
                        fontWeight="600"
                        sx={{ color: "#333" }}
                      >
                        {fb.name || "Anonymous"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {fb.location || "Unknown location"}
                      </Typography>
                    </Box>
                  </Box>

                  <IconButton
                    onClick={() => handleDelete(fb._id)}
                    color="error"
                    sx={{ alignSelf: "flex-start" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>

                {/* Rating */}
                <Rating
                  name="read-only"
                  value={fb.rating || 5}
                  readOnly
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    color: "#ffb400",
                    mt: 1,
                  }}
                />

                {/* Feedback Text */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    mt: 2,
                    fontStyle: "italic",
                    lineHeight: "1.5",
                    minHeight: "80px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {fb.feedback || "No feedback provided"}
                </Typography>

                {/* Delete Button */}
                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  sx={{ mt: 3 }}
                  onClick={() => handleDelete(fb._id)}
                >
                  Delete
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default FeedbackCards;
