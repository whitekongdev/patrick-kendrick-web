import React from 'react';
import './MarketSnapshotCard.css';

const MarketSnapshotCard = ({ snapshot }) => {
  const { title, image, url } = snapshot;

  return (
    <div className="market-snapshot-card">
      <div className="snapshot-image">
        <img src={image} alt={title} className="snapshot-img" />
      </div>
      <div className="snapshot-content">
        <h3 className="snapshot-title">{title}</h3>
        <div className="snapshot-button">
          <a href={url} target="_blank" rel="noopener noreferrer" className="navigate-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketSnapshotCard;
