import { Link } from "react-router-dom";
import "../styles/Facilities.css";
import { Box, Typography, Container } from "@mui/material";

import poolImage from "../assets/images/F1.jpg";
import spaImage from "../assets/images/Spa.jpg";
import lockerImage from "../assets/images/F2.jpeg";
import basketballImage from "../assets/images/F3.jpeg";
import heroImage from "../assets/images/F4.jpeg";
import Program from "./program";

const Facilities = () => {
  return (
    <div className="facilities-wrapper">

      {/* ✅ Hero Section */}
      <section className="facilities-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1>Welcome to <span>PowerLiftZone</span></h1>
          <p>Premium Fitness, Wellness & Relaxation</p>
          <Link to="/not decided" className="hero-button">Join Now</Link>
        </div>
      </section>

      {/* ✅ Facilities Info */}
      <section className="facility-section">
        <div className="facility-item">
          <img src={poolImage} alt="Lap Pool" />
          <div className="facility-text">
            <h2>Olympic Lap Pool</h2>
            <p>
              Dive into excellence with our Olympic-sized lap pool – ideal for stamina training,
              rehabilitation, or just a refreshing swim. Temperature controlled and
              professionally maintained for peak performance.
            </p>
          </div>
        </div>

        <div className="facility-item reverse">
          <div className="facility-text">
            <h2>Luxury Spa & Wellness</h2>
            <p>
              Recharge with soothing spa experiences. Our wellness zone includes a steam room,
              sauna, and professional massages to help you rejuvenate after tough workouts or long days.
            </p>
          </div>
          <img src={spaImage} alt="Spa" />
        </div>
      </section>

      {/* ✅ Members Gallery */}
      <Program/>
      <section className="members-area">
        <h2>Exclusive Member Perks</h2>
        <p>Access stylish lounges, advanced locker rooms, and recreational spaces</p>
        <div className="members-gallery">
          <img src={spaImage} alt="Spa" />
          <img src={lockerImage} alt="Locker" />
          <img src={basketballImage} alt="Basketball" />
        </div>
      </section>
      

      {/* ✅ CTA Section */}
      <section className="facilities-cta">
              <Box className="hero-section" sx={{ marginBottom: "40px", padding: "70px 0", background: "linear-gradient(to bottom, #e0417cff)" }}>
                <Container maxWidth="lg">
                  <Box className="hero-content" sx={{ textAlign: "center" }}>
                    <Typography variant="h2" component="h1" className="hero-title" sx={{ fontWeight: 700, color: "#fff" }}>
                      Elevate Your Fitness Journey
                    </Typography>
                    <Typography variant="h5" className="hero-subtitle" sx={{ color: "#fff", marginTop: "20px" }}>
                      Discover exercises tailored to your goals and track your progress
                    </Typography>
                  </Box>
                </Container>
              </Box>
      </section>

    </div>
  );
};

export default Facilities;
