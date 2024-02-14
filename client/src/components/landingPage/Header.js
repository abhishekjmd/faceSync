import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

// Keeping styles as a separate object as suggested
const styles = {
  appContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  logoContainer: {
    width: 80,
    height: 80,
  },
  navbar: {
    width: 960,
    height: 80,
    display: 'flex',
  },
  navbarItemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    marginLeft: 20,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
  },
  actionButton: {
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    // backgroundColor:'red'
  },
  registerButton: {
    backgroundColor: 'black',
    padding: 1.2,
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex'
    // backgroundColor:'yellow'
  },
  loginButton: {
    padding: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    color: 'black',
    fontSize: 16,
    fontWeight: 700,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
  },
};

// Convert to arrow function component
const Header = () => (
  <Box sx={styles.appContainer}>
    <Box sx={styles.navbar}>
      <Box sx={styles.logoContainer}>
        <img src={logo} alt="Logo" style={{ width: 80, height: 80 }} />
      </Box>
      <Box sx={styles.navbarItemContainer}>
        <Typography sx={styles.menuItem}>About us</Typography>
        <Typography sx={styles.menuItem}>Contact</Typography>
        <Typography sx={styles.menuItem}>Support</Typography>
      </Box>
    </Box>
    <Box sx={{ ...styles.actionButton, marginLeft: 25 }}>
      <Box sx={styles.registerButton}>
        <Typography>Register</Typography>
      </Box>
      <Box sx={styles.loginButton}>
        <Typography>Login</Typography>
      </Box>
    </Box>
  </Box>
);

export default Header;
