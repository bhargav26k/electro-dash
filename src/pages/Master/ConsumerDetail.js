import React from "react";
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
} from "@material-ui/core";

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
    // Add more entries as needed
  ];

  return (
    <Paper style={{ padding: "20px", minHeight: "100vh" }} elevation={3}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Consumer Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Consumer No</b></TableCell>
              <TableCell><b>Consumer Name</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              <TableCell><b>City</b></TableCell>
              <TableCell><b>Pin Code</b></TableCell>
              <TableCell><b>Contact Nos</b></TableCell>
              <TableCell><b>Connection Type</b></TableCell>
              <TableCell><b>Meter No</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consumerData.map((consumer, index) => (
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
                    style={{ marginRight: "5px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ConsumerDetail;
