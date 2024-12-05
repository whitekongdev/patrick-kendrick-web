import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <p>© datos de la empresa</p>
    </div>
    <div className="footer-right">
      <div className="navbar-links">
        <span>Home</span>
        <span>Listings</span>
        <span>Seller</span>
        <span>Buyer</span>
        <span>Team</span>
        <span>Vendor</span>
        <span>Partners</span>
      </div>
    </div>
  </footer>
);

export default Footer;