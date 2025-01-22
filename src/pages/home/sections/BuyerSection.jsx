import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';
import './css/BuyerSections.css';

const BuyerSection = ({ buyerData }) => {
  const { buyer_title, buyer_description, buyer_image, buyer_url } = buyerData;

  return (
    <>
    <h1 className='sectionTitle'>Buyer</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={buyer_title}
      description={buyer_description}
      img={buyer_image}
      bottom={[]}
      darkMode={true}
      button={{
        text: "Learn More",
        url: buyer_url,
      }}
    />
    </>
  );
};

export default BuyerSection;