import React from 'react';
import MarketSnapshotCard from '../../../components/MarketSnapshotCard/MarketSnapshotCard';
import './css/MarketSections.css';

const MarketSection = ({ marketData }) => {
  const snapshots = Object.values(marketData || {});

  return (
    <>
      <h1 className="sectionTitle">Market</h1>
      <div className="headerSeparator"></div>
      <div className="market-snapshots">
        {snapshots.length > 0 ? (
          snapshots.map((snapshot, index) => (
            <MarketSnapshotCard key={index} snapshot={snapshot} />
          ))
        ) : (
          <p>No market snapshots available.</p>
        )}
      </div>
    </>
  );
};

export default MarketSection;
