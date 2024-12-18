import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ModalForm.css';

Modal.setAppElement('#root');

const ModalContact = ({contactFormData}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalIsOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Contact Form"
      className="modal fade-in"
      overlayClassName="overlay fade-in"
    >
      <div className="modal-content">
        <button onClick={closeModal} className="close-button">×</button>
        <h2 className="modal-title">{ contactFormData.title }</h2>
        <p className="modal-subtitle">
            {contactFormData.subtitle}
        </p>
        <div className="modal-body">
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
      </div>
    </Modal>
  );
};

export default ModalContact;
