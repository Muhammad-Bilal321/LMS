import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const InstituteForm = () => {
  const [instituteName, setInstituteName] = useState("");
  const [shortName, setShortName] = useState("");
  const [numOfCampus, setNumOfCampus] = useState(1);
  const [campusDetails, setCampusDetails] = useState([
    {
      location: "",
      address: "",
      contact: "",
      ownerContact: "",
      ownerEmail: "",
      userType: "Institute",
      instituteType: "School",
    },
  ]);

  const handleCampusChange = (index, field, value) => {
    const updatedCampusDetails = [...campusDetails];
    updatedCampusDetails[index][field] = value;
    setCampusDetails(updatedCampusDetails);
  };

  const addCampus = (e) => {
    e.preventDefault();
    setCampusDetails([
      ...campusDetails,
      {
        location: "",
        address: "",
        contact: "",
        ownerContact: "",
        ownerEmail: "",
        userType: "Institute",
        instituteType: "School",
      },
    ]);
    setNumOfCampus(numOfCampus + 1);
    console.log(...campusDetails);
  };

  const removeCampus = (index) => {
    const updatedCampusDetails = [...campusDetails];
    updatedCampusDetails.splice(index, 1);
    setCampusDetails(updatedCampusDetails);
    setNumOfCampus(numOfCampus - 1);
  };

  return (
    <form className="container text-center">
      <Typography variant="h4" gutterBottom>
        Institute Form
      </Typography>
      <TextField
        label="Institute Name"
        fullWidth
        value={instituteName}
        onChange={(e) => setInstituteName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Short Name"
        fullWidth
        value={shortName}
        onChange={(e) => setShortName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Number of Campuses"
        type="number"
        fullWidth
        value={numOfCampus}
        disabled
        margin="normal"
      />
      <Typography variant="h5" gutterBottom>
        Campus Details
      </Typography>
      {campusDetails.map((campus, index) => (
        <div key={index}>
          <Typography variant="h6" gutterBottom>
            Campus {index + 1}
          </Typography>
          <TextField
            label="Location"
            fullWidth
            value={campus.location}
            onChange={(e) =>
              handleCampusChange(index, "location", e.target.value)
            }
            margin="normal"
          />
          <TextField
            label="Address"
            fullWidth
            value={campus.address}
            onChange={(e) =>
              handleCampusChange(index, "address", e.target.value)
            }
            margin="normal"
          />
          <TextField
            label="Contact"
            fullWidth
            value={campus.contact}
            onChange={(e) =>
              handleCampusChange(index, "contact", e.target.value)
            }
            margin="normal"
          />
          <TextField
            label="Owner Contact"
            fullWidth
            value={campus.ownerContact}
            onChange={(e) =>
              handleCampusChange(index, "ownerContact", e.target.value)
            }
            margin="normal"
          />
          <TextField
            label="Owner Email"
            fullWidth
            value={campus.ownerEmail}
            onChange={(e) =>
              handleCampusChange(index, "ownerEmail", e.target.value)
            }
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>User Type</InputLabel>
            <Select
              value={campus.userType}
              onChange={(e) =>
                handleCampusChange(index, "userType", e.target.value)
              }
            >
              <MenuItem value="Institute">Institute</MenuItem>
              <MenuItem value="School">School</MenuItem>
              <MenuItem value="College">College</MenuItem>
              <MenuItem value="University">University</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Institute Type</InputLabel>
            <Select
              value={campus.instituteType}
              onChange={(e) =>
                handleCampusChange(index, "instituteType", e.target.value)
              }
            >
              <MenuItem value="School">School</MenuItem>
              <MenuItem value="College">College</MenuItem>
              <MenuItem value="University">University</MenuItem>
              <MenuItem value="Institute">Institute</MenuItem>
            </Select>
          </FormControl>
          {index > 0 && (
            <Button
              variant="outlined"
              color="error"
              className="w-25 m-2"
              startIcon={<DeleteIcon />}
              onClick={() => removeCampus(index)}
            >
              Remove Campus
            </Button>
          )}
        </div>
      ))}
      <Button
        variant="outlined"
        color="primary"
        className="w-25 m-2"
        startIcon={<AddIcon />}
        onClick={addCampus}
        type="submit"
      >
        Add Campus
      </Button>
    </form>
  );
};

export default InstituteForm;
