import { Button, Card, Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useImage } from "../contexts/ImageContext"

export default function LogoutButton() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const { removeImage } = useImage();
  let navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      removeImage()
      await logout();
      navigate("/login");
    } catch {
      setError("log out unsuccessful");
    }
  }
  return (
    <Button variant="link" onClick={handleLogout}>
      Log Out
    </Button>
  );
}
