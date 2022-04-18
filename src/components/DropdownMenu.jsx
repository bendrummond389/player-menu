// will display available colors


import React, { useContext } from 'react'
import { AvailableColorsContext } from './contexts/AvailableColorsContext'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function DropdownMenu() {

  const availableColors = useContext(AvailableColorsContext)
  const colorList = availableColors.map((color) =>
    <MenuItem>{color}</MenuItem>
  )
  return (
    <FormControl fullWidth>
      <InputLabel id="color-select-label">Select Color</InputLabel>
      <Select
        labelId="color-select-label"
        id="color-select"
        label="Select Color"

      >
        {colorList}
      </Select>
    </FormControl>
  )
}

export default DropdownMenu