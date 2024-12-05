import React from 'react';
import './LeftImgSection.css';

const LeftImgSection = ({ title, description, img, button }) => (
  <div className="section">
    <section className="about-section">
      <div className="about-image-container">
        <img src={img} alt="About Us" className="about-image aspect-ratio" />
      </div>
      <div className="about-content">
        <div className="about-content-top">
          <h2 className="about-title">{title}</h2>
          <p className="about-text">
            {description}
          </p>
        </div>
        <div className="about-content-bottom">
          {button ? <button className="about-button">{button}</button> : null}
        </div>
      </div>
    </section>
  </div>
);

export default LeftImgSection;