import React from 'react';
import './LeftImgSection.css';
import { useNavigate } from "react-router-dom";

const LeftImgSection = ({ title, description, img, button, buttonLink, autoNavigation = false, darkMode = false }) => {
  const navigate = useNavigate();

  const handleAutoNavigation = () => {
    if (autoNavigation) {
      navigate("/hire-us");
    }
  };

  return (
    <div className={`section ${darkMode ? 'dark' : ''}`}>
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
            {autoNavigation ? (
              <button className="about-button" onClick={handleAutoNavigation}>
                {button}
              </button>
            ) : button && buttonLink ? (
              <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="about-button">
                {button}
              </a>
            ) : button ? (
              <button className="about-button">{button}</button>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftImgSection;