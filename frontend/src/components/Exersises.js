import React from 'react';
import { Box } from "@mui/material";
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import ExercisesHP from './ExersiseHP';

const Exercises = () => {
  return (
    <Box sx={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: { xs: '20px', md: '40px' },
    }}>
      
      <ExercisesHP />
      <SectionTwo />
      <SectionOne />
    </Box>
  );
};

export default Exercises;
