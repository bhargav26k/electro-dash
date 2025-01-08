import React, { useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";

const Zone = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    zoneName: "",
    description: "",
  });

  // State for the zone list
  const [zones, setZones] = useState([
    { zoneName: "Zone 1", description: "Malkapur Gavthan Parisar" },
    { zoneName: "Zone 2", description: "Zone 2" },
    { zoneName: "Zone 3", description: "Zone 3" },
    { zoneName: "Zone 4", description: "Zone 4" },
    { zoneName: "Zone 5", description: "Zone 5" },
    { zoneName: "Zone 6", description: "Zone 6" },
  ]);

  // State to track editing
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission (add or update)
  const handleSubmit = () => {
    if (editIndex !== null) {
      // Update existing entry
      const updatedZones = [...zones];
      updatedZones[editIndex] = formData;
      setZones(updatedZones);
      setEditIndex(null);
    } else {
      // Add new entry
      setZones((prevZones) => [...prevZones, formData]);
    }
    setFormData({ zoneName: "", description: "" });
  };

  // Handle edit
  const handleEdit = (index) => {
    setFormData(zones[index]);
    setEditIndex(index);
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedZones = zones.filter((_, i) => i !== index);
    setZones(updatedZones);
  };

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Zone Master
      </Typography>

      {/* Form Section */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Add / Edit Zone
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Zone Name"
              name="zoneName"
              value={formData.zoneName}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ marginRight: "10px" }}
            >
              {editIndex !== null ? "Update" : "Add"}
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => setFormData({ zoneName: "", description: "" })}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Zone Name</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {zones.map((zone, index) => (
              <TableRow key={index}>
                <TableCell>{zone.zoneName}</TableCell>
                <TableCell>{zone.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleEdit(index)}
                    style={{ marginRight: "5px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Zone;
