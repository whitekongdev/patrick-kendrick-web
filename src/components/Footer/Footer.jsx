import React from 'react';
import './Footer.css';

const Footer = ({ footerData }) => {
  const { left, right } = footerData;

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-left_top">
          <h3>{left?.footer_name}</h3>
        </div>
        <div className="footer-left_mid">
          <p>{left?.footer_subtitle}</p>
        </div>
        <div className="footer-left_bottom">
          <a href={`tel:${left?.footer_phone}`} className="footer-icon">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href={`mailto:${left?.footer_mail}`} className="footer-icon">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href={left?.footer_ig} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href={left?.footer_fb} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href={left?.footer_zillow} target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fa-solid fa-house"></i>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right_top">
          <a href={right?.footer_realurl} target="_blank" rel="noopener noreferrer">
            <img src={right?.footer_realimg} alt="Logo" />
          </a>
          <img src={right?.footer_img} alt="Logo" />
        </div>
        <div className="footer-right_bottom">
          <p>{right?.footer_copyright} ©</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
