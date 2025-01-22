import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import useFetchApi from '../../hooks/useFetchApi';

const HireUsPage = () => {
  const { data, loading, error } = useFetchApi(process.env.REACT_APP_API_URL);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const footerData = data[0]?.acf?.footer;
  const contactFormData = data[0]?.acf?.hireus || {
    title: 'Get in Touch',
    subtitle: 'We would love to hear from you! Fill out the form below to get started.',
  };
  const navbarData = data[0]?.acf?.navbar;

  return (
    <div className="hire-us-page">
      <Navbar navbarData={navbarData} />
      <section id="contact-us" className="contact-us-section">
        <ContactForm contactFormData={contactFormData} />
      </section>
      <Footer footerData={footerData} />
    </div>
  );
};

export default HireUsPage;
