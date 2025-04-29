import React from 'react';

const ExerciseList = ({ exercises }) => {
  if (exercises.length === 0) return <p>No exercises found.</p>;

  return (
    <div className="exercise-list">
      {exercises.map(ex => (
        <div key={ex.id} className="exercise-card">
          <h3>{ex.name}</h3>
          <p>Target: {ex.target}</p>
          <p>Body Part: {ex.bodyPart}</p>
          <img src={ex.gifUrl} alt={ex.name} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
