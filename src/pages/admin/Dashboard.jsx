import { Typography, Paper, Grid, Box, ThemeProvider, createTheme } from '@mui/material';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidenavbar from './sidenavbar.jsx';


// Define a purple-based theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#124116', // Purple
    },
    secondary: {
      main: '#234915', // Another shade of purple
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const Dashboard = () => {
  // Sample data for Bar chart (Total Events)
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Loans',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ' rgba(0, 75, 4, 0.3)',
        borderColor: 'rgba(0, 72, 0, 0.99)',
        borderWidth: 3,
      },
    ],
  };

  // Sample data for Line chart (Participants)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Participants',
        data: [120, 190, 300, 500, 200, 300],
        fill: true,
        backgroundColor: ' rgba(0, 75, 4, 0.3)',
        borderColor: 'rgba(0, 72, 0, 0.99)',
      },
    ],
  };

  // Sample data for Pie chart (Venue Distribution)
  const pieChartData = {
    labels: ['Crop Loan', 'Farm Mechanization Loans', 'Land Purchase Loans','Livestock Loans Loans','Warehouse Receipt Loans','Solar Pump Set Loan'],
    datasets: [
      {
        label: 'Venue Distribution',
        data: [50, 30, 20, 13,25,30],
        backgroundColor: [
          'rgba(103, 58, 183, 0.5)',
          'rgba(233, 30, 99, 0.5)',
          'rgba(33, 150, 243, 0.5)',
          'rgba(102, 255, 255, 0.59)',
          'rgba(205, 255, 0, 0.63)','rgba(0, 49, 74, 1)'
        ],
        borderColor: [
          'rgba(103, 58, 183, 0.5)',
          'rgba(233, 30, 99, 0.5)',
          'rgba(33, 150, 243, 0.5)',
          'rgba(102, 255, 255, 0.59)',
          'rgba(205, 255, 0, 0.63)','rgba(0, 49, 74, 1)'
        ],
        borderWidth: 3,
      },
    ],
  };

  // Define consistent padding for the Paper components
  const paperStyle = { p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' };

  return (
    <ThemeProvider theme={theme}>
      <Sidenavbar/>
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: "center", color: 'purple' }}>
          Dashboard
        </Typography>
        <Grid container spacing={3} style={{marginLeft:'30px'}} alignItems="stretch">
          {/* Bar Chart for Total Events */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={paperStyle}>
              <Typography variant="h6" component="h3" gutterBottom>
                Loan Distribution
              </Typography>
              <Bar data={barChartData} />
            </Paper>
          </Grid>

          {/* Line Chart for Participants */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={paperStyle}>
              <Typography variant="h6" component="h3" gutterBottom>
                Participant Growth
              </Typography>
              <Line data={lineChartData} />
            </Paper>
          </Grid>

          {/* Pie Chart for Venue Distribution */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={paperStyle}>
              <Typography variant="h6" component="h3" gutterBottom>
                Venue Distribution
              </Typography>
              <Pie data={pieChartData} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;