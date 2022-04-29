import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  Button,
  Container,
  Alert,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("password") !== data.get("passwordConfirm")) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(data.get("email"), data.get("password"));
    } catch {
      setError("Failed to create account");
    }

    setLoading(false);
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ padding: 5 }}>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="Confirm Password"
              type="password"
              id="passwordConfirm"
              autoComplete="current-password"
            />
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
