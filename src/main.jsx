import React from 'react';
import ReactDOM from 'react-dom/client'; // Użyj 'react-dom/client' zamiast 'react-dom'
import App from './App';
import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);