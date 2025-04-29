import React, { useState } from "react";
import { Box, Button, TextField, MenuItem, Typography, Paper, Grid } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const reportTypes = ["Sales Report", "User Engagement", "Revenue Analysis", "Performance Metrics"];

const ReportGenerationPage = () => {
  const [reportType, setReportType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [generated, setGenerated] = useState(false);

  // Sample data for charts
  const sampleData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: reportType || "Report Data",
        data: [12, 19, 7, 14, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"],
      },
    ],
  };

  // Generate Report Function
  const generateReport = () => {
    if (reportType && startDate && endDate) {
      setGenerated(true);
    } else {
      alert("Please select all fields to generate the report.");
    }
  };

  // Export Report as PDF
  const exportToPDF = () => {
    const reportElement = document.getElementById("report-section");
    html2canvas(reportElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
      pdf.save("Report.pdf");
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Report Generation
      </Typography>
      
      {/* Report Selection Form */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              fullWidth
              label="Select Report Type"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              {reportTypes.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth type="date" label="Start Date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth type="date" label="End Date" InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={generateReport}>
          Generate Report
        </Button>
      </Paper>

      {/* Display Report Section */}
      {generated && (
        <Paper id="report-section" sx={{ p: 3, mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            {reportType} ({startDate} - {endDate})
          </Typography>

          <Grid container spacing={3}>
            {/* Bar Chart */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Bar Graph
              </Typography>
              <Bar data={sampleData} />
            </Grid>

            {/* Pie Chart */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Pie Chart
              </Typography>
              <Pie data={sampleData} />
            </Grid>
          </Grid>

          {/* Download Report Button */}
          <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={exportToPDF}>
            Download Report (PDF)
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default ReportGenerationPage;
