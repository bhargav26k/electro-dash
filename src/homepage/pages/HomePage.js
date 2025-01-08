import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  chartContainer: {
    marginTop: theme.spacing(3),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  // Data for the cards
  const cardData = [
    { title: "Consumers", value: "5,230" },
    { title: "Bills", value: "1,024" },
    { title: "Revenue", value: "$45,000" },
    { title: "Connections", value: "4,856" },
  ];

  // Bar Chart Data
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 7000, 8000, 6000, 10000, 12000, 15000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Doughnut Chart Data
  const doughnutChartData = {
    labels: ["Paid Bills", "Pending Bills"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // Line Chart Data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Active Connections",
        data: [4000, 4500, 4800, 5000, 5200, 5500, 5800],
        borderColor: "#4BC0C0",
        fill: false,
      },
    ],
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="h4" component="p" >
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} className={classes.chartContainer}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue Over Time
              </Typography>
              <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Bill Status
              </Typography>
              <Doughnut data={doughnutChartData} options={{ maintainAspectRatio: false }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Active Connections Over Time
              </Typography>
              <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
