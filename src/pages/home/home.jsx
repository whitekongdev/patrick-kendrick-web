import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainSection from './sections/MainSection';
import ListingSection from './sections/ListingSection';
import SellerSection from './sections/SellerSection';
import BuyerSection from './sections/BuyerSection';
import TeamSection from './sections/TeamSection';
import MarketSection from './sections/MarketSection';
import PartnersSection from './sections/PartnersSection';
import SpokaneSection from './sections/SpokaneSection';
import useFetchApi from '../../hooks/useFetchApi';
import { useLocation } from 'react-router-dom';
import ModalContact from '../../components/ModalForm/ModalForm';
import Footer from '../../components/Footer/Footer'
import './home.css';

const HomePage = () => {
  const { state } = useLocation();
  const { data, loading, error } = useFetchApi(process.env.REACT_APP_API_URL);

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
  const partnersData = apiData.acf?.partners;
  const marketData = apiData.acf?.market;
  const spokaneData = apiData.acf?.spokane;
  const navbarData = apiData.acf?.navbaricon;
  const contactFormData = apiData.acf?.contactform;
  const footerData = apiData.acf?.footer;

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
      <section id="partners" className="partners-section spacer">
        <PartnersSection partnersData={partnersData} />
      </section>
      <section id="market" className="market-section spacer">
        <MarketSection marketData={marketData}/>
      </section>
      <section id="spokane" className="spokane-section spacer">
        <SpokaneSection spokaneData={spokaneData} />
      </section>
      <Footer footerData={footerData} />
    </div>
  );
};

export default HomePage;
