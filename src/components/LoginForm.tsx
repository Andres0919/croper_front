import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      navigate("/products");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      maxWidth={400}
      mx="auto"
      mt={10}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
      />

      <Box mt={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
