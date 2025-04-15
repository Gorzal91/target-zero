import React from 'react';
import '../styles/Logo.css';
import logo from '../assets/Logo.png'; 

const Logo = ({ onClick }) => {
  return (
    <div className="logo-container" onClick={onClick}>
      <img
        src={logo} // Use the imported SVG file
        alt="Net-Zero Climate Goal Logo"
        className="logo"
      />
    </div>
  );
};

export default Logo;