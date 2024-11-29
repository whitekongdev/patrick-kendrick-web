import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
      <h1 className="brand">
      Patrick<br />
      <span className="indented">Kendrick</span>
    </h1>
    <div className="navbar-links">
      <span>Home</span>
      <span>Listings</span>
      <span>Seller</span>
      <span>Buyer</span>
      <span>Team</span>
      <span>Vendor</span>
      <span>Partners</span>
      <span className="hire-us">Hire Us</span>
    </div>
  </nav>
);

export default Navbar;