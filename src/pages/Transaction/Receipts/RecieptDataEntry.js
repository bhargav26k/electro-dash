import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const ReceiptDataEntry = () => {
  const [centerName, setCenterName] = useState("");
  const [provisionalReceiptDate, setProvisionalReceiptDate] = useState("");
  const [noOfReceipts, setNoOfReceipts] = useState("");
  const [totalReceiptAmount, setTotalReceiptAmount] = useState("");

  // Options for Center Name dropdown
  const centerNameOptions = [
    "NAMITA_CHANDE_CH",
    "CENTER_1",
    "CENTER_2",
    "CENTER_3",
    "CENTER_4",
  ];

  const handleCenterNameChange = (event) => {
    setCenterName(event.target.value);
  };

  return (
    <Paper
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "50px",
      }}
      elevation={3}
    >
      <Typography variant="h5" style={{ marginBottom: "20px", textAlign: "center" }}>
        Online Receipt Data Entry
      </Typography>

      <Grid container spacing={3}>
        {/* Center Name Dropdown */}
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Center Name</InputLabel>
            <Select
              value={centerName}
              onChange={handleCenterNameChange}
              label="Center Name"
            >
              {centerNameOptions.map((name, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Provisional Receipt Date */}
        <Grid item xs={12}>
          <TextField
            label="Provisional Receipt Date"
            type="date"
            variant="outlined"
            fullWidth
            value={provisionalReceiptDate}
            onChange={(e) => setProvisionalReceiptDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Number of Receipts */}
        <Grid item xs={12}>
          <TextField
            label="No of Receipts"
            variant="outlined"
            fullWidth
            value={noOfReceipts}
            onChange={(e) => setNoOfReceipts(e.target.value)}
          />
        </Grid>

        {/* Total Receipt Amount */}
        <Grid item xs={12}>
          <TextField
            label="Total Receipt Amount"
            variant="outlined"
            fullWidth
            value={totalReceiptAmount}
            onChange={(e) => setTotalReceiptAmount(e.target.value)}
          />
        </Grid>

        {/* Action Buttons */}
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item>
            <Button variant="contained" color="primary">
              OK
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
      </Grid>
    </Paper>
  );
};

export default ReceiptDataEntry;
