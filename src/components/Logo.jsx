import React from 'react';
import '../styles/Logo.css';
import logo from '../assets/logo2.png'; // Import pliku SVG

const Logo = ({ onClick }) => {
  return (
    <div className="logo-container" onClick={onClick}>
      <img
        src={logo} // Użycie zaimportowanego pliku
        alt="Net-Zero Climate Goal Logo"
        className="logo"
      />
    </div>
  );
};

export default Logo;