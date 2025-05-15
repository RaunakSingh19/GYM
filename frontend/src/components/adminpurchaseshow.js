import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Badge
} from "@mui/material";
import { Search, MonetizationOn } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[3],
}));

const PurchaseShow = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/api/registrations/all");
        setData(data);
        calculateTotalSales(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const calculateTotalSales = (purchases) => {
    const total = purchases.reduce((sum, item) => sum + (item.price || 0), 0);
    setTotalSales(total);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.servicePlan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.price.toString().includes(searchTerm)
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <StyledAppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Purchase Dashboard
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}> totalSales  </Typography>
            <Badge 
              badgeContent={` $${totalSales.toLocaleString()}`} 
              color="secondary"
              sx={{ 
                '& .MuiBadge-badge': { 
                  fontSize: '0.8rem',
                  padding: '0 8px',
                  height: '24px',
                  borderRadius: '12px'
                } 
              }}
            >
              <MonetizationOn fontSize="large" />
            </Badge>
            
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search purchases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: 'background.paper',
                  borderRadius: 1,
                }
              }}
              sx={{ width: 300 }}
            />
          </Box>
        </Toolbar>
      </StyledAppBar>

      <Box sx={{ p: 3, flex: 1 }}>
        <TableContainer component={Paper} elevation={3}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Table sx={{ minWidth: 650 }} aria-label="purchase table">
              <TableHead sx={{ backgroundColor: 'primary.light' }}>
                <TableRow>
                  <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Phone</TableCell>
                  <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Service Plan</TableCell>
                  <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Price</TableCell>
                  <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Purchase Time</TableCell>
                  <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Expiry Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <TableRow
                      key={item._id}
                      sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}
                    >
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.servicePlan}</TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>{new Date(item.purchaseTime).toLocaleString()}</TableCell>
                      <TableCell>{new Date(item.expiryTime).toLocaleString()}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                      {data.length === 0 ? 'No purchase records found' : 'No matching purchases found'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PurchaseShow;