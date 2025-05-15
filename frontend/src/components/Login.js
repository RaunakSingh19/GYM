import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Lock, Email } from "@mui/icons-material";
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
  Link
} from "@mui/material";
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { email, password, role } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const user = { email, password, role };
    setLoading(true);

    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify(user);

      await axios.post("/api/auth/login", body, config);
      setLoading(false);
      role === "admin" ? navigate("/admin") : navigate("/client");
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Invalid credentials. Please try again.");
    }
  };

  return (
    <GradientBox>
      <FormBox>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 4 }}>
          Sign in to access your account
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

          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={onChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
            <FormLabel component="legend" sx={{ mb: 1, fontWeight: 'bold' }}>
              Login As
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
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <Link 
              component="button" 
              onClick={() => navigate("/register")} 
              sx={{ fontWeight: 'bold' }}
            >
              Register here
            </Link>
          </Typography>
        </form>
      </FormBox>
    </GradientBox>
  );
};

export default Login;