import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ContactUs from './screens/ContactUs';
import Login from './screens/Login';
import Register from './screens/Register';
import AdminPage from './screens/AdminPage';
import StudentRegistration from './screens/StudentRegistration';
import AboutUs from './screens/AboutUs';
import StudentsLogin from './screens/StudentsLogin';
import AttendenceDashboard from './screens/AttendenceDashboard';
import Profile from './screens/Profile';
import AttendenceSheet from './screens/AttendenceSheet';

function App() {
  return (
    <Router>
      <Box
        sx={{
          width: '100%',
          height: '100vh', 
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<AdminPage />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* Corrected the path and closing tag */}
          <Route path="/students-login" element={<StudentsLogin />} />
          <Route path="/attendence" element={<AttendenceDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/attendence-sheet" element={<AttendenceSheet />} />

          </Routes>
      </Box>
    </Router>
  );
}

export default App;
