// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/clientStyles.css';

// const Client = () => {
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate('/home');
//   };

//   return (
//     <div className="client-container">
//       <h1>Hello, welcome</h1>
//       <p>You have logged in successfully.</p>
//       <p>Let's go to the home page.</p>
//       <button onClick={handleRedirect}>Go to Home</button>
//     </div>
//   );
// };

// export default Client;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/clientStyles.css';

const Client = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/home');
  };

  return (
    <div className="client-container">
      <div className="content-wrapper">
        <h1 className="welcome-title">Hello, Welcome!</h1>
        <p className="welcome-message">You have logged in successfully.</p>
        <p className="welcome-subtext">Ready to achieve your fitness goals?</p>
        <button 
          className="home-button"
          onClick={handleRedirect}
        >
          Go to Home
          <span className="button-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default Client;