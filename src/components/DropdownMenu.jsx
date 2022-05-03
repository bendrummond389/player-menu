// will display available colors

import React, { useContext, useEffect, useState } from "react";
import { AvailableColorsContext } from "../contexts/AvailableColorsContext";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PlayerColorContext } from "../contexts/PlayerColorContext";
import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

function DropdownMenu(props) {
  const { playerColor, setPlayerColor } = useContext(PlayerColorContext);
  const { availableColors, setAvailableColors } = useContext(
    AvailableColorsContext
  );

  const [loaded, setLoaded] = useState(false);


  const toggleAvailableColors = (value) => {
    if(playerColor != "none"){
      let newArray = [...availableColors];
      let index = availableColors.findIndex(
        (color) => color.value === playerColor
      );
      newArray[index].available = value;
      setAvailableColors(newArray);
    }
  }

  const handleChange = (e) => {
    if (playerColor) {
      toggleAvailableColors(true);
    }
    setPlayerColor(e.target.value);
  };

  useEffect(() => {
    if (playerColor) {
      toggleAvailableColors(false);
      console.log(props.id, playerColor)
      const updatePlayer = httpsCallable(functions, "updatePlayerColor");
      updatePlayer({ index: props.id, color: playerColor });
    }
    // eslint-disable-next-line
  }, [playerColor]);

  useEffect(() => {
    async function fetchData() {
      const getPlayer = httpsCallable(functions, "getPlayerColor");
      let loadColor = await getPlayer({ index: props.id})
      console.log(loadColor)
      setPlayerColor(loadColor.data)
      setLoaded(true)
    }
    fetchData()
    
  }, [])

  let colorList = availableColors.map((color) => (
    <MenuItem
      key={color.id}
      value={color.value}
      sx={{
        ...(!color.available && {
          display: "none",
        }),
      }}
    >
      {color.name}
    </MenuItem>
  ));
  return (
    <FormControl fullWidth>
      <InputLabel id="color-select-label">Select Color</InputLabel>
      <Select
        labelId="color-select-label"
        id="color-select"
        label="Select Color"
        value={playerColor}
        onChange={handleChange}
      >
        {loaded && colorList}
      </Select>
    </FormControl>
  );
}

export default DropdownMenu;
