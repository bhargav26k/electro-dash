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

const TariffSize = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    tariffSize: "",
    description: "",
  });

  // State for the tariff size list
  const [tariffSizes, setTariffSizes] = useState([
    { tariffSize: "1/2\"", description: "1/2\"" },
    { tariffSize: "3/4\"", description: "3/4\"" },
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
      const updatedTariffSizes = [...tariffSizes];
      updatedTariffSizes[editIndex] = formData;
      setTariffSizes(updatedTariffSizes);
      setEditIndex(null);
    } else {
      // Add new entry
      setTariffSizes((prevTariffSizes) => [...prevTariffSizes, formData]);
    }
    setFormData({ tariffSize: "", description: "" });
  };

  // Handle edit
  const handleEdit = (index) => {
    setFormData(tariffSizes[index]);
    setEditIndex(index);
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedTariffSizes = tariffSizes.filter((_, i) => i !== index);
    setTariffSizes(updatedTariffSizes);
  };

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Tariff Size Management
      </Typography>

      {/* Form Section */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Add / Edit Tariff Size
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Tariff Size"
              name="tariffSize"
              value={formData.tariffSize}
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
              onClick={() => setFormData({ tariffSize: "", description: "" })}
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
              <TableCell><b>Tariff Size</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tariffSizes.map((tariff, index) => (
              <TableRow key={index}>
                <TableCell>{tariff.tariffSize}</TableCell>
                <TableCell>{tariff.description}</TableCell>
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

export default TariffSize;
