import React from 'react';
import './LeftImgSection.css';

const LeftImgSection = ({ title, description, img, button }) => (
<section className="about-section">
    <div className="about-image-container">
      <img src={img} alt="About Us" className="about-image" />
    </div>
    <div className="about-content">
      <h2 className="about-title">{title}</h2>
      <p className="about-text">
        {description}
      </p>
      {button ? <button className="about-button">{button}</button> : null}
      
    </div>
  </section>
);

export default LeftImgSection;