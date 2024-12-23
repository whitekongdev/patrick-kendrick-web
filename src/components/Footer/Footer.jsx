import React from 'react';
import './Footer.css';

const Footer = ({ footerData }) => {
  const { left, right } = footerData;

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-left_top">
          <h3>{left?.name}</h3>
        </div>
        <div className="footer-left_mid">
          <p>{left?.subtitle}</p>
        </div>
        <div className="footer-left_bottom">
          <a href={`tel:${left?.phone}`} className="footer-icon">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href={`mailto:${left?.mail}`} className="footer-icon">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href={left?.ig} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href={left?.fb} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href={left?.zillow} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-solid fa-house"></i>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right_top">
          <a href={right?.realurl} target="_blank" rel="noopener noreferrer">
            <img src={right?.realimg} alt="Logo" />
          </a>
          <img src={right?.img} alt="Logo" />
        </div>
        <div className="footer-right_bottom">
          <p>{right?.copyright} ©</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
