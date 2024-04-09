import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';
import MainDashboard from './PersonalDashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        // <Dashboard setIsAuthenticated={setIsAuthenticated} /> 
        <MainDashboard setIsAuthenticated={()=>setIsAuthenticated(true)}/>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
