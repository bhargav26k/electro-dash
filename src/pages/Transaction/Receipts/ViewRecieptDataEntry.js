import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
} from "@material-ui/core";

const ViewReceiptDataEntry = () => {
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [consumerNo, setConsumerNo] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  // Utility function to format dates
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Hardcoded table data with formatted dates
  const receiptData = [
    {
      billNo: "B12345",
      billDate: formatDate("2024-12-10"),
      amount: 1500,
      dpc: 50,
      paidAmount: 1550,
      dueBalance: 0,
    },
    {
      billNo: "B67890",
      billDate: formatDate("2024-11-15"),
      amount: 2000,
      dpc: 100,
      paidAmount: 2100,
      dueBalance: 0,
    },
    {
      billNo: "B54321",
      billDate: formatDate("2024-10-20"),
      amount: 2500,
      dpc: 200,
      paidAmount: 2700,
      dueBalance: 0,
    },
  ];


  const totalPages = Math.ceil(receiptData.length / rowsPerPage);

  const paginatedData = receiptData.slice(
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
      <Typography
        variant="h5"
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        Online Receipt Data Entry
      </Typography>

      {/* Consumer Information */}
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Consumer No."
            variant="outlined"
            fullWidth
            value={consumerNo}
            onChange={(e) => setConsumerNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Consumer Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Meter No." variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Prov. Receipt No." variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Zone No." variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Bit No." variant="outlined" fullWidth />
        </Grid>
      </Grid>

      {/* Payment and Billing Details */}
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={4}>
          <TextField label="Total Amount" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Penalty" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Previous Balance" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Current Bill" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Contact No." variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Total Paid Amt" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Paid Penalty" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Paid Balance" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Paid Current Bill" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Balance Amount" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Advance Amt" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Select
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Cheque">Cheque</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Cheque No." variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Cheque Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Bank/BR Code" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Bill No</b></TableCell>
              <TableCell><b>Bill Date</b></TableCell>
              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>DPC</b></TableCell>
              <TableCell><b>Paid Amount</b></TableCell>
              <TableCell><b>Due Balance</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.billNo}</TableCell>
                <TableCell>{data.billDate}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.dpc}</TableCell>
                <TableCell>{data.paidAmount}</TableCell>
                <TableCell>{data.dueBalance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

       {/* Pagination Section */}
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

      {/* Action Buttons */}
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item>
          <Button variant="contained" color="primary">
            New
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default">
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default">
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary">
            Exit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ViewReceiptDataEntry;
