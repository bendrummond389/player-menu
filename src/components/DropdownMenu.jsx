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

  const toggleAvailableColors = (value) => {
    let newArray = [...availableColors];
    let index = availableColors.findIndex(
      (color) => color.value === playerColor
    );
    newArray[index].available = value;
    setAvailableColors(newArray);
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
    }
    // eslint-disable-next-line
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
