import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel, 
  Alert,
  CircularProgress,
  InputAdornment,
  Link,
  Grid,
  IconButton
} from "@mui/material";
import { 
  Lock, 
  Email, 
  Person, 
  Visibility, 
  VisibilityOff 
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const GradientBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: theme.spacing(2),
}));

const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[10],
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '450px',
}));

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { name, email, password, password2, role } = formData;
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const onChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!name || !email || !password || !password2) {
      setError("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }

    const newUser = { name, email, password, role };
    setLoading(true);

    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify(newUser);

      await axios.post("/api/auth/register", body, config);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <GradientBox>
      <FormBox>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          Create an Account
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 4 }}>
          Join us today
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={onChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={onChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Confirm Password"
                name="password2"
                type={showPassword ? 'text' : 'password'}
                value={password2}
                onChange={onChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <FormControl component="fieldset" sx={{ mt: 2, mb: 3, width: '100%' }}>
            <FormLabel component="legend" sx={{ mb: 1, fontWeight: 'bold' }}>
              Register As
            </FormLabel>
            <RadioGroup row value={role} onChange={onChange} name="role">
              <FormControlLabel
                value="user"
                control={<Radio color="primary" />}
                label="User"
              />
              <FormControlLabel
                value="admin"
                control={<Radio color="primary" />}
                label="Admin"
              />
            </RadioGroup>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            disabled={loading}
            sx={{
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link 
              component="button" 
              onClick={() => navigate("/")} 
              sx={{ fontWeight: 'bold' }}
            >
              Login here
            </Link>
          </Typography>
        </form>
      </FormBox>
    </GradientBox>
  );
};

export default Register;