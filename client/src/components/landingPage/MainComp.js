import { Box, Typography } from '@mui/material';
import React from 'react';

const MainComp = () => {
  return (
    <Box sx={{ width: '100%', height: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: 690, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 200, padding: 2 }}>
        <Typography sx={{ fontSize: 48, fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Welcome to Facesync</Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 700, color: '#5A5A5A', mt: 2, textAlign: 'center' }}>Facial Recognition Attendance Management System</Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 400, color: 'black', mt: 2, textAlign: 'center', padding: '0 20px' }}>Our state-of-the-art Face Recognition Attendance System is designed to streamline and modernize the way you track employee attendance. Say farewell to cumbersome manual processes and embrace a future-ready solution that ensures precision, security, and convenience.</Typography>
      </Box>
    </Box>
  );
};

export default MainComp;
