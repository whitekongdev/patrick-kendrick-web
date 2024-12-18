import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ navbarData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollState, setScrollState] = useState('notScrolled');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isHireUsPage = location.pathname === '/hire-us';

  useEffect(() => {
    if (isHireUsPage || isHome) {
      document.documentElement.style.setProperty('--navbar-top', `10px`);
      document.documentElement.style.setProperty('--navbar-padding', `1rem`);
      document.documentElement.style.setProperty('--navbar-font-size', `3rem`);
      document.documentElement.style.setProperty('--navbar-gap', `75px`);
      setScrollState('notScrolled');
    }
  }, [isHireUsPage, isHome]);

  useEffect(() => {
    if (isHireUsPage) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const padding = Math.max(0.5, 1 - currentScrollY / 150);
      const fontSize = Math.max(1, 3 - currentScrollY / 150);
      const gap = Math.max(50, 75 - currentScrollY / 2);
      const topOffset = currentScrollY > 0 ? Math.max(0, 10 - currentScrollY / 20) : 10;
    
      document.documentElement.style.setProperty('--navbar-top', `${topOffset}px`);
      document.documentElement.style.setProperty('--navbar-padding', `${padding}rem`);
      document.documentElement.style.setProperty('--navbar-font-size', `${fontSize}rem`);
      document.documentElement.style.setProperty('--navbar-gap', `${gap}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHireUsPage]);

  const handleNavigation = (id) => {
    setIsMenuOpen(false);

    if (id === 'main') {
      if (!isHome) {
        navigate('/', { state: { targetSection: id } });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (!isHome) {
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
      <nav
        className={`navbar ${isHireUsPage ? 'no-scroll' : 'sticky'} ${scrollState}`}
      >
        <div className="logo-container" onClick={() => handleNavigation('main')} style={{ cursor: 'pointer' }}>
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
          <span onClick={() => handleNavigation('team')}>About Me</span>
          <span onClick={() => handleNavigation('partners')}>Partners</span>
          <span onClick={() => handleNavigation('market')}>Market</span>
          <span onClick={() => handleNavigation('spokane')}>Spokane</span>
          <span onClick={() => navigate('/hire-us')} className="hire-us">Contact Us</span>
        </div>
      </nav>
  );
};

export default Navbar;
