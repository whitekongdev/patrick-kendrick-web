import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HireUs from './hireus';
import useFetchApi from '../../hooks/useFetchApi';
import './hireus.css';

const HireUsPage = () => {
  const { data, loading, error } = useFetchApi(
    'https://patrick-kendrick.whitekongsoftware.com/wp-json/wp/v2/pages'
  );

  useEffect(() => {
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const hireUsData = data[0]?.acf?.hireus || {
    header: {
      description: 'Default description',
      image: 'https://via.placeholder.com/800x400',
    },
    contact: {
      name: 'Default Name',
      phone: '000-000-0000',
      email: 'example@example.com',
      ig: '#',
      fb: '#',
      personal_link: '#',
      zillow: '#',
    },
  };
  const navbarData = data[0]?.acf?.navbaricon;

  return (
    <div className="hire-us-page">
      <Navbar navbarData={navbarData} />
      <section id="hire-us" className="hire-us-section">
        <HireUs hireUsData={hireUsData} />
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default HireUsPage;
