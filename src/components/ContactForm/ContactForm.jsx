import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = ({ title, subtitle }) => {
  const [formData, setFormData] = useState({
    "your-name": "",
    phone: "",
    "your-email": "",
    interest: "",
    "your-message": "",
    privacy: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy) {
      setStatus("Please agree to the privacy policy.");
      return;
    }

    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (key === "privacy") {
        formDataToSend.append(key, value ? "true" : "");
      } else {
        formDataToSend.append(key, value);
      }
    }
    formDataToSend.append("_wpcf7", "357");
    formDataToSend.append("_wpcf7_unit_tag", "wpcf7-f357-p1-o1");
    formDataToSend.append("_wpcf7_container_post", "0");

    try {
      const response = await fetch(
        "https://patrick-kendrick.whitekongsoftware.com/wp-json/contact-form-7/v1/contact-forms/357/feedback",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "mail_sent") {
        setStatus("Message sent successfully.");
        setFormData({
          "your-name": "",
          phone: "",
          "your-email": "",
          interest: "",
          "your-message": "",
          privacy: false,
        });
      } else {
        setStatus("Error sending the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Connection error.");
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-header">
        <h2 className="form-title">{title}</h2>
        <p className="form-subtitle">{subtitle}</p>
      </div>
      <div className="contact-form-body">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="your-name">Full Name *</label>
          <input
            type="text"
            id="your-name"
            name="your-name"
            value={formData["your-name"]}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="your-email">Email *</label>
          <input
            type="email"
            id="your-email"
            name="your-email"
            value={formData["your-email"]}
            onChange={handleChange}
            required
          />

          <label htmlFor="interest">What are you interested in?</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="Buy a Property">Buy a Property</option>
            <option value="Sell a Property">Sell a Property</option>
          </select>

          <label htmlFor="your-message">Message *</label>
          <textarea
            id="your-message"
            name="your-message"
            value={formData["your-message"]}
            onChange={handleChange}
            required
          ></textarea>

          <div className="privacy-policy">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
            />
            <label htmlFor="privacy">
              By providing your contact information, you acknowledge and agree
              to our Privacy Policy and consent to receiving marketing
              communications...
            </label>
          </div>

          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
