import { Button, Card, Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  let navigate = useNavigate()


  async function handleLogout(){
    setError('')

    try {
      await logout()
      navigate('/login')

    } catch{

      setError('log out unsuccessful')
    }
  }
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
      </Card>
    </Box>
  );
}
