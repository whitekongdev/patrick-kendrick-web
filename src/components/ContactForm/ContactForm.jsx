import React from 'react';
import './ContactForm.css';

const ContactForm = ({ contactFormData }) => {
  const { title, subtitle } = contactFormData;

  return (
    <section className="contact-form-section">
      <div className="contact-form-header">
        <h2 className="form-title">{title}</h2>
        <p className="form-subtitle">{subtitle}</p>
      </div>
      <div className="contact-form-body">
        <form className="contact-form">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="phone">Phone *</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="interest">What are you interested in?</label>
          <select id="interest" name="interest">
            <option value="">What are you interested in?</option>
            <option value="buy">Buy a Property</option>
            <option value="sell">Sell a Property</option>
          </select>

          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required></textarea>

          <div className="privacy-policy">
            <input type="checkbox" id="privacy" name="privacy" />
            <label htmlFor="privacy">
              By providing your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications...
            </label>
          </div>

          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
