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
  Paper,
  Typography,
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
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        New Consumer Entry
      </Typography>

      {/* Consumer Information */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "10px", }}>
          Consumer Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Consumer No."
              name="consumerNo"
              value={formData.consumerNo}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Consumer Name"
              name="consumerName"
              value={formData.consumerName}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Consumer Name (Marathi)"
              name="consumerNameMarathi"
              value={formData.consumerNameMarathi}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Paper>

{/* Address Information and Billing Details */}
<Grid container spacing={2}>
        <Grid item xs={12} md={6}>
      {/* Address Information */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Address Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address (Marathi)"
              name="addressMarathi"
              value={formData.addressMarathi}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Pin Code"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              label="D.M.A. No."
              name="dmaNo"
              value={formData.dmaNo}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              label="O.Z. No."
              name="ozNo"
              value={formData.ozNo}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Nos."
              name="contactNos"
              value={formData.contactNos}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Paper>
</Grid>

<Grid item xs={12} md={6}>
       {/* Billing Details */}
<Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
  <Typography variant="h6" style={{ marginBottom: "10px" }}>
    Billing Details
  </Typography>
  <Grid container spacing={2}>
    {/* Construction Type */}
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Construction Type</InputLabel>
        <Select
          name="constructionType"
          value={formData.constructionType}
          onChange={handleInputChange}
          label="Construction Type"
        >
          <MenuItem value="Residential">Residential</MenuItem>
          <MenuItem value="Commercial">Commercial</MenuItem>
          <MenuItem value="Industrial">Industrial</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    {/* Connection Type */}
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Connection Type</InputLabel>
        <Select
          name="connectionType"
          value={formData.connectionType}
          onChange={handleInputChange}
          label="Connection Type"
        >
          <MenuItem value="Type 1">Type 1</MenuItem>
          <MenuItem value="Type 2">Type 2</MenuItem>
          <MenuItem value="Type 3">Type 3</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    {/* Connection Size */}
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Connection Size</InputLabel>
        <Select
          name="connectionSize"
          value={formData.connectionSize}
          onChange={handleInputChange}
          label="Connection Size"
        >
          <MenuItem value="Small">Small</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Large">Large</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    {/* Approx. Monthly Consumption */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Approx. Monthly Consumption"
        name="monthlyConsumption"
        value={formData.monthlyConsumption}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Zone No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Zone No"
        name="zoneNo"
        value={formData.zoneNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Bit No */}
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Bit No</InputLabel>
        <Select
          name="bitNo"
          value={formData.bitNo}
          onChange={handleInputChange}
          label="Bit No"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    {/* Flat Nos */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Flat Nos"
        name="flatNos"
        value={formData.flatNos}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Book No */}
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Book No</InputLabel>
        <Select
          name="bookNo"
          value={formData.bookNo}
          onChange={handleInputChange}
          label="Book No"
        >
          <MenuItem value="A1">A1</MenuItem>
          <MenuItem value="B1">B1</MenuItem>
          <MenuItem value="C1">C1</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    {/* Folio No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Folio No"
        name="folioNo"
        value={formData.folioNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>
  </Grid>
</Paper>
 </Grid>
 </Grid>

 {/* Connection Sanction Information and Meter Details */}
 <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
      {/* Connection Sanction Information */}
<Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
  <Typography variant="h6" style={{ marginBottom: "10px" }}>
    Connection Sanction Information
  </Typography>
  <Grid container spacing={2}>
    {/* San Ref. No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="San Ref. No"
        name="sanRefNo"
        value={formData.sanRefNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Letter No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Letter No"
        name="letterNo"
        value={formData.letterNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Date (for Letter No) */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Date"
        name="sanctionDate"
        type="date"
        value={formData.sanctionDate}
        onChange={handleInputChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    </Grid>

    {/* Deposit Report No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Deposit Rpt No"
        name="depositRptNo"
        value={formData.depositRptNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Receipt Amount */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Receipt Amt"
        name="receiptAmt"
        value={formData.receiptAmt}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Date (for Receipt Amount) */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Date"
        name="receiptDate"
        type="date"
        value={formData.receiptDate}
        onChange={handleInputChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    </Grid>

    {/* TR No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="TR No"
        name="trNo"
        value={formData.trNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Date (for TR No) */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Date"
        name="trDate"
        type="date"
        value={formData.trDate}
        onChange={handleInputChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    </Grid>
  </Grid>
</Paper>
</Grid>

        <Grid item xs={12} md={6}>
{/* Meter Details */}
<Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
  <Typography variant="h6" style={{ marginBottom: "10px" }}>
    Meter Details
  </Typography>
  <Grid container spacing={2}>
    {/* Meter No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Meter No"
        name="meterNo"
        value={formData.meterNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Meter Make */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Meter Make"
        name="meterMake"
        value={formData.meterMake}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Ownership */}
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Ownership</FormLabel>
        <RadioGroup
          row
          name="ownership"
          value={formData.ownership}
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="PVT"
            control={<Radio color="primary" />}
            label="PVT"
          />
          <FormControlLabel
            value="MNP"
            control={<Radio color="primary" />}
            label="MNP"
          />
        </RadioGroup>
      </FormControl>
    </Grid>

    {/* Meter Reading */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Meter Reading"
        name="meterReading"
        value={formData.meterReading}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Date (for Meter Reading) */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Date"
        name="meterReadingDate"
        type="date"
        value={formData.meterReadingDate}
        onChange={handleInputChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    </Grid>

    {/* Testing No */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Testing No"
        name="testingNo"
        value={formData.testingNo}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
    </Grid>

    {/* Date (for Testing No) */}
    <Grid item xs={12} md={6}>
      <TextField
        label="Date"
        name="testingDate"
        type="date"
        value={formData.testingDate}
        onChange={handleInputChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    </Grid>
  </Grid>
</Paper>
 </Grid>
 </Grid>



      {/* Buttons */}
      <Paper style={{ padding: "20px", marginTop: "20px" }} elevation={3}>
        <Grid container spacing={2} >
          <Grid item>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              New
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" style={{ marginRight: "10px" }}>
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" style={{ marginRight: "10px" }}>
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" style={{ marginRight: "10px" }}>
              Delete
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" style={{ marginRight: "10px" }}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default">
              Exit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default NewConsumerEntry;
