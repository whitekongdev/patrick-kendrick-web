import React from 'react';
import './PropertyList.css';

const PropertyList= ({ imageUrl }) => (
  <section className="property-list">
    <div className="property-image-container">
      <img src={imageUrl} alt="Property List" className="property-image" />
    </div>
    <div className="property-content">
      <h2 className="property-title">Explore Our Extensive List of Available Homes</h2>
      <p className="property-text">
        We currently have a wide selection of properties ready for you! From charming family homes to modern living spaces,
        our active listings offer something for every taste and budget. Check out our latest listings in Spokane, including 
        Bolan Ave, Maple St, and Ray St. Explore your next home today with detailed virtual tours and photos—your dream home 
        is just a click away!
      </p>
      <button className="property-button">Request a Consultation</button>
    </div>
  </section>
);

export default PropertyList;