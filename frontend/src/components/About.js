import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import VerifiedIcon from "@mui/icons-material/Verified";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import a from "../assets/images/a.jpeg";
import b from "../assets/images/b.jpeg";
import c from "../assets/images/c.jpeg";
import d from "../assets/images/d.jpeg";
import e from "../assets/images/e.jpeg";
import f from "../assets/images/f.jpeg";
import g from "../assets/images/g.jpeg";
import h from "../assets/images/h.jpeg";
import i from "../assets/images/i.jpeg";
import j from "../assets/images/j.jpeg";
import k from "../assets/images/k.jpeg";
import z from "../assets/images/z.jpeg";

const galleryImages = [a, b, c, d, e, f, g, h, i, j, k];

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", pb: 5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${z})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h3" fontWeight="700" color="#d81b60">
          Welcome to Our Gym
        </Typography>
        <Typography variant="h6" mt={2}>
          Elevate your fitness journey with expert trainers and top-class facilities
        </Typography>
      </Box>

      {/* Join Now Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          onClick={() => navigate("/services")}
          sx={{
            backgroundColor: "#d81b60",
            color: "#fff",
            px: 4,
            py: 1.5,
            borderRadius: "25px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ad1457",
            },
          }}
        >
          Join Now
        </Button>
      </Box>

      {/* Our Story */}
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h4" className="section-title" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
          Founded in 2005, Our Gym has transformed from a neighborhood fitness center
          into a premium destination for health and wellness. With a legacy of thousands
          of success stories, we continue to build a healthier community.
        </Typography>
      </Container>

      {/* Gallery */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" className="section-title" gutterBottom textAlign="center">
          Gallery & Facilities
        </Typography>
        <Grid container spacing={2}>
          {galleryImages.map((img, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={img}
                  alt={`gallery-${i + 1}`}
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" className="section-title" gutterBottom textAlign="center">
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Certified Trainers",
              icon: <VerifiedIcon color="primary" fontSize="large" />,
              text: "Get guidance from certified and experienced professionals.",
            },
            {
              title: "Modern Equipment",
              icon: <FitnessCenterIcon color="primary" fontSize="large" />,
              text: "State-of-the-art gym equipment for all fitness levels.",
            },
            {
              title: "Customized Workouts",
              icon: <SportsGymnasticsIcon color="primary" fontSize="large" />,
              text: "Programs tailored to your body type and goals.",
            },
            {
              title: "Nutrition Plans",
              icon: <FastfoodIcon color="primary" fontSize="large" />,
              text: "Personalized diet and meal strategies for better results.",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  backgroundColor: "#fffaf0",
                  border: "2px solid #d81b60",
                  borderRadius: 3,
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardContent>
                  {item.icon}
                  <Typography variant="h6" fontWeight="bold" mt={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Additional Benefits */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" className="section-title" gutterBottom textAlign="center">
          Additional Perks
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "24/7 Access",
              icon: <AccessTimeIcon color="success" fontSize="large" />,
              text: "Your schedule, your workout. We're open round the clock.",
            },
            {
              title: "Group Classes",
              icon: <GroupsIcon color="success" fontSize="large" />,
              text: "Stay motivated with engaging group workouts.",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fffaf0",
                  border: "2px solid #d81b60",
                  borderRadius: 3,
                  p: 2,
                }}
              >
                {item.icon}
                <Box ml={2}>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Divider sx={{ my: 6 }} />
     {/* Styled Footer */}
<Box
  component="footer"
  sx={{
    backgroundColor: "#d81b60",
    color: "#fff",
    py: 4,
    px: { xs: 2, md: 6 },
    mt: 6,
  }}
>
  <Grid container spacing={4}>
    {/* Logo / Title */}
    <Grid item xs={12} md={4}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Our Gym
      </Typography>
      <Typography variant="body2">
        Pushing limits and redefining fitness. Your journey starts here.
      </Typography>
    </Grid>

    {/* Quick Links */}
    <Grid item xs={12} md={4}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Quick Links
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body2" component="a" href="/" sx={{ color: "#fff", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          Home
        </Typography>
        <Typography variant="body2" component="a" href="/services" sx={{ color: "#fff", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          Services
        </Typography>
        <Typography variant="body2" component="a" href="/contact" sx={{ color: "#fff", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          Contact Us
        </Typography>
      </Box>
    </Grid>

    {/* Contact Info */}
    <Grid item xs={12} md={4}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body2">Email: info@ourgym.com</Typography>
      <Typography variant="body2">Phone: +91 98765 43210</Typography>
      <Typography variant="body2">Location: Mumbai, India</Typography>
    </Grid>
  </Grid>

  {/* Bottom bar */}
  <Box sx={{ textAlign: "center", mt: 4 }}>
    <Typography variant="body2" sx={{ opacity: 0.8 }}>
      © {new Date().getFullYear()} Our Gym. All rights reserved.
    </Typography>
  </Box>
</Box>

    </Box>
  );
};

export default About;
