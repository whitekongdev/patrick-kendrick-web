import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';
import './css/BuyerSections.css';

const BuyerSection = ({ buyerData }) => {
  const { title, description, image } = buyerData;

  return (
    <>
    <h1 className='sectionTitle'>Buyers</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={title}
      description={description}
      img={image}
      bottom={[]}
      darkMode={true}
    />
    </>
  );
};

export default BuyerSection;