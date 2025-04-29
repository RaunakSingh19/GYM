import React, { useState } from 'react';
import ExerciseSearch from './ExerciseSearch';
import ExerciseList from './ExerciseList';

const ExercisePage = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>Find Exercises</h1>
      <ExerciseSearch onResults={setResults} />
      <ExerciseList exercises={results} />
    </div>
  );
};

export default ExercisePage;
