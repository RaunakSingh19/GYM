import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Container, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import blogImage1 from "../assets/images/muscle-boy1.png";
import blogImage2 from "../assets/images/muscle-boy2.png";
import blogImage3 from "../assets/images/muscle-boy3.png";
import blogImage4 from "../assets/images/muscle-boy4.png"; // New blog image added
import blogImage5 from "../assets/images/muscle-boy5.png"; // New blog image added

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Exercises for Beginners",
    content: "This blog covers five essential exercises that are perfect for people just starting their fitness journey. These exercises target all major muscle groups and will help you build a solid foundation.",
    image: blogImage1,
    date: "June 15, 2023",
    category: "Training"
  },
  {
    id: 2,
    title: "Nutrition Tips for Muscle Growth",
    content: "In this blog, we discuss how to tailor your diet to support muscle growth. You’ll learn about the best sources of protein, carbs, and healthy fats for maximum results.",
    image: blogImage2,
    date: "June 8, 2023",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "The Importance of Recovery Days",
    content: "Recovery days are crucial for muscle repair and growth. We delve into why these rest days are important and how you can make the most out of them to accelerate your progress.",
    image: blogImage3,
    date: "June 1, 2023",
    category: "Wellness"
  },
  {
    id: 4,
    title: "How to Maximize Your Gym Time",
    content: "Learn how to make the most out of your gym sessions with proven techniques to boost workout efficiency, gain strength, and avoid burnout.",
    image: blogImage4,
    date: "May 25, 2023",
    category: "Training"
  },
  {
    id: 5,
    title: "Building a Meal Plan for Strength Gains",
    content: "This article provides a detailed guide to creating a meal plan that will fuel your body for strength training, muscle growth, and recovery.",
    image: blogImage5,
    date: "May 18, 2023",
    category: "Nutrition"
  },
];

const FitnessClubBlog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
  };

  const handleJoinNowClick = () => {
    navigate('/services');
  };

  return (
    <Box sx={{
      py: 8,
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",
      margin: "80px 20px",
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{
          textAlign: "center",
          mb: 8,
          px: { xs: 2, sm: 0 },
        }}>
          <Typography variant="overline" sx={{
            color: "#d81b60",
            fontWeight: 600,
            letterSpacing: 2,
            fontSize: "0.8rem",
            mb: 2,
            display: "inline-block",
          }}>
            FITNESS RESOURCES
          </Typography>
          <Typography variant="h3" sx={{
            fontWeight: 800,
            mb: 3,
            color: "#d81b60",
          }}>
            Fitness Club Blog
          </Typography>
          <Typography variant="body1" sx={{
            color: "text.secondary",
            maxWidth: 700,
            mx: "auto",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}>
            Expert advice, training tips, and the latest fitness trends from our professional coaches.
          </Typography>
        </Box>

        {/* Featured Post Section */}
        <Box sx={{ mb: 6 }}>
          <Card sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}>
            <Box sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: 300, md: 400 },
            }}>
              <CardMedia
                component="img"
                height="100%"
                image={blogImage1}
                alt="Featured post"
                sx={{
                  objectFit: "cover",
                  objectPosition: "top", // Show only top portion of the image
                }}
              />
            </Box>
            <Box sx={{
              width: { xs: "100%", md: "50%" },
              p: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
              <Typography variant="overline" sx={{
                color: "#d81b60",
                fontWeight: 600,
                mb: 2,
              }}>
                FEATURED POST
              </Typography>
              <Typography variant="h4" sx={{
                fontWeight: 700,
                mb: 2,
              }}>
                How to Stay Motivated in Your Fitness Journey
              </Typography>
              <Typography variant="body1" sx={{
                color: "text.secondary",
                mb: 3,
                lineHeight: 1.7,
              }}>
                Discover proven strategies to maintain your motivation and consistency in the gym, even when progress seems slow.
              </Typography>
              <Button
                endIcon={<ArrowForward />}
                sx={{
                  alignSelf: "flex-start",
                  px: 0,
                  color: "#d81b60",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                Read Full Article
              </Button>
            </Box>
          </Card>
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
                },
              }} onClick={() => handlePostClick(post)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "top", // Show top 50% of the image
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="overline" sx={{
                    color: "#d81b60",
                    fontWeight: 600,
                    display: "block",
                    mb: 1,
                  }}>
                    {post.category} • {post.date}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: "text.secondary",
                    mb: 2,
                  }}>
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Blog Detail Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>{selectedPost?.title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              {selectedPost?.content}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Newsletter CTA */}
        <Box sx={{
          mt: 8,
          p: 4,
          borderRadius: 3,
          backgroundColor: "rgba(216, 27, 96, 0.05)",
          textAlign: "center",
        }}>
          <Typography variant="h5" sx={{
            fontWeight: 700,
            mb: 2,
            color: "#d81b60",
          }}>
            Get Fitness Tips Directly to Your Inbox
          </Typography>
          <Typography variant="body1" sx={{
            color: "text.secondary",
            mb: 3,
            maxWidth: 600,
            mx: "auto",
          }}>
            Subscribe to our newsletter for weekly workout routines, nutrition advice, and exclusive member offers.
          </Typography>
          <Box sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                backgroundColor: "#d81b60",
                color: "white",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#b91451",
                },
              }}
              onClick={handleJoinNowClick}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FitnessClubBlog;
