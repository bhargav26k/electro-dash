import React, { useState } from "react";
import {
  Grid,
  TextField,
  Paper,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";

const Bit = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      {/* Consumer Information */}
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Bill Correction
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Consumer No"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Meter No"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Consumer Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>

<Paper style={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        style={{ marginBottom: "20px" }}
      >
        <Tab label="Bill Correction" style={{  backgroundColor:"rgb(236, 243, 250)"}}/>
        <Tab label="Reading Correction" style={{ backgroundColor:"rgb(236, 243, 250)"}}/>
      </Tabs>

      <Box>
        {/* Bill Correction */}
        {selectedTab === 0 && (
          <>
            {/* Previous Bill Section */}
            <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
              Previous Bill
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Previous Bill Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Previous Bill Amount"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Previous Due Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Previous Units Consumed"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Previous Payment Status"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            {/* New Correction Section */}
            <Typography variant="subtitle1" style={{ marginTop: "20px", marginBottom: "10px" }}>
              New Correction
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Corrected Bill Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Corrected Bill Amount"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="New Due Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Corrected Units Consumed"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Corrected Payment Status"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            {/* Reason Section */}
      <Typography variant="subtitle1" style={{ marginTop: "20px",marginBottom: "20px" }}>
        Reason
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <TextField
            label="Reason"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
          </>
        )}

        {/* Reading Correction */}
        {selectedTab === 1 && (
          <>
            {/* Previous Reading Section */}
            <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
              Previous Reading
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Pre. Reading Dt"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Pre. Reading"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Curr. Reading Dt"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Current Reading"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Consumption"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            {/* New Correction Section */}
            <Typography variant="subtitle1" style={{ marginTop: "20px", marginBottom: "10px" }}>
              New Correction
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="New Pre. Reading Dt"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="New Pre. Reading"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="New Curr. Reading Dt"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="New Current Reading"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="New Consumption"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            {/* Reason Section */}
      <Typography variant="subtitle1" style={{ marginTop: "20px",marginBottom: "20px" }}>
        Reason
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <TextField
            label="Reason"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
          </>
        )}
      </Box>
      </Paper>

      {/* Action Buttons */}
      <Grid container spacing={2} style={{ justifycontent: "flex-end", marginTop: "20px" }}>
        <Grid item>
          <Button variant="outlined">ADR</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Discount</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Update
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
        <Grid item>
          <Button variant="outlined">Receipt Collection</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Bit;
