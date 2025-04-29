// import React, { useState } from "react";
// import { Box, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

// const CaloriesCalculator = () => {
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [activityLevel, setActivityLevel] = useState("");
//   const [calories, setCalories] = useState(null);

//   const activityMultipliers = {
//     sedentary: 1.2,
//     light: 1.375,
//     moderate: 1.55,
//     active: 1.725,
//     veryActive: 1.9,
//   };

//   const calculateCalories = () => {
//     if (!age || !gender || !weight || !height || !activityLevel) {
//       alert("Please fill all fields");
//       return;
//     }

//     let bmr = 0;
//     if (gender === "male") {
//       bmr = 10 * weight + 6.25 * height - 5 * age + 5;
//     } else if (gender === "female") {
//       bmr = 10 * weight + 6.25 * height - 5 * age - 161;
//     }

//     const maintenanceCalories = Math.round(bmr * activityMultipliers[activityLevel]);
//     const weightLossCalories = maintenanceCalories - 500;
//     const weightGainCalories = maintenanceCalories + 500;

//     setCalories({ maintenance: maintenanceCalories, loss: weightLossCalories, gain: weightGainCalories });
//   };

//   return (
//     <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
//       <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>Calorie Calculator</Typography>

//       <TextField label="Age" type="number" fullWidth sx={{ mb: 2 }} value={age} onChange={(e) => setAge(e.target.value)} />

//       <FormControl fullWidth sx={{ mb: 2 }}>
//         <InputLabel>Gender</InputLabel>
//         <Select value={gender} onChange={(e) => setGender(e.target.value)}>
//           <MenuItem value="male">Male</MenuItem>
//           <MenuItem value="female">Female</MenuItem>
//         </Select>
//       </FormControl>

//       <TextField label="Weight (kg)" type="number" fullWidth sx={{ mb: 2 }} value={weight} onChange={(e) => setWeight(e.target.value)} />

//       <TextField label="Height (cm)" type="number" fullWidth sx={{ mb: 2 }} value={height} onChange={(e) => setHeight(e.target.value)} />

//       <FormControl fullWidth sx={{ mb: 2 }}>
//         <InputLabel>Activity Level</InputLabel>
//         <Select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
//           <MenuItem value="sedentary">Sedentary (little or no exercise)</MenuItem>
//           <MenuItem value="light">Lightly active (1-3 days/week)</MenuItem>
//           <MenuItem value="moderate">Moderately active (3-5 days/week)</MenuItem>
//           <MenuItem value="active">Active (6-7 days/week)</MenuItem>
//           <MenuItem value="veryActive">Very active (hard exercise every day)</MenuItem>
//         </Select>
//       </FormControl>

//       <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={calculateCalories}>
//         Calculate
//       </Button>

//       {calories && (
//         <Box sx={{ mt: 3, textAlign: "center" }}>
//           <Typography variant="h6">Results:</Typography>
//           <Typography>⚡ Maintenance: {calories.maintenance} kcal/day</Typography>
//           <Typography>🔥 Weight Loss: {calories.loss} kcal/day</Typography>
//           <Typography>🍔 Weight Gain: {calories.gain} kcal/day</Typography>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default CaloriesCalculator;
import React, { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import boy1Image from "../assets/images/landscape-gym.png";
// import boy2Image from "../assets/images/muscle-boy2.png";

const CaloriesCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState(null);

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const calculateCalories = () => {
    if (!age || !gender || !weight || !height || !activityLevel) {
      alert("Please fill all fields");
      return;
    }

    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenanceCalories = Math.round(bmr * activityMultipliers[activityLevel]);
    const weightLossCalories = maintenanceCalories - 500;
    const weightGainCalories = maintenanceCalories + 500;

    setCalories({ maintenance: maintenanceCalories, loss: weightLossCalories, gain: weightGainCalories });
  };

  return (
    <Box sx={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      p: 2
    }}>
      {/* Left Image */}
      <Box sx={{
        display: { xs: 'none', lg: 'block' },
        flex: 1,
        textAlign: 'center',
        pr: 4
      }}>
        <img 
          src={boy1Image} 
          alt="Fitness illustration" 
          style={{ 
            maxHeight: '570px', 
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
            borderRadius: '20px'
          }} 
        />
      </Box>

      {/* Calculator Form */}
      <Box sx={{ 
        maxWidth: 500, 
        width: '100%',
        p: 4,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        zIndex: 1
      }}>
        <Typography variant="h4" sx={{ 
          mb: 3, 
          textAlign: 'center',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #3a7bd5, #00d2ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Calories Calculator
        </Typography>

        <TextField 
          label="Age" 
          type="number" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={age} 
          onChange={(e) => setAge(e.target.value)}
          variant="outlined"
          InputProps={{ sx: { borderRadius: '12px' } }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Gender</InputLabel>
          <Select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
            sx={{ borderRadius: '12px' }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>

        <TextField 
          label="Weight (kg)" 
          type="number" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}
          InputProps={{ sx: { borderRadius: '12px' } }}
        />

        <TextField 
          label="Height (cm)" 
          type="number" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
          InputProps={{ sx: { borderRadius: '12px' } }}
        />

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Activity Level</InputLabel>
          <Select 
            value={activityLevel} 
            onChange={(e) => setActivityLevel(e.target.value)}
            sx={{ borderRadius: '12px' }}
          >
            <MenuItem value="sedentary">Sedentary (little or no exercise)</MenuItem>
            <MenuItem value="light">Lightly active (1-3 days/week)</MenuItem>
            <MenuItem value="moderate">Moderately active (3-5 days/week)</MenuItem>
            <MenuItem value="active">Active (6-7 days/week)</MenuItem>
            <MenuItem value="veryActive">Very active (hard exercise every day)</MenuItem>
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          fullWidth 
          sx={{ 
            mt: 2,
            py: 1.5,
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #3a7bd5, #00d2ff)',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(58, 123, 213, 0.4)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(58, 123, 213, 0.6)'
            },
            transition: 'all 0.3s ease'
          }} 
          onClick={calculateCalories}
        >
          Calculate Calories
        </Button>

        {calories && (
          <Box sx={{ 
            mt: 4,
            p: 3,
            borderRadius: '12px',
            background: 'rgba(58, 123, 213, 0.1)',
            borderLeft: '4px solid #3a7bd5'
          }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#3a7bd5' }}>Your Daily Calorie Needs:</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Weight Loss</Typography>
                <Typography variant="h5" sx={{ color: '#ff4757', fontWeight: 'bold' }}>{calories.loss}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>kcal/day</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Maintenance</Typography>
                <Typography variant="h5" sx={{ color: '#2ed573', fontWeight: 'bold' }}>{calories.maintenance}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>kcal/day</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Weight Gain</Typography>
                <Typography variant="h5" sx={{ color: '#ffa502', fontWeight: 'bold' }}>{calories.gain}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>kcal/day</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Right Image */}
      <Box sx={{
        display: { xs: 'none', lg: 'block' },
        flex: 1,
        textAlign: 'center',
        pl: 4
      }}>
        <img 
          src={boy1Image} 
          alt="Fitness illustration" 
          style={{ 
            maxHeight: '570px', 
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
            borderRadius: '20px'
          }} 
        />
      </Box>
    </Box>
  );
};

export default CaloriesCalculator;