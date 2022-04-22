// will display available colors

import React, { useContext, useEffect } from "react";
import { AvailableColorsContext } from "../contexts/AvailableColorsContext";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PlayerColorContext } from "../contexts/PlayerColorContext";

function DropdownMenu() {
  const { playerColor, setPlayerColor } = useContext(PlayerColorContext);
  const { availableColors, setAvailableColors } = useContext(
    AvailableColorsContext
  );

  const handleChange = (e) => {
    console.log(playerColor)
    if (playerColor){
      let newArray = [...availableColors];
      let index = availableColors.findIndex(
        (color) => color.value === playerColor
      );
      newArray[index].available = true;
      setAvailableColors(newArray);
    }
  setPlayerColor(e.target.value);
  };

  useEffect(() => {
    if (playerColor) {
      let newArray = [...availableColors];
      let index = availableColors.findIndex(
        (color) => color.value === playerColor
      );
      newArray[index].available = false;
      setAvailableColors(newArray);
    }
  }, [playerColor]);

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
        {colorList}
      </Select>
    </FormControl>
  );
}

export default DropdownMenu;
