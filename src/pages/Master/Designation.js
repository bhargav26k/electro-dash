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

const Designation = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    designationName: "",
    description: "",
  });

  // State for the designations list
  const [designations, setDesignations] = useState([
    { designationName: "CO", description: "Chief Officer" },
    { designationName: "SE", description: "Section Engineer" },
    { designationName: "AC", description: "Accountant" },
    { designationName: "RC", description: "Receipt Clerk" },
    { designationName: "PRG", description: "Programmer" },
    { designationName: "MR", description: "Meter Reader" },
    { designationName: "SP", description: "Special Log In" },
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
      const updatedDesignations = [...designations];
      updatedDesignations[editIndex] = formData;
      setDesignations(updatedDesignations);
      setEditIndex(null);
    } else {
      // Add new entry
      setDesignations((prevDesignations) => [...prevDesignations, formData]);
    }
    setFormData({ designationName: "", description: "" });
  };

  // Handle edit
  const handleEdit = (index) => {
    setFormData(designations[index]);
    setEditIndex(index);
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedDesignations = designations.filter((_, i) => i !== index);
    setDesignations(updatedDesignations);
  };

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Designation Management
      </Typography>

      {/* Form Section */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Add / Edit Designation
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Designation Name"
              name="designationName"
              value={formData.designationName}
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
              onClick={() => setFormData({ designationName: "", description: "" })}
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
              <TableCell><b>Designation Name</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {designations.map((designation, index) => (
              <TableRow key={index}>
                <TableCell>{designation.designationName}</TableCell>
                <TableCell>{designation.description}</TableCell>
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

export default Designation;
