import React from "react";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const ReceiptDeletion = () => {
  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Receipt Deletion
      </Typography>

      
        <Grid item xs={12}>
          <TextField
            label="Receipt No"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <hr style={{marginTop:"30px",marginBottom:"30px"}}></hr>
        {/* Receipt Details Section */}
      <Grid container spacing={3}>

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

        <Grid item xs={12} sm={6}>
          <TextField
            label="Prov. Receipt No"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Prov. Receipt Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Collection Center"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Receipt Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Payment Mode"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Cheque No"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Cheque Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Bank No"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Receipt Amount"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            style={{
              backgroundColor: "#fffde7",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Remark"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "20px",
          justifycontent: "flex-end",
        }}
      >
        <Grid item>
          <Button variant="contained" color="secondary">
            Delete Receipt
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

export default ReceiptDeletion;
