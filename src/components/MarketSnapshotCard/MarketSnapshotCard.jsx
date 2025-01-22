import React from 'react';
import './MarketSnapshotCard.css';

const MarketSnapshotCard = ({ snapshot }) => {
  const { market_snap_title, market_snap_image, market_snap_url } = snapshot;

  return (
    <div className="market-snapshot-card">
      <div className="snapshot-image">
        <img src={market_snap_image} alt={market_snap_title} className="snapshot-img" />
      </div>
      <div className="snapshot-content">
        <h3 className="snapshot-title">{market_snap_title}</h3>
        <div className="snapshot-button">
          <a href={market_snap_url} target="_blank" rel="noopener noreferrer" className="navigate-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketSnapshotCard;
