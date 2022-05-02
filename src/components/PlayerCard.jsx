// this component will house an image and a dropdown menu
// additionally it will hold a current color context for each
// card
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import { PlayerColorContext } from "../contexts/PlayerColorContext";

function PlayerCard(props) {
  const [playerColor, setPlayerColor] = useState("");

  const providerPlayerColor = useMemo(
    () => ({ playerColor, setPlayerColor }),
    [playerColor, setPlayerColor]
  );

  return (
    <Grid item>
      <PlayerColorContext.Provider value={providerPlayerColor}>
        <Card>
          <Typography variant="h4">Player {props.id}</Typography>
          <CardMedia
            component="img"
            height="140"
            image="https://i.stack.imgur.com/l60Hf.png"
            className={playerColor}
          />
          <CardContent>
            <DropdownMenu />
          </CardContent>
        </Card>
      </PlayerColorContext.Provider>
    </Grid>
  );
}

export default PlayerCard;
