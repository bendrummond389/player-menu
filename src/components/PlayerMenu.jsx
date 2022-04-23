// player cards go here, also total all colors context

import React, { useState, useMemo } from 'react'
import { Grid } from '@mui/material'
import PlayerCard from './PlayerCard'
import { AvailableColorsContext } from '../contexts/AvailableColorsContext'



function PlayerMenu() {
  const [availableColors, setAvailableColors] = useState([
    {name: "None", id:"" , value: "", available: true},
    {name: "Red", id:"0" , value: "red", available: true},
    {name: "Blue", id: "1" , value: "blue", available: true},
    {name: "Green", id: "2", value: "green", available: true},
    {name: "Yellow", id: "3", value: "yellow", available: true},
  ])

  const providerAvailableColor = useMemo(() => (
    {availableColors, setAvailableColors}),
    [availableColors, setAvailableColors]);

  return (
    <AvailableColorsContext.Provider value={providerAvailableColor}>
      <Grid container justifyContent="center" spacing={10} marginTop={1}>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </Grid>
    </AvailableColorsContext.Provider>
  )
}

export default PlayerMenu