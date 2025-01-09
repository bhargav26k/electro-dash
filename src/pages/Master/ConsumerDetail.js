import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  TextField,
  TablePagination,
  InputAdornment,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core";


import SearchIcon from "@material-ui/icons/Search";

const ConsumerDetail = () => {
  // Hardcoded sample data for multiple consumers
  const consumerData = [
    {
      consumerNo: "C123",
      consumerName: "John Doe",
      address: "123, Main Street",
      city: "Malkapur",
      pinCode: "411001",
      contactNos: "9876543210",
      connectionType: "Type 1",
      meterNo: "MTR123",
    },
    {
      consumerNo: "C124",
      consumerName: "Jane Smith",
      address: "456, Park Avenue",
      city: "Malkapur",
      pinCode: "411002",
      contactNos: "9876543211",
      connectionType: "Type 2",
      meterNo: "MTR124",
    },
    {
      consumerNo: "C125",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411003",
      contactNos: "9876543212",
      connectionType: "Type 3",
      meterNo: "MTR125",
    },
    {
      consumerNo: "C126",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411004",
      contactNos: "9876543212",
      connectionType: "Type 4",
      meterNo: "MTR126",
    },
    {
      consumerNo: "C127",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411005",
      contactNos: "9876543212",
      connectionType: "Type 5",
      meterNo: "MTR127",
    },
    {
      consumerNo: "C128",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411006",
      contactNos: "9876543212",
      connectionType: "Type 6",
      meterNo: "MTR128",
    },
    {
      consumerNo: "C129",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411007",
      contactNos: "9876543212",
      connectionType: "Type 7",
      meterNo: "MTR129",
    },
    {
      consumerNo: "C1210",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411008",
      contactNos: "9876543212",
      connectionType: "Type 8",
      meterNo: "MTR1210",
    },
    {
      consumerNo: "C1211",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411009",
      contactNos: "9876543212",
      connectionType: "Type 9",
      meterNo: "MTR1211",
    },
    {
      consumerNo: "C1212",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411010",
      contactNos: "9876543212",
      connectionType: "Type 10",
      meterNo: "MTR1212",
    },
    {
      consumerNo: "C1213",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411011",
      contactNos: "9876543212",
      connectionType: "Type 11",
      meterNo: "MTR1213",
    },
    {
      consumerNo: "C1214",
      consumerName: "Rajesh Kumar",
      address: "789, Hill Road",
      city: "Malkapur",
      pinCode: "411012",
      contactNos: "9876543212",
      connectionType: "Type 12",
      meterNo: "MTR1214",
    },
    // Add more entries as needed
  ];

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

   // Reset page when search term changes
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };

  // Filter data based on search term
  const filteredData = consumerData.filter((consumer) =>
    Object.values(consumer)
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
          <Typography variant="h5">Consumer Details</Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "right" }}>
        <TextField
  label="Search Consumers"
  variant="outlined"
  style={{
    maxWidth: "400px",
    marginLeft: "auto",
  }}
  onChange={handleSearchChange}
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

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Consumer No</b>
              </TableCell>
              <TableCell>
                <b>Consumer Name</b>
              </TableCell>
              <TableCell>
                <b>Address</b>
              </TableCell>
              <TableCell>
                <b>City</b>
              </TableCell>
              <TableCell>
                <b>Pin Code</b>
              </TableCell>
              <TableCell>
                <b>Contact Nos</b>
              </TableCell>
              <TableCell>
                <b>Connection Type</b>
              </TableCell>
              <TableCell>
                <b>Meter No</b>
              </TableCell>
              <TableCell>
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((consumer, index) => (
              <TableRow key={index}>
                <TableCell>{consumer.consumerNo}</TableCell>
                <TableCell>{consumer.consumerName}</TableCell>
                <TableCell>{consumer.address}</TableCell>
                <TableCell>{consumer.city}</TableCell>
                <TableCell>{consumer.pinCode}</TableCell>
                <TableCell>{consumer.contactNos}</TableCell>
                <TableCell>{consumer.connectionType}</TableCell>
                <TableCell>{consumer.meterNo}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginRight: "5px", marginBottom: "5px" }}
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" size="small"
                  style={{ marginRight: "5px", marginBottom:"5px" }}>
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
      style={{ minWidth: "80px", marginRight:"10px" }}
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
      style={{ marginRight: "10px", minWidth: "80px" , marginLeft:"10px"}}
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
    padding: "5px 10px", // Adjusted padding for a smaller height
    height: "36px", // Explicitly setting height
    lineHeight: "1.5", // For better text alignment
  }}
  MenuProps={{
    PaperProps: {
      style: {
        maxHeight: "200px", // Optional: limit dropdown height
      },
    },
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

export default ConsumerDetail;
