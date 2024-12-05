import React from 'react';
import './hireus.css';

const HireUs = ({ hireUsData }) => {
  const { header, contact } = hireUsData;

  return (
    <section className="hire-us-section">
      <div className="hire-us-header">
        <div className="hire-us-header-image">
          <img src={header.image} alt="Hire Us" />
        </div>
        <div className="hire-us-header-content">
          <p>{header.description}</p>
        </div>
      </div>

      <div className="hire-us-contact">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
        <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <ul className="social-links">
          <li>
            <a href={contact.ig} target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href={contact.fb} target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href={contact.personal_link} target="_blank" rel="noopener noreferrer">Personal</a>
          </li>
          <li>
            <a href={contact.zillow} target="_blank" rel="noopener noreferrer">Zillow</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HireUs;
