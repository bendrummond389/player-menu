// player cards go here, also total all colors context

import React, { useState } from 'react'
import { Grid } from '@mui/material'
import PlayerCard from './PlayerCard'
import { AvailableColorsContext } from './contexts/AvailableColorsContext'



function PlayerMenu() {
  const [availableColors, setAvailableColors] = useState(["Red", "Blue", "Green", "Yellow"])

  return (
    <AvailableColorsContext.Provider value={availableColors}>
      <Grid container justifyContent="center" spacing={20}>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </Grid>
    </AvailableColorsContext.Provider>
  )
}

export default PlayerMenu