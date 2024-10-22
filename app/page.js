"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import DoctorDashboard from './pages/Dashboard/DashboardDoc'
import PatientDashboard from './pages/Dashboard/DashboardPatient'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Conditional Dashboard Rendering */}
          <Route path="/dashboard" element={<DashboardWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const DashboardWrapper = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const userType = searchParams.get('userType');

  if (userType === 'doctor') {
    return <DoctorDashboard />;
  } else if (userType === 'patient') {
    return <PatientDashboard />;
  } else {
    return <div>No user type specified. Please login again.</div>;
  }
};

export default App;
