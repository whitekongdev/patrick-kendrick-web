import React from 'react';
import './RightImgSection.css';

const RightImgSection = ({ title, description, img, bottom, darkMode = false, button = null }) => (
  <div className={`section ${darkMode ? 'dark' : ''}`}>
    <section className="statistics-section">
      <div className="statistics-content">
        <h2 className="statistics-title">{title}</h2>
        <p className="statistics-text">{description}</p>
        <div className="statistics-numbers">
          {bottom.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-value">{stat.title}</span>
              <span style={{ marginLeft: '1rem' }}></span>
              <span className="stat-label">{stat.subtitle}</span>
            </div>
          ))}
        </div>
        {button && (
          <div className="about-content-bottom">
            {button.url ? (
              <a
                href={button.url}
                className="about-button"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.text}
              </a>
            ) : (
              <button
                className="about-button"
                onClick={button.onClick}
              >
                {button.text}
              </button>
            )}
          </div>
        )}
      </div>
      <div className="statistics-image-container">
        <img src={img} alt="Statistics Collage" className="statistics-image aspect-ratio" />
      </div>
    </section>
  </div>
);

export default RightImgSection;