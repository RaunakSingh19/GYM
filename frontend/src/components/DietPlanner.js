import React, { useState } from 'react';
import { Box, Typography, Grid, TextField,Container, Button, Select, MenuItem, FormControl, InputLabel, Card, Divider } from '@mui/material';
import { Calculate, Restaurant, FitnessCenter } from '@mui/icons-material';

const DietPlanner = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    activityLevel: '',
    sleepHours: '',
    workType: '',
    gender: ''
  });

  const [dietPlan, setDietPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateDiet = () => {
    // Basic validation
    if (!formData.age || !formData.height || !formData.weight || !formData.activityLevel) {
      alert('Please fill all required fields');
      return;
    }

    // Generate diet plan based on inputs
    const plan = generateDietPlan(formData);
    setDietPlan(plan);
  };

  const generateDietPlan = (data) => {
    const { age, height, weight, activityLevel, sleepHours, workType, gender } = data;
    
    // Calculate BMI (simplified)
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    // Determine calorie needs
    let baseCalories;
    if (gender === 'male') {
      baseCalories = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      baseCalories = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    const dailyCalories = Math.round(baseCalories * activityMultipliers[activityLevel]);

    // Work type adjustments
    let workAdjustment = 0;
    if (workType === 'field') workAdjustment = 200;
    else if (workType === 'service') workAdjustment = 100;

    // Sleep quality impact
    const sleepQuality = sleepHours >= 7 ? 'good' : 'needs improvement';

    // Generate diet plan
    return {
      bmi,
      dailyCalories: dailyCalories + workAdjustment,
      sleepQuality,
      macronutrients: {
        protein: Math.round((dailyCalories * 0.3) / 4),
        carbs: Math.round((dailyCalories * 0.4) / 4),
        fats: Math.round((dailyCalories * 0.3) / 9)
      },
      mealPlan: generateMealPlan(activityLevel, workType, sleepQuality),
      easyDigestFoods: getEasyDigestFoods()
    };
  };

  const generateMealPlan = (activityLevel, workType, sleepQuality) => {
    // Sample meal plans based on activity level
    const plans = {
      sedentary: {
        breakfast: "Oatmeal with berries + Green tea",
        snack: "Handful of almonds",
        lunch: "Grilled chicken salad + Quinoa",
        snack: "Greek yogurt with flaxseeds",
        dinner: "Baked fish + Steamed vegetables"
      },
      moderate: {
        breakfast: "Scrambled eggs + Avocado toast + Smoothie",
        snack: "Protein shake + Banana",
        lunch: "Brown rice + Grilled chicken + Mixed vegetables",
        snack: "Cottage cheese + Walnuts",
        dinner: "Lean steak + Sweet potato + Broccoli"
      },
      active: {
        breakfast: "Protein pancakes + Peanut butter + Chia seeds",
        snack: "Hard-boiled eggs + Whole grain crackers",
        lunch: "Whole wheat pasta + Turkey meatballs + Salad",
        snack: "Hummus + Vegetable sticks",
        dinner: "Salmon + Quinoa + Asparagus"
      }
    };

    // Select plan based on activity
    let selectedPlan;
    if (activityLevel === 'sedentary') selectedPlan = plans.sedentary;
    else if (activityLevel === 'light' || activityLevel === 'moderate') selectedPlan = plans.moderate;
    else selectedPlan = plans.active;

    // Adjust for work type
    if (workType === 'field') {
      selectedPlan.snack = "Energy bar + Nuts" + (selectedPlan.snack ? " + " + selectedPlan.snack : "");
    }

    // Adjust for sleep
    if (sleepQuality === 'needs improvement') {
      selectedPlan.dinner += " + Chamomile tea";
    }

    return selectedPlan;
  };

  const getEasyDigestFoods = () => {
    return [
      "Bananas", "White rice", "Toast", "Applesauce", "Eggs",
      "Sweet potatoes", "Chicken breast", "Oatmeal", "Salmon",
      "Avocado", "Spinach", "Pumpkin", "Papaya", "Ginger tea",
      "Yogurt (with probiotics)", "Coconut water", "Zucchini",
      "Miso soup", "Bone broth", "Steamed carrots"
    ];
  };

  return (
    <Box sx={{ 
      py: 6, 
      px: { xs: 2, md: 4 },
      background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',marginTop: "80px"
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ 
          mb: 4, 
          fontWeight: 800,
          color: '#d81b60',
          textAlign: 'center'
        }}>
          Personalized Diet Planner
        </Typography>

        <Typography variant="body1" sx={{ 
          mb: 6, 
          textAlign: 'center',
          maxWidth: 800,
          mx: 'auto',
          color: 'text.secondary'
        }}>
          Get customized nutrition recommendations based on your lifestyle, activity level, and body metrics for optimal health and performance.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              p: 3, 
              borderRadius: 3,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)'
            }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                <FitnessCenter sx={{ mr: 1, color: '#d81b60' }} /> Your Metrics
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Age (years)"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Height (cm)"
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Weight (kg)"
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      label="Gender"
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Activity Level</InputLabel>
                    <Select
                      name="activityLevel"
                      value={formData.activityLevel}
                      onChange={handleChange}
                      label="Activity Level"
                    >
                      <MenuItem value="sedentary">Sedentary (little exercise)</MenuItem>
                      <MenuItem value="light">Light (1-3 days/week)</MenuItem>
                      <MenuItem value="moderate">Moderate (3-5 days/week)</MenuItem>
                      <MenuItem value="active">Active (6-7 days/week)</MenuItem>
                      <MenuItem value="veryActive">Very Active (2x/day)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Avg. Sleep (hours)"
                    type="number"
                    name="sleepHours"
                    value={formData.sleepHours}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Work Type</InputLabel>
                    <Select
                      name="workType"
                      value={formData.workType}
                      onChange={handleChange}
                      label="Work Type"
                    >
                      <MenuItem value="computer">Computer-based</MenuItem>
                      <MenuItem value="field">Field work</MenuItem>
                      <MenuItem value="service">Service industry</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<Calculate />}
                onClick={calculateDiet}
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2,
                  backgroundColor: '#d81b60',
                  '&:hover': {
                    backgroundColor: '#b91451',
                  },
                }}
              >
                Generate Diet Plan
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            {dietPlan ? (
              <Card sx={{ 
                p: 3, 
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                height: '100%'
              }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                  <Restaurant sx={{ mr: 1, color: '#d81b60' }} /> Your Diet Plan
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                    Daily Nutrition Summary
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    BMI: <strong>{dietPlan.bmi}</strong> • Calories: <strong>{dietPlan.dailyCalories} kcal/day</strong>
                  </Typography>
                  <Typography variant="body1">
                    Sleep Quality: <strong style={{ color: dietPlan.sleepQuality === 'good' ? '#4CAF50' : '#FF9800' }}>
                      {dietPlan.sleepQuality}
                    </strong>
                  </Typography>
                  
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, backgroundColor: 'rgba(76, 175, 80, 0.1)', borderRadius: 2 }}>
                        <Typography variant="h6" color="#4CAF50">{dietPlan.macronutrients.protein}g</Typography>
                        <Typography variant="caption">Protein</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, backgroundColor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                        <Typography variant="h6" color="#2196F3">{dietPlan.macronutrients.carbs}g</Typography>
                        <Typography variant="caption">Carbs</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: 2 }}>
                        <Typography variant="h6" color="#FF9800">{dietPlan.macronutrients.fats}g</Typography>
                        <Typography variant="caption">Fats</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                    Daily Meal Plan
                  </Typography>
                  <Box sx={{ 
                    backgroundColor: 'rgba(216, 27, 96, 0.05)',
                    borderRadius: 2,
                    p: 2
                  }}>
                    {Object.entries(dietPlan.mealPlan).map(([meal, description]) => (
                      <Box key={meal} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                          {meal}:
                        </Typography>
                        <Typography variant="body1">{description}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                    Top 20 Easy-to-Digest Foods
                  </Typography>
                  <Grid container spacing={1}>
                    {dietPlan.easyDigestFoods.map((food, index) => (
                      <Grid item xs={6} sm={4} key={index}>
                        <Typography variant="body2" sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          '&:before': {
                            content: '"•"',
                            color: '#d81b60',
                            mr: 1
                          }
                        }}>
                          {food}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            ) : (
              <Box sx={{ 
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                borderRadius: 3,
                p: 4,
                textAlign: 'center'
              }}>
                <Typography variant="h6" color="text.secondary">
                  Enter your metrics and generate a personalized diet plan
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DietPlanner;