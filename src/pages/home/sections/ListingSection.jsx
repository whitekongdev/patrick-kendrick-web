import React from 'react';
import LeftImgSection from '../../../components/LeftImgSection/LeftImgSection';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';
import './css/ListingSection.css';

const ListingSection = ({ listingData }) => {
  const { header = {}, properties = {} } = listingData;
  const propertiesArray = Object.values(properties);
  return (
    <section className="listing-section">
      <h1 className='sectionTitle'>List of available properties</h1>
      <div className='headerSeparator'></div>
      <LeftImgSection
        title={header.title || 'Default Title'}
        description={header.description || 'Default Description'}
        img={header.image || ''}
        button={header.button || null}
      />
      <div className="separator"></div>
      <div className="property-cards">
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
