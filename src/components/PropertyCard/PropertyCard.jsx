import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <a href={property.propertie_link} className="property-card" target="_blank" rel="noopener noreferrer">
      <div className="property-image-container">
        <img
          src={property.propertie_image}
          alt={property.propertie_title}
          className="property-image aspect-ratio"
        />
      </div>
      <div className="property-content">
        <h3 className="property-title">{property.propertie_title}</h3>
        <p className="property-price">${property.propertie_price}</p>
        <div className='property-bottom'>
          <ul className="property-details">
            <li><i className="icon-area"></i> {property.propertie_area}</li>
            <li><i className="icon-rooms"></i> {property.propertie_rooms}</li>
            <li><i className="icon-kitchens"></i> {property.propertie_kitchens}</li>
          </ul>
        </div>
      </div>
    </a>
  );
};

export default PropertyCard;
