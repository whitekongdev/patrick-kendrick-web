import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ navbarData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    setIsMenuOpen(false);
    if (id === 'main') {
      if (location.pathname !== '/') {
        navigate('/', { state: { targetSection: id } });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (location.pathname !== '/') {
        navigate('/', { state: { targetSection: id } });
      } else {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        {navbarData ? (
          <img src={navbarData} alt="Logo" className="brand-logo" />
        ) : (
          <h1 className="brand">
            Patrick<br />
            <span className="indented">Kendrick</span>
          </h1>
        )}
      </div>
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <span onClick={() => handleNavigation('main')}>Home</span>
        <span onClick={() => handleNavigation('listings')}>Listings</span>
        <span onClick={() => handleNavigation('seller')}>Seller</span>
        <span onClick={() => handleNavigation('buyer')}>Buyer</span>
        <span onClick={() => handleNavigation('team')}>Team</span>
        <span onClick={() => handleNavigation('vendor')}>Vendor</span>
        <span onClick={() => handleNavigation('partners')}>Partners</span>
        <span onClick={() => navigate('/hire-us')} className="hire-us">Hire Us</span>
      </div>
    </nav>
  );
};

export default Navbar;
