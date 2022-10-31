import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const Navbar = () => {
  const auth = React.useContext(AuthContext);
  
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
  
  const AllBoxes = () => {
    
    return(
      <>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:"system-ui" }}
              >
              <NavLink to='/' style={{textDecoration:"none"}} >
                <Typography
                  variant='h6'
                  fontFamily={"system-ui"}
                  color='white'
                >
                  Home
                </Typography>
                </NavLink>
              </Button>
              
              <Button
                key="About"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:"system-ui" }}
              >
              <NavLink to='/about'style={{textDecoration:"none"}}>
                <Typography
                  variant='h6'
                  fontFamily={"system-ui"}
                  color='white'
                >
                  About
                </Typography>
                </NavLink>
              </Button>
              
              {auth.isLoggedIn && <Button
                key="Dashboard"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:"system-ui" }}
              >
              <NavLink to='/dashboard' style={{textDecoration:"none"}}>
                <Typography
                  variant='h6'
                  fontFamily={"system-ui"}
                  color='white'
                >
                  Dashboard
                </Typography>
                </NavLink>
              </Button>}
              
              {!auth.isLoggedIn &&<Button
                key="Login"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:"system-ui" }}
              >
              <NavLink to='/login' style={{textDecoration:"none"}}>
                <Typography
                  variant='h6'
                  fontFamily={"system-ui"}
                  color='white'
                >
                  Login
                </Typography>
                </NavLink>
              </Button>}
              
              {auth.isLoggedIn && <Button
                key="Logout"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:"system-ui" }}
              >
              <NavLink to='/' style={{textDecoration:"none"}}>
                <Typography
                  variant='h6'
                  fontFamily={"system-ui"}
                  color='white'
                >
                  Logout
                </Typography>
                </NavLink>
              </Button>}
          </Box>
      </>
    )
  }
  const Navmenu = () => {
    return(
      <>
        <MenuItem key="Home" onClick={handleCloseUserMenu}>
          <NavLink to='/' style={{textDecoration:"none"}}><Typography textAlign="center" color="black">Home</Typography></NavLink>
        </MenuItem>
        <MenuItem key="About" onClick={handleCloseUserMenu}>
          <NavLink to='/about' style={{textDecoration:"none"}}><Typography textAlign="center" color="black">About</Typography></NavLink>
        </MenuItem>
        {auth.isLoggedIn && <MenuItem key="Dashboard" onClick={handleCloseUserMenu}>
          <NavLink to='/dashboard' style={{textDecoration:"none"}}><Typography textAlign="center" color="black">Dashboard</Typography></NavLink>
        </MenuItem>}
        {!auth.isLoggedIn &&<MenuItem key="Login" onClick={handleCloseUserMenu}>
          <NavLink to='/login' style={{textDecoration:"none"}}><Typography textAlign="center" color="black">Login</Typography></NavLink>
        </MenuItem>}
        {auth.isLoggedIn && <MenuItem key="Logout" onClick={handleCloseUserMenu}>
          <NavLink to='/' style={{textDecoration:"none"}}><Typography textAlign="center" color="black">Logout</Typography></NavLink>
        </MenuItem>}
      </>
    )
  }
  
  const FullMenu = () => {
    return(
      <>
        <MenuItem key="Account" onClick={handleCloseUserMenu}>
        <NavLink to='/Account' style={{textDecoration:"none"}}><Typography textAlign="center" color="black">Account</Typography></NavLink>
        </MenuItem>
        <MenuItem key="Logout" onClick={handleCloseUserMenu}>
        <NavLink to='/' style={{textDecoration:"none"}}><Typography textAlign="center" color="black">Logout</Typography></NavLink>
        </MenuItem>
      </>
    )
  }

  return (
    <AppBar position="static" sx={{backgroundColor: "transparent"}} elevation={0}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
        <NavLink to='/'><img src='https://cdn-icons-png.flaticon.com/512/1806/1806608.png' style={{width: "70px"}} alt="fox with book and magnifying glass"></img></NavLink>
          <NavLink to='/' style={{textDecoration:"none"}}>
          <Typography
            variant="h2"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              pl: 2
            }}
          >
            Snatch
          </Typography>
          </NavLink>
          <AllBoxes></AllBoxes>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{color:"black"}}
            >
              <MenuIcon />
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
              <Navmenu></Navmenu>
            </Menu>
          </Box>
          <NavLink to='/' style={{textDecoration:"none", color:'black'}}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 6,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            SNATCH
          </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <FullMenu></FullMenu>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
