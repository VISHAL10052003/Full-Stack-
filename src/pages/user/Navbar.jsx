import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useNavigate } from 'react-router-dom'; // Uncommented this line
// -import red from '@mui/material/colors/red';
// +import { red } from '@mui/material/colors'


const pages = ['PROFILE','ABOUT','ADMIN'];
const settings = ['Account', 'Performance', 'Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate(); // Initialize navigate
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
        darker: '#1b5e20',
      },
      secondary: {
        main: "#000000",
        darker: "#1b5e20"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color='secondary'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AgricultureIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 110,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 1200,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <b onClick={() => navigate('/home')} >AGRI CLOUD FINANCE</b>
            </Typography>
            <Box sx={{ flexGrow: 3, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <AgricultureIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 10, display: { xs: 'none', md: 'flex' } }}>
              { <Button
                style={{ fontSize: '20px', margin: "-1px" }}
                size='small'
                key="profile"
                onClick={() => navigate('/profile')} // Use navigate from react-router-dom
                sx={{ my: 3, color: 'white', display: 'block', ":hover": { bgcolor: "#F4D160", color: "black" } }}
              >
                PROFILE
              </Button> }
              {<Button
                style={{ fontSize: '20px', margin: "-1px" }}
                size='small'
                key="about"
                onClick={() => navigate('/about')} // Use navigate from react-router-dom
                sx={{ my: 3, color: 'white', display: 'block', ":hover": { bgcolor: "#F4D160", color: "black" } }}
              >
                ABOUT
              </Button>}
              
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;