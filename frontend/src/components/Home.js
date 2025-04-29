import React from 'react';
import { Box } from '@mui/material';
import HomePage from './Homepage';
import CoachesPage from './CoachesPage';
import Exersises from './Exersises';
import Footer from './Footer';
import Navbar from './Navbar';
import ExercisesHP from './ExersiseHP';
import ToolsSection from './ToolsSection';
// import BMICalculator from './BMIcalculator';
import Program from './program'

const Home = () => {
  return (
    <Box>
      <Navbar/>
      <HomePage />
      <CoachesPage />
      <Exersises />
      <ExercisesHP />
      <ToolsSection />
      <Program />
      <Footer />
    </Box>
  );
};

export default Home;