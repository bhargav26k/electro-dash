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

const ConstructionType = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    constTypeName: "",
    description: "",
  });

  // State for the construction type list
  const [constructionTypes, setConstructionTypes] = useState([
    { constTypeName: "School", description: "School" },
    { constTypeName: "Appartment", description: "Appartment" },
    { constTypeName: "Hotel", description: "Hotel" },
    { constTypeName: "House", description: "House" },
    { constTypeName: "Shop", description: "Shop" },
    { constTypeName: "Commercial", description: "Commercial" },
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
      const updatedTypes = [...constructionTypes];
      updatedTypes[editIndex] = formData;
      setConstructionTypes(updatedTypes);
      setEditIndex(null);
    } else {
      // Add new entry
      setConstructionTypes((prevTypes) => [...prevTypes, formData]);
    }
    setFormData({ constTypeName: "", description: "" });
  };

  // Handle edit
  const handleEdit = (index) => {
    setFormData(constructionTypes[index]);
    setEditIndex(index);
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedTypes = constructionTypes.filter((_, i) => i !== index);
    setConstructionTypes(updatedTypes);
  };

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Construction Type Master
      </Typography>

      {/* Form Section */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Add / Edit Construction Type
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Construction Type Name"
              name="constTypeName"
              value={formData.constTypeName}
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
              onClick={() => setFormData({ constTypeName: "", description: "" })}
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
              <TableCell><b>Construction Type Name</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {constructionTypes.map((type, index) => (
              <TableRow key={index}>
                <TableCell>{type.constTypeName}</TableCell>
                <TableCell>{type.description}</TableCell>
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

export default ConstructionType;
