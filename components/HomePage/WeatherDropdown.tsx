import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useAppDispatch } from "../../redux-hooks/hooks";
import { cityValue } from "../../slices/citySlice";

const WeatherDropdown = () => {
  const [city, setCity] = useState("Hanoi");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
    dispatch(cityValue(city));
  };

  return (
    <Box>
      <FormControl variant="standard" margin="none" fullWidth>
        <InputLabel id="weather-label">
          <p className="text-iwanttoColor">
            {city === "Saigon" ? "Ho Chi Minh City" : "Hanoi"}
          </p>
        </InputLabel>
        <Select
          labelId=""
          id="weather-label"
          value={city}
          onChange={handleChange}
        >
          <MenuItem selected value="Hanoi">
            Hanoi
          </MenuItem>
          <MenuItem value="Saigon">Ho Chi Minh City</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default WeatherDropdown;
