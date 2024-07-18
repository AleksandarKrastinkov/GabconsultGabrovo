// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import HomePageNavbar from './components/HomePage-Navbar'; // Adjust the path as necessary
import './App.css'; // Import CSS

const App = () => {
  return (
    <BrowserRouter>
      <HomePageNavbar />
      {/* Other components can go here */}
    </BrowserRouter>
  );
};

export default App;
