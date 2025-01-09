import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@material-ui/core";

const PolicyMaster = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Policy Master
      </Typography>

      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        style={{ marginBottom: "20px" }}
      >
        <Tab label="Consumer Entry" style={{  backgroundColor:"rgb(236, 243, 250)"}}/>
        <Tab label="Billing" style={{  backgroundColor:"rgb(236, 243, 250)"}} />
        <Tab label="Min / Flat Billing Charges" style={{  backgroundColor:"rgb(236, 243, 250)"}}/>
      </Tabs>

      {/* Consumer Entry Section */}
      {selectedTab === 0 && (
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Consumer Category"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Consumer Type"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Zone" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Consumer Status"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Meter Type" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Meter Reading Cycle"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      )}

      {/* Billing Section */}
      {selectedTab === 1 && (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Slab Wise Billing Rate"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Delay Payment Charges (DPC)"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Percentage of DPC Amount"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Divider style={{ margin: "20px 0" }} />

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Water Consumption Concession"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Minimum L.P.C.D Value"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Average No. of Person Per Consumer"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Percentage of Concession"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Divider style={{ margin: "20px 0" }} />

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Payment Before Due Date Concession"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Maximum No. of Days From Bill Date"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Percentage of Due Date Concession"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </>
      )}

      {/* Min / Flat Billing Charges Section */}
      {selectedTab === 2 && (
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6}>
            <TextField
              label="Minimum Bill Amount"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Flat Rate for Residential Consumers"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Flat Rate for Commercial Consumers"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Minimum Units for Flat Billing"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Penalty for Non-Payment (in %)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Late Fee Charge (in Rs.)"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      )}

      {/* Action Buttons */}
      <Grid container spacing={2} style={{ justifycontent: "flex-end", marginTop: "20px" }}>
        <Grid item>
          <Button variant="contained" color="primary">
            Save Setting
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default">
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Exit</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PolicyMaster;
