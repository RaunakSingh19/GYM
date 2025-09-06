const API_BASE_URL = 
  process.env.NODE_ENV === "production"
    ? "https://gym-itip.onrender.com"  // Your deployed backend
    : "http://localhost:5000";         // Local backend for development

export default API_BASE_URL;
