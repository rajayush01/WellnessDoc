import React from 'react'
import { useNavigate } from 'react-router-dom';

const DashboardDoc = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
      // Clear session or authentication state if necessary (optional)
      // localStorage.removeItem('authToken'); // Example: Clear auth token from localStorage
      
      // Redirect to login page
      navigate('/login');
  };

  return (
      <div className="p-8">
          <h1 className="text-4xl font-bold mb-6">Doctor Dashboard</h1>
          
          {/* Other dashboard content */}
          
          <button 
              onClick={handleLogout} 
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
              Logout
          </button>
      </div>
  );
};

export default DashboardDoc
