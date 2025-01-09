import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("password");

  const handleLogin = () => {
    // Check hardcoded credentials
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true"); // Persist login state
      onLogin(); // Notify parent to redirect
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth:"100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "40px",
          width: "400px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "12px",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "20px", fontWeight: "bold" }}>
          Water Billing Software
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: "30px" }}>
          Please login to continue
        </Typography>
        <Grid container spacing={2} justifycontent="center">
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              fullWidth
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
