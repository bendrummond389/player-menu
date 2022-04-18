// this component will house an image and a dropdown menu
// additionally it will hold a current color context for each 
// card
import React from 'react'
import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import DropdownMenu from './DropdownMenu'

function PlayerCard() {
  return (
    <Grid item sx={6}>
      <Card>
        <CardMedia 
          component='img'
          height='140'
          image='https://i.stack.imgur.com/l60Hf.png'
        />
        <CardContent>
          <DropdownMenu />
        </CardContent>

      </Card>

    </Grid>
  )
}

export default PlayerCard