import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/gym-background.png"; // Import the image
import "../styles/HomeStyles.css"; 

const HomePage = () => {
  
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/fitnessclubBlog");
  };
  const handleLearnMore = () => {
    navigate("/learnmore");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "white",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        <h1 className="homepage-title">Welcome to PowerLiftZone</h1>
        <p className="homepage-description">
          The fitness facility for all of your needs
        </p>
        <div className="homepage-buttons">
        <button className="primary-button" 
        
        onClick={handleJoinNow}>
            Read More
          </button>
          <button className="secondary-button" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;