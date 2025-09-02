"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import L1 from "../assets/images/L1.jpg";
import L2 from "../assets/images/L2.jpg";
import L3 from "../assets/images/L3.jpg";
import CTAImage from "../assets/images/cta-image.jpg";
import FooterImage1 from "../assets/images/footer1.jpg";
import FooterImage2 from "../assets/images/footer2.jpg";
import FooterImage3 from "../assets/images/footer3.jpg";
import "../styles/BlogPage.css";

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container" style={{ paddingTop: "60px", backgroundColor: "#f8f9fa" }}>
      {/* Header Carousel with seamless looping */}
    
      <div className="hero-header">
        <h1>Welcome to the Fitness Blog</h1>
        <p className="hero-subtext">Your guide to a healthier lifestyle</p>
      </div>
        <div className="header-carousel-wrapper">
        <div className="header-carousel">
          <img src={L1} alt="Fitness Inspiration 1" className="carousel-image" />
          <img src={L2} alt="Fitness Inspiration 2" className="carousel-image" />
          <img src={L3} alt="Fitness Inspiration 3" className="carousel-image" />
          {/* Duplicate images for seamless looping */}
          <img src={L1} alt="Fitness Inspiration 1" className="carousel-image" />
          <img src={L2} alt="Fitness Inspiration 2" className="carousel-image" />
        </div>
      </div>


<div className="blog-content modern-blog-content">
  <div className="blog-card">
    <h2>🧠 Mastering the Mind-Muscle Connection</h2>
    <p>
      The mind-muscle connection is a powerful concept often overlooked in fitness. By focusing your mind during exercises, you improve muscle activation and growth.
    </p>
    <p>
      Research shows that athletes who concentrate on contracting specific muscles during lifts engage more fibers, promoting better hypertrophy.
    </p>
  </div>

  <div className="blog-card">
    <h2>🥗 The Power of Macronutrients</h2>
    <p>
      A balanced diet with the right proportions of proteins, carbs, and fats is essential for achieving your fitness goals and maintaining overall health.
    </p>
  </div>

  <div className="blog-card">
    <h2>⚡ HIIT vs. LISS: Which Is Better?</h2>
    <p>
      Cardio is crucial — but is High-Intensity Interval Training (HIIT) or Low-Intensity Steady-State (LISS) better? Let's explore the pros and cons of both.
    </p>
  </div>
</div>


      {/* CTA Banner with properly sized image */}
      <div className="cta-section">
  <div className="cta-text">
    <h2>Ready to Transform Your Fitness Journey?</h2>
    <p>Join our community and get personalized workout plans and nutrition advice.</p>
    <button className="cta-button" onClick={() => navigate("/")}>
      Back to home page
    </button>
  </div>
  <div className="cta-image-wrapper">
    <img
      src={CTAImage}
      alt="Transformation Journey"
      className="cta-image-modern"
    />
  </div>
</div>


      {/* Footer with improved layout */}
      <footer className="blog-footer">
        <div className="footer-carousel-wrapper">
          <div className="footer-carousel">
            <img src={FooterImage1} alt="Footer Inspiration 1" className="carousel-image" />
            <img src={FooterImage2} alt="Footer Inspiration 2" className="carousel-image" />
            <img src={FooterImage3} alt="Footer Inspiration 3" className="carousel-image" />
            {/* Duplicate images for seamless looping */}
            <img src={FooterImage1} alt="Footer Inspiration 1" className="carousel-image" />
            <img src={FooterImage2} alt="Footer Inspiration 2" className="carousel-image" />
            <img src={FooterImage3} alt="Footer Inspiration 3" className="carousel-image" />
          </div>
        </div>
        
      </footer>
    </div>
  );
};

export default BlogPage;