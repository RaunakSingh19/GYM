import React from "react";
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Container,
  Chip,
  TextField,
  InputAdornment,
  Grid,
  Card,
} from "@mui/material";
import { Search, Whatshot, TrendingUp, BatteryFull, Scale } from "@mui/icons-material";

const proteinData = [
  // Animal-based proteins (1-25)
  { id: 1, name: "Whey Protein Isolate", digestion: "95-99%", type: "Dairy", calories: 110, protein: 25, carbs: 1, fat: 0.5, serving: "30g scoop", quality: "Excellent" },
  { id: 2, name: "Egg (Whole)", digestion: "95-98%", type: "Poultry", calories: 143, protein: 13, carbs: 1, fat: 10, serving: "1 large (50g)", quality: "Excellent" },
  { id: 3, name: "Egg White", digestion: "91-94%", type: "Poultry", calories: 52, protein: 11, carbs: 0.7, fat: 0.2, serving: "1 large (33g)", quality: "Excellent" },
  { id: 4, name: "Casein Protein", digestion: "92-96%", type: "Dairy", calories: 120, protein: 24, carbs: 3, fat: 1, serving: "30g scoop", quality: "Excellent" },
  { id: 5, name: "Chicken Breast", digestion: "90-95%", type: "Poultry", calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: "100g cooked", quality: "Excellent" },
  { id: 6, name: "Turkey Breast", digestion: "90-94%", type: "Poultry", calories: 135, protein: 29, carbs: 0, fat: 1.7, serving: "100g cooked", quality: "Excellent" },
  { id: 7, name: "Salmon", digestion: "90-94%", type: "Fish", calories: 208, protein: 20, carbs: 0, fat: 13, serving: "100g cooked", quality: "Excellent" },
  { id: 8, name: "Lean Beef", digestion: "88-92%", type: "Red Meat", calories: 250, protein: 26, carbs: 0, fat: 15, serving: "100g cooked", quality: "Excellent" },
  { id: 9, name: "Pork Tenderloin", digestion: "85-90%", type: "Red Meat", calories: 143, protein: 26, carbs: 0, fat: 3.5, serving: "100g cooked", quality: "Excellent" },
  { id: 10, name: "Greek Yogurt", digestion: "88-93%", type: "Dairy", calories: 59, protein: 10, carbs: 3.6, fat: 0.4, serving: "100g", quality: "Excellent" },
  { id: 11, name: "Cottage Cheese", digestion: "85-90%", type: "Dairy", calories: 98, protein: 11, carbs: 3.4, fat: 4.3, serving: "100g", quality: "Excellent" },
  { id: 12, name: "Tuna", digestion: "89-93%", type: "Fish", calories: 132, protein: 29, carbs: 0, fat: 1, serving: "100g canned", quality: "Excellent" },
  { id: 13, name: "Shrimp", digestion: "87-92%", type: "Seafood", calories: 99, protein: 24, carbs: 0.2, fat: 0.3, serving: "100g cooked", quality: "Excellent" },
  { id: 14, name: "Lamb Chop", digestion: "85-89%", type: "Red Meat", calories: 294, protein: 25, carbs: 0, fat: 21, serving: "100g cooked", quality: "Good" },
  { id: 15, name: "Duck Breast", digestion: "84-88%", type: "Poultry", calories: 337, protein: 19, carbs: 0, fat: 28, serving: "100g cooked", quality: "Good" },
  
  // Plant-based proteins (26-50)
  { id: 26, name: "Soy Protein Isolate", digestion: "88-92%", type: "Legume", calories: 88, protein: 22, carbs: 1, fat: 0.5, serving: "30g", quality: "Excellent" },
  { id: 27, name: "Tofu (Firm)", digestion: "85-90%", type: "Legume", calories: 144, protein: 15, carbs: 3.4, fat: 8.7, serving: "100g", quality: "Good" },
  { id: 28, name: "Tempeh", digestion: "83-87%", type: "Legume", calories: 193, protein: 19, carbs: 9, fat: 11, serving: "100g", quality: "Good" },
  { id: 29, name: "Edamame", digestion: "82-86%", type: "Legume", calories: 121, protein: 12, carbs: 9, fat: 5, serving: "100g cooked", quality: "Good" },
  { id: 30, name: "Lentils", digestion: "78-85%", type: "Legume", calories: 116, protein: 9, carbs: 20, fat: 0.4, serving: "100g cooked", quality: "Good" },
  { id: 31, name: "Chickpeas", digestion: "75-82%", type: "Legume", calories: 164, protein: 9, carbs: 27, fat: 2.6, serving: "100g cooked", quality: "Good" },
  { id: 32, name: "Black Beans", digestion: "76-81%", type: "Legume", calories: 132, protein: 9, carbs: 24, fat: 0.5, serving: "100g cooked", quality: "Good" },
  { id: 33, name: "Quinoa", digestion: "80-85%", type: "Grain", calories: 120, protein: 4.4, carbs: 21, fat: 1.9, serving: "100g cooked", quality: "Good" },
  { id: 34, name: "Pea Protein", digestion: "78-83%", type: "Legume", calories: 100, protein: 23, carbs: 1, fat: 0.5, serving: "30g", quality: "Good" },
  { id: 35, name: "Hemp Seeds", digestion: "75-80%", type: "Seed", calories: 553, protein: 32, carbs: 9, fat: 49, serving: "100g", quality: "Good" },
  { id: 36, name: "Chia Seeds", digestion: "70-75%", type: "Seed", calories: 486, protein: 17, carbs: 42, fat: 31, serving: "100g", quality: "Good" },
  { id: 37, name: "Almonds", digestion: "72-78%", type: "Nut", calories: 579, protein: 21, carbs: 22, fat: 50, serving: "100g", quality: "Good" },
  { id: 38, name: "Peanut Butter", digestion: "75-85%", type: "Legume", calories: 588, protein: 25, carbs: 20, fat: 50, serving: "100g", quality: "Good" },
  { id: 39, name: "Spirulina", digestion: "85-90%", type: "Algae", calories: 290, protein: 57, carbs: 24, fat: 8, serving: "100g", quality: "Excellent" },
  { id: 40, name: "Seitan", digestion: "80-85%", type: "Wheat", calories: 370, protein: 75, carbs: 14, fat: 1.9, serving: "100g", quality: "Good" }
];

const ProteinDashboard = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filter, setFilter] = React.useState("all");

  const filteredData = proteinData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || item.type.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <Box sx={{ 
      py: 6, 
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",marginTop: "80px"
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800,
            mb: 2,
            color: "#d81b60",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2
          }}>
            <Whatshot fontSize="large" /> Protein Nutrition Dashboard
          </Typography>
          <Typography variant="body1" sx={{ 
            color: "text.secondary",
            maxWidth: 700,
            mx: "auto"
          }}>
            Comprehensive analysis of 50 protein sources with digestion rates, macronutrient profiles, and quality ratings
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Protein Quality Indicators
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ 
                    p: 2,
                    backgroundColor: "rgba(76, 175, 80, 0.1)",
                    borderRadius: 2,
                    textAlign: "center"
                  }}>
                    <TrendingUp sx={{ color: "#4CAF50", fontSize: 40, mb: 1 }} />
                    <Typography variant="body2">Digestibility</Typography>
                    <Typography variant="h6">90-99%</Typography>
                    <Typography variant="caption">(Excellent Sources)</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ 
                    p: 2,
                    backgroundColor: "rgba(33, 150, 243, 0.1)",
                    borderRadius: 2,
                    textAlign: "center"
                  }}>
                    <BatteryFull sx={{ color: "#2196F3", fontSize: 40, mb: 1 }} />
                    <Typography variant="body2">Protein Density</Typography>
                    <Typography variant="h6">20-30g</Typography>
                    <Typography variant="caption">(Per 100g)</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Quick Filters
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                <Chip label="All" onClick={() => setFilter("all")} color={filter === "all" ? "primary" : "default"} />
                <Chip label="Dairy" onClick={() => setFilter("dairy")} color={filter === "dairy" ? "primary" : "default"} />
                <Chip label="Poultry" onClick={() => setFilter("poultry")} color={filter === "poultry" ? "primary" : "default"} />
                <Chip label="Fish" onClick={() => setFilter("fish")} color={filter === "fish" ? "primary" : "default"} />
                <Chip label="Plant" onClick={() => setFilter("legume")} color={filter === "legume" ? "primary" : "default"} />
              </Box>
              <TextField
                fullWidth
                placeholder="Search proteins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Card>
          </Grid>
        </Grid>

        <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="protein table">
              <TableHead sx={{ backgroundColor: "#d81b60" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>Protein Source</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Digestion Rate</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Type</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Calories</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Protein (g)</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Carbs (g)</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Fat (g)</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Serving Size</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Quality</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      <Chip 
                        label={row.digestion} 
                        size="small"
                        sx={{ 
                          backgroundColor: row.digestion >= "90%" ? "rgba(76, 175, 80, 0.2)" : 
                                    row.digestion >= "80%" ? "rgba(255, 152, 0, 0.2)" : "rgba(244, 67, 54, 0.2)",
                          color: row.digestion >= "90%" ? "#4CAF50" : 
                                row.digestion >= "80%" ? "#FF9800" : "#F44336"
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600 }}>{row.protein}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.serving}</TableCell>
                    <TableCell align="center">
                      <Chip 
                        label={row.quality} 
                        size="small"
                        color={row.quality === "Excellent" ? "success" : 
                              row.quality === "Good" ? "warning" : "error"}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        <Box sx={{ mt: 4, p: 3, backgroundColor: "rgba(216, 27, 96, 0.05)", borderRadius: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            <Scale sx={{ mr: 1, verticalAlign: "middle" }} /> Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <span style={{ color: "#4CAF50", fontWeight: 600, width: "120px" }}>Best Digestion:</span>
                <span>Whey, Eggs, Fish (90-99%)</span>
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <span style={{ color: "#FF9800", fontWeight: 600, width: "120px" }}>Moderate:</span>
                <span>Beef, Pork, Tofu (85-90%)</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <span style={{ color: "#F44336", fontWeight: 600, width: "120px" }}>Lower Digestion:</span>
                <span>Legumes, Grains (70-85%)</span>
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <span style={{ color: "#2196F3", fontWeight: 600, width: "120px" }}>Protein Density:</span>
                <span>Highest in meats, dairy, and isolates</span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProteinDashboard;