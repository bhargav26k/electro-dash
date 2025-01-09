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
  InputAdornment,
  Select,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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

  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

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

  // Handle search and pagination
  const filteredData = tariffSizes.filter((tariff) =>
    Object.values(tariff)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handlePageChange = (direction) => {
    if (direction === "next" && page < totalPages - 1) setPage(page + 1);
    if (direction === "prev" && page > 0) setPage(page - 1);
    if (direction === "first") setPage(0);
    if (direction === "last") setPage(totalPages - 1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Grid
        container
        alignItems="center"
        justifycontent="space-between"
        style={{ marginBottom: "20px" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Tariff Size Management</Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "right" }}>
          <TextField
            label="Search Tariff Sizes"
            variant="outlined"
            style={{
              maxWidth: "400px",
              marginLeft: "auto",
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                padding: "5px 10px", // Adjusted padding to reduce height
                height: "36px", // Set explicit height
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "14px", // Adjusted label font size
                top: "-4px", // Align label better with reduced height
              },
            }}
          />
        </Grid>
      </Grid>

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
              <TableCell>
                <b>Tariff Size</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((tariff, index) => (
              <TableRow key={index}>
                <TableCell>{tariff.tariffSize}</TableCell>
                <TableCell>{tariff.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleEdit(index)}
                    style={{ marginRight: "5px", marginBottom:"5px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleDelete(index)}
                    style={{ marginRight: "5px", marginBottom:"5px" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid
        container
        alignItems="center"
        justifycontent="space-between"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* First and Previous Buttons */}
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => handlePageChange("first")}
            disabled={page === 0}
            style={{ marginRight: "10px", minWidth: "80px" }}
          >
            First
          </Button>
          <Button
            variant="outlined"
            onClick={() => handlePageChange("prev")}
            disabled={page === 0}
            style={{ minWidth: "80px", marginRight: "10px" }}
          >
            Previous
          </Button>
        </Grid>

        {/* Current Page Display */}
        <Grid item>
          <Typography
            variant="body1"
            style={{
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Page <strong>{page + 1}</strong> of <strong>{totalPages}</strong>
          </Typography>
        </Grid>

        {/* Next and Last Buttons */}
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => handlePageChange("next")}
            disabled={page >= totalPages - 1}
            style={{ marginRight: "10px", minWidth: "80px", marginLeft: "10px" }}
          >
            Next
          </Button>
          <Button
            variant="outlined"
            onClick={() => handlePageChange("last")}
            disabled={page >= totalPages - 1}
            style={{ minWidth: "80px", marginRight: "10px" }}
          >
            Last
          </Button>
        </Grid>

        {/* Rows Per Page Selector */}
        <Grid item>
          <Typography
            variant="body2"
            style={{
              fontWeight: "500",
              marginRight: "10px",
              display: "inline-block",
            }}
          >
            Rows per page:
          </Typography>
          <Select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            variant="outlined"
            style={{
              width: "80px",
              fontSize: "14px",
              padding: "5px 10px",
              height: "36px",
              lineHeight: "1.5",
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TariffSize;
