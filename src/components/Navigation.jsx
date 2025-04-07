import React from 'react';
import GooeyNav from 'react-gooey-nav';
import '..styles/Navigation.css'; 

const Navigation = ({ onNavigate }) => {
  return (
    <GooeyNav
      items={[
        { label: 'Home', onClick: () => onNavigate('home') },
        { label: 'About', onClick: () => onNavigate('about') },
        { label: 'Articles', onClick: () => onNavigate('articles') },
        { label: 'Air Quality', onClick: () => onNavigate('air quality') },
      ]}
    />
  );
};

export default Navigation;