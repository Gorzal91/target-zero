import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';
import About from './components/About';
import ScrollList from './components/ScrollList';
import Footer from './components/Footer';
import Articles from './components/Articles';
import AirQuality from './components/AirQuality';
import './styles/App.css';



function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <Link to="/">
            <Logo />
          </Link>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/air-quality">Air Quality</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ScrollList />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/air-quality" element={<AirQuality />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;