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
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Newsletter from "./NewsletterSection";

import FitnessImage from "../assets/images/about-background.jpg";

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

const galleryImages = [a, b, c, d, e, f, g, h, i, j, k];

const About = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", pb: 5, mt: "80px" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage: `url(${FitnessImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: "60vh", sm: "70vh", md: "80vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Overlay for better text visibility on mobile */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: {
      xs: "rgba(255, 255, 255, 0.7)",   // Mobile: more white
      sm: "rgba(255, 255, 255, 0.6)",   // Small screen: medium
      md: "rgba(255, 255, 255, 0.4)",   // Desktop: less white
      lg: "rgba(255, 255, 255, 0)",   // Large screen: even less
    },
            zIndex: 0,
          }}
        />

        {/* Text Content */}
        <Box sx={{ zIndex: 1, maxWidth: "800px", p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#161414",
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            Elevate your fitness journey with expert trainers and top-class facilities
          </Typography>

          <Typography
            variant="h3"
            fontWeight="700"
            sx={{
              color: "#d81b60",
              marginBottom:"10rem",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Welcome to Our Gym
          </Typography>
        </Box>
      </Box>

      {/* JOIN NOW BUTTON */}
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
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#ad1457",
            },
          }}
        >
          Join Now
        </Button>
      </Box>

      {/* OUR STORY */}
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "700px", mx: "auto" }}
        >
          Founded in 2005, Our Gym has transformed from a neighborhood fitness center
          into a premium destination for health and wellness. With a legacy of thousands
          of success stories, we continue to build a healthier community.
        </Typography>
      </Container>

      {/* GALLERY */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
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
                  sx={{
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* NEWSLETTER SECTION */}
      <Newsletter />

      {/* WHY CHOOSE US */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Certified Trainers",
              text: "Get guidance from certified and experienced professionals.",
            },
            {
              title: "Modern Equipment",
              text: "State-of-the-art gym equipment for all fitness levels.",
            },
            {
              title: "Customized Workouts",
              text: "Programs tailored to your body type and goals.",
            },
            {
              title: "Nutrition Plans",
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
                  height: "100%",
                }}
              >
                <CardContent>
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

      {/* ADDITIONAL PERKS */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Additional Perks
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "24/7 Access",
              text: "Your schedule, your workout. We're open round the clock.",
            },
            {
              title: "Group Classes",
              text: "Stay motivated with engaging group workouts.",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#fffaf0",
                  border: "2px solid #d81b60",
                  borderRadius: 3,
                  p: 2,
                  height: "100%",
                }}
              >
                <Box>
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
    </Box>
  );
};

export default About;
