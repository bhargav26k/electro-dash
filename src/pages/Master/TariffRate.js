import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  InputAdornment,
  Select,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const TariffRate = () => {
  const [newRates, setNewRates] = useState([
    { tariffTypeName: "Domestic", fromSlab: 0, uptoSlab: 0, rate: 0 },
    { tariffTypeName: "Commercial", fromSlab: 0, uptoSlab: 0, rate: 0 },
  ]);

  const [oldRates, setOldRates] = useState([
    {
      tariffTypeName: "Domestic",
      fromDate: "2010-04-29",
      uptoDate: "2020-04-29",
      fromSlab: 12601,
      uptoSlab: 22500,
      rate: 7.5,
    },
    {
      tariffTypeName: "Commercial",
      fromDate: "2010-04-29",
      uptoDate: "2020-04-29",
      fromSlab: 22501,
      uptoSlab: 32400,
      rate: 11,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);


  const totalPages = Math.ceil(
    oldRates.filter((rate) =>
      Object.values(rate)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ).length / rowsPerPage
  );

  // Function to format date as DD-MMM-YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Format hardcoded oldRates dates on initial load
  const formattedOldRates = oldRates.map((rate) => ({
    ...rate,
    fromDate: formatDate(rate.fromDate),
    uptoDate: formatDate(rate.uptoDate),
  }));

  // Handle adding new rates to old rates
  const saveNewRates = () => {
    const currentDate = formatDate(new Date().toISOString());
    const newOldRates = newRates.map((rate) => ({
      tariffTypeName: rate.tariffTypeName,
      fromDate: currentDate,
      uptoDate: currentDate,
      fromSlab: rate.fromSlab,
      uptoSlab: rate.uptoSlab,
      rate: rate.rate,
    }));
    setOldRates((prevRates) => [
      ...prevRates.map((rate) => ({
        ...rate,
        fromDate: formatDate(rate.fromDate),
        uptoDate: formatDate(rate.uptoDate),
      })),
      ...newOldRates,
    ]);
    setNewRates([
      { tariffTypeName: "Domestic", fromSlab: 0, uptoSlab: 0, rate: 0 },
      { tariffTypeName: "Commercial", fromSlab: 0, uptoSlab: 0, rate: 0 },
    ]);
  };

  const handleNewRateChange = (index, field, value) => {
    const updatedRates = [...newRates];
    updatedRates[index][field] = value;
    setNewRates(updatedRates);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };

  const handlePageChange = (direction) => {
    if (direction === "next" && page < totalPages - 1) setPage(page + 1);
    if (direction === "prev" && page > 0) setPage(page - 1);
    if (direction === "first") setPage(0);
    if (direction === "last") setPage(totalPages - 1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredOldRates = formattedOldRates.filter((rate) =>
    Object.values(rate)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const paginatedOldRates = filteredOldRates.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }}>
    
      {/* New Tariff Rate Section */}
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        New Tariff Rate
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={6}>
          <TextField
            label="From Date"
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            variant="outlined"
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Upto Date"
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            variant="outlined"
            
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Tariff Type Name</b></TableCell>
              <TableCell><b>From Slab</b></TableCell>
              <TableCell><b>Upto Slab</b></TableCell>
              <TableCell><b>Tariff Rate</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newRates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell>{rate.tariffTypeName}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={rate.fromSlab}
                    onChange={(e) =>
                      handleNewRateChange(index, "fromSlab", e.target.value)
                    }
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={rate.uptoSlab}
                    onChange={(e) =>
                      handleNewRateChange(index, "uptoSlab", e.target.value)
                    }
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={rate.rate}
                    onChange={(e) =>
                      handleNewRateChange(index, "rate", e.target.value)
                    }
                    fullWidth
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={saveNewRates}>
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default">
            Cancel
          </Button>
        </Grid>
      </Grid>

      {/* Old Tariff Rate Section */}
      <Grid
        container
        alignItems="center"
        justifycontent="space-between"
        style={{ marginBottom: "20px", marginTop:"10px" }}
      >
        <Grid item xs={12} md={6}>
      <Typography variant="h5" style={{ margin: "40px 0 20px" }}>
        Old Tariff Rate
      </Typography>
      </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "right" }}>
      <TextField
        label="Search Old Rates"
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
      /></Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Tariff Type Name</b></TableCell>
              <TableCell><b>From Date</b></TableCell>
              <TableCell><b>Upto Date</b></TableCell>
              <TableCell><b>From Slab</b></TableCell>
              <TableCell><b>Upto Slab</b></TableCell>
              <TableCell><b>Rate</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOldRates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell>{rate.tariffTypeName}</TableCell>
                <TableCell>{rate.fromDate}</TableCell>
                <TableCell>{rate.uptoDate}</TableCell>
                <TableCell>{rate.fromSlab}</TableCell>
                <TableCell>{rate.uptoSlab}</TableCell>
                <TableCell>{rate.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container alignItems="center" justifycontent="space-between" style={{ marginTop: "20px" }}>
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
        <Grid item>
          <Typography
          variant="body1"
            style={{
              fontWeight: "500",
              textAlign: "center",
            }}
            >
            Page {page + 1} of {totalPages}
          </Typography>
        </Grid>
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

export default TariffRate;
