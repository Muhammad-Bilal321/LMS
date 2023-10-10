import React, { useState } from "react";
import InputBP from "../Components/InputBP";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const InstituteList = () => {
  const [age, setAge] = useState("");
  const [logoImage, setLogoImage] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setLogoImage(file);
  };

  return (
    <div className="container text-center my-3">
      <h1>Institute List</h1>
      <form>
        <InputLabel htmlFor="logoImageInput" style={{ cursor: "pointer" }}>
          <img
            src={logoImage ? URL.createObjectURL(logoImage) : "#"}
            alt=""
            className="w-50 my-4"
          />
          Click to choose a logo image
        </InputLabel>
        <InputBP
          label={"Institute name"}
          type={"text"}
          className="w-100 my-4"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          id="logoImageInput"
        />

        <InputBP
          label={"No of campus"}
          type={"number"}
          className="w-100 my-4"
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth className="my-4">
            <InputLabel id="demo-simple-select-label">
              Active/inActive
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>InActive</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </form>
    </div>
  );
};

export default InstituteList;
