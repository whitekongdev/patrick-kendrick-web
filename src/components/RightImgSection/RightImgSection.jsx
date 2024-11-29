import React from 'react';
import './RightImgSection.css';

const rightImgSection= ({ title, description, img }) => (
  <section className="statistics-section">
    <div className="statistics-content">
      <h2 className="statistics-title">{title}</h2>
      <p className="statistics-text">
        {description}
      </p>
      <div className="statistics-numbers">
        <div className="stat-item">
          <span className="stat-value">270+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">12+</span>
          <span className="stat-label">Available</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">50+</span>
          <span className="stat-label">Events</span>
        </div>
      </div>
    </div>
    <div className="statistics-image-container">
      <img src={img} alt="Statistics Collage" className="statistics-image" />
    </div>
  </section>
);

export default rightImgSection;