import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MainSection from './sections/MainSection';
import ListingSection from './sections/ListingSection';
import SellerSection from './sections/SellerSection';
import BuyerSection from './sections/BuyerSection';
import TeamSection from './sections/TeamSection';
import VendorSection from './sections/VendorSection';
import PartnersSection from './sections/PartnersSection';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import useFetchApi from '../../hooks/useFetchApi';
import { useLocation } from 'react-router-dom';
import ModalContact from '../../components/ModalForm/ModalForm';
import './home.css';

const HomePage = () => {
  const { state } = useLocation();
  const { data, loading, error } = useFetchApi(
    'https://patrick-kendrick.whitekongsoftware.com/wp-json/wp/v2/pages'
  );

  useEffect(() => {
    if (state?.targetSection) {
      const section = document.getElementById(state.targetSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [state]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const apiData = data[0];
  console.log(apiData)
  const images = Object.entries(apiData.acf?.home?.carousel || {}).map(([key, value]) => {
    if (key.toLowerCase().includes('video')) {
      return { type: 'video', url: value };
    }
    return { type: 'image', url: value };
  });
  const listingData = apiData.acf?.listint;
  const sellerData = apiData.acf?.seller;
  const buyerData = apiData.acf?.buyer;
  const teamData = apiData.acf?.team;
  const vendorData = apiData.acf?.vendor;
  const partnersData = apiData.acf?.partners;
  const navbarData = apiData.acf?.navbaricon;
  const contactFormData = apiData.acf.contactform;

  return (
    <div className="home-page">
      <ModalContact contactFormData={contactFormData} />
      <Navbar navbarData={navbarData} />
      <section id="main" className="main-section spacer">
        <MainSection apiData={apiData} images={images} />
      </section>
      <section id="listings" className="listing-section spacer">
        <ListingSection listingData={listingData} />
      </section>
      <section id="seller" className="seller-section spacer">
        <SellerSection sellerData={sellerData} />
      </section>
      <section id="buyer" className="buyer-section spacer">
        <BuyerSection buyerData={buyerData} />
      </section>
      <section id="team" className="team-section spacer">
        <TeamSection teamData={teamData} />
      </section>
      <section id="vendor" className="vendor-section spacer">
        <VendorSection vendorData={vendorData} />
      </section>
      <section id="partners" className="partners-section spacer">
        <PartnersSection partnersData={partnersData} />
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
