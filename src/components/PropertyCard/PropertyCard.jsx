import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <a href={property.link} className="property-card" target="_blank" rel="noopener noreferrer">
      <div className="property-image-container">
        <img
          src={property.image}
          alt={property.title}
          className="property-image aspect-ratio"
        />
      </div>
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-price">{property.price}$</p>
        <div className='property-bottom'>
          <ul className="property-details">
            <li><i className="icon-area"></i> {property.area}</li>
            <li><i className="icon-rooms"></i> {property.rooms}</li>
            <li><i className="icon-kitchens"></i> {property.kitchens}</li>
          </ul>
        </div>
      </div>
    </a>
  );
};

export default PropertyCard;
