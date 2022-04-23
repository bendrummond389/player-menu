import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <Box textAlign="center" mt={50}>
        <Link to="/menu" style={{textDecoration: 'none'}}> <Button>Proceed to player select</Button></Link>
      </Box>
    </div>
  )
}

export default LandingPage