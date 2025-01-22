import React from 'react';
import LeftImgSection from '../../../components/LeftImgSection/LeftImgSection';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';
import './css/ListingSection.css';

const ListingSection = ({ listingData }) => {
  const { header = {}, properties = {} } = listingData;
  const propertiesArray = Object.values(properties).slice(0, 3);
  return (
    <section className="listing-section">
      <h1 className="sectionTitle">List of available properties</h1>
      <div className="headerSeparator"></div>
      <LeftImgSection
        title={header.listin_title || 'Default Title'}
        description={header.listin_description || 'Default Description'}
        img={header.listin_image || ''}
        button={header.button || null}
        darkMode={true}
      />
      <div className="separator"></div>
      <div className="property-cards horizontal-layout">
        {propertiesArray.length > 0 ? (
          propertiesArray.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </section>
  );
};

export default ListingSection;
