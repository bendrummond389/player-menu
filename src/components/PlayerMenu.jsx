// player cards go here, also total all colors context

import React, { useState, useMemo } from "react";
import { Grid } from "@mui/material";
import PlayerCard from "./PlayerCard";
import { AvailableColorsContext } from "../contexts/AvailableColorsContext";
import Navbar from "./Navbar";
import { PlayerColorProvider } from "../contexts/PlayerColorContext";

function PlayerMenu() {
  const [availableColors, setAvailableColors] = useState([
    { name: "None", id: "0", value: "none", available: true },
    { name: "Red", id: "1", value: "red", available: true },
    { name: "Blue", id: "2", value: "blue", available: true },
    { name: "Green", id: "3", value: "green", available: true },
    { name: "Yellow", id: "4", value: "yellow", available: true },
  ]);

  const providerAvailableColor = useMemo(
    () => ({ availableColors, setAvailableColors }),
    [availableColors, setAvailableColors]
  );

  return (
    <AvailableColorsContext.Provider value={providerAvailableColor}>
      <PlayerColorProvider>
        <Navbar />
        <Grid container justifyContent="center" spacing={10} marginTop={1}>
          <PlayerCard id="0" />
          <PlayerCard id="1" />
          <PlayerCard id="2" />
          <PlayerCard id="3" />
        </Grid>
      </PlayerColorProvider>
    </AvailableColorsContext.Provider>
  );
}

export default PlayerMenu;
