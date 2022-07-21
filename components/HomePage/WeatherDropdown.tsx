import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const WeatherDropdown = () => {
  const [city, setCity] = useState("Hanoi");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" margin="none">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value="Hanoi">Hanoi</MenuItem>
          <MenuItem value="Saigon">Ho Chi Minh City</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default WeatherDropdown;
