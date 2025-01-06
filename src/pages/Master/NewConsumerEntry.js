import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
  InputLabel,
} from "@material-ui/core";

const NewConsumerEntry = () => {
  const [formData, setFormData] = useState({
    consumerNo: "",
    consumerName: "",
    consumerNameMarathi: "",
    address: "",
    addressMarathi: "",
    landmark: "",
    pinCode: "",
    city: "Malkapur",
    dmaNo: "",
    ozNo: "",
    contactNos: "",
    sanRefNo: "",
    letterNo: "",
    depositRptNo: "",
    receiptAmt: "",
    trNo: "",
    sanctionDate: "",
    depositDate: "",
    receiptDate: "",
    constructionType: "",
    connectionType: "",
    connectionSize: "",
    monthlyConsumption: "",
    zoneNo: "",
    bitNo: "",
    flatNos: "",
    bookNo: "",
    folioNo: "",
    meterNo: "",
    meterMake: "",
    ownership: "PVT",
    meterReading: "",
    testingNo: "",
    meterReadingDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>New Consumer Entry</h1>
      <Grid container spacing={2}>
        {/* Consumer Information */}
        <Grid item xs={12} md={6}>
          <TextField
            label="Consumer No."
            name="consumerNo"
            value={formData.consumerNo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Consumer Name"
            name="consumerName"
            value={formData.consumerName}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Consumer Name (Marathi)"
            name="consumerNameMarathi"
            value={formData.consumerNameMarathi}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Address Information */}
        <Grid item xs={12}>
          <h3>Address Information</h3>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address (Marathi)"
            name="addressMarathi"
            value={formData.addressMarathi}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Pin Code"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            label="D.M.A. No."
            name="dmaNo"
            value={formData.dmaNo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            label="O.Z. No."
            name="ozNo"
            value={formData.ozNo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contact Nos."
            name="contactNos"
            value={formData.contactNos}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Connection Sanction Information */}
        <Grid item xs={12}>
          <h3>Connection Sanction Information</h3>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="San Ref No."
            name="sanRefNo"
            value={formData.sanRefNo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Letter No."
            name="letterNo"
            value={formData.letterNo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Deposit Rpt No."
            name="depositRptNo"
            value={formData.depositRptNo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Receipt Amt"
            name="receiptAmt"
            value={formData.receiptAmt}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        {/* Dates */}
        <Grid item xs={12} md={4}>
          <TextField
            label="Sanction Date"
            type="date"
            name="sanctionDate"
            value={formData.sanctionDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Deposit Date"
            type="date"
            name="depositDate"
            value={formData.depositDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Receipt Date"
            type="date"
            name="receiptDate"
            value={formData.receiptDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        {/* Billing Details */}
        <Grid item xs={12}>
          <h3>Billing Details</h3>
        </Grid>
        <Grid item xs={12}>
          {/* Add dropdowns and inputs here */}
        </Grid>
      </Grid>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
          New
        </Button>
        <Button variant="contained" color="secondary" style={{ marginRight: "10px" }}>
          Edit
        </Button>
        <Button variant="contained" color="default" style={{ marginRight: "10px" }}>
          Save
        </Button>
        <Button variant="contained" color="default" style={{ marginRight: "10px" }}>
          Delete
        </Button>
        <Button variant="contained" color="default" style={{ marginRight: "10px" }}>
          Cancel
        </Button>
        <Button variant="contained" color="default">
          Exit
        </Button>
      </div>
    </div>
  );
};

export default NewConsumerEntry;
