import React from 'react';
import RightImgSection from '../../../components/RightImgSection/RightImgSection';
import './css/PartnerSections.css';

const SellerSection = ({ partnersData }) => {
  const { title, description, image } = partnersData;

  return (
    <>
    <h1 className='sectionTitle'>Partners</h1>
    <div className='headerSeparator'></div>
    <RightImgSection
      title={title}
      description={description}
      img={image}
      darkMode={true}
      bottom={[]}
    />
    </>
  );
};

export default SellerSection;